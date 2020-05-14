var settings = {
    hardmode: false,
    help: false,
    sw_enabled: true,
    sw_tna: true,
    invert_coords: true,
}
var result, errcount, counter, rand_t;
var js_data, mArray = [];
var bad = [];
var myMap, gmapSelector, subm, taskCollection, backgroundCollection, startTime, pTime, clocktimer, allowed;

function initCheckboxes() {
    document.getElementById("s_hd").checked=settings.hardmode;
    document.getElementById("s_hp").checked=settings.help;
    document.getElementById("s_sw").checked=settings.sw_enabled;
}

function init(){     
    myMap = new ymaps.Map("map", {
        center: [36.00, 42.00],
        controls: ['zoomControl', 'rulerControl'],
        zoom: 2,
        type: 'yandex#satellite'
    }),
    loadMenu();
}
    
function loadMenu() {
    var gmapList = mainMenuItems();
        
        // Создает главное меню
    gmapSelector = new ymaps.control.ListBox({
        data: {
            content: 'Выбрать карту',
            image: "assets/icon.png"
        },
        items: gmapList,
        options: {float: "right"},
        state: {expanded: true}
    });
    
    var area;
    
        // Обработчик событий на клик по строчке
    gmapSelector.events.add('click', function (e) {
        var item = e.get('target');
        if (item != gmapSelector) {
            gmapSelector.Collapse;
            myMap.setZoom( item.data.get('zoom'));
            myMap.panTo(
                item.data.get('center'),
                {delay: 900});
            if (subm != undefined){
                myMap.controls.remove(subm);
            }
            area = item.data.get('code');
            subm = addSubmenu( area );
            myMap.controls.add( subm );
            
            subm.events.add('click', function (e) {
                var chosen = e.get('target');
                if (chosen != subm) {
                    myMap.controls.remove(gmapSelector);
                    myMap.controls.remove(subm);
                    if (area=='tst') {showUpload()} else {loadData( area, chosen.data.get('id'))};
                }
            });
        }
    });
    myMap.controls.add(gmapSelector);
}        

function toggleHard(){
    settings.hardmode = s_hd.checked;
}

function toggleHelp(){
    settings.help = s_hp.checked;
}

function toggleSW(){
    if (settings.sw_tna) {
        document.getElementById("sw").innerText = "00:00.00";
        settings.sw_enabled = s_sw.checked;
        document.getElementById("sw").style.display = (settings.sw_enabled) ? "block" : "none";
    }
}

function loadData( area, spec ){
    var data_path = 'maps/'+area+'/'+spec+'.geojson';
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', data_path, true);
    xhr.send();
    
    document.getElementById("task").innerText = "Загрузка...";

    // По окончании пересылки данных с сервера
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        var lfram = JSON.parse( xhr.responseText );
        js_data = lfram.features;
        if (lfram.metadata.background != undefined) {
            xhr.open('GET', lfram.metadata.background, true);
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState != 4) return;
                drawBackground( JSON.parse(xhr.responseText).features );
            }
        }
        parseData();
    };
}

function drawBackground(input) {
    for (var i in input) {
        if (input[i].geometry.type == "MultiLineString") {
            if (settings.invert_coords) {
                for (var j in input[i].geometry.coordinates) {
                    for (var k in input[i].geometry.coordinates[j]) {
                    var tmp = input[i].geometry.coordinates[j][k][0];
                    input[i].geometry.coordinates[j][k][0] = input[i].geometry.coordinates[j][k][1];
                    input[i].geometry.coordinates[j][k][1] = tmp;
                    }
                }
            }
            for (var k in input[i].geometry.coordinates) {
                var newLine = new ymaps.GeoObject( {
                    geometry: {
                        type: "LineString",
                        coordinates: input[i].geometry.coordinates[k], 
                    },
                    properties: { description: input[i].properties.name },
                }, {strokeWidth: 2} 
                    );
                backgroundCollection.add(newLine);
            }
        }
    }
}

function parseData() {
    
    /* Создаётся две коллекции - одна рабочая, для точечных объектов,
       вторая иллюстративная*/
    taskCollection = new ymaps.GeoObjectCollection({}, {
        preset: 'islands#blueCircleDotIcon', 
        draggable: false 
    });
    
    backgroundCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false 
    });
        
    for (var i in js_data) {
        drawGeoObjects(js_data[i], i);
    }
    
    myMap.geoObjects.add(backgroundCollection);
    myMap.geoObjects.add(taskCollection);
    
    for (var i in js_data) {
        js_data[i].id = i;
    }
    
    counter = 0;
    errcount = 0;
    for (var i in js_data) {
        mArray[i] = i;
        counter++;
    }
    result = counter;
    
    // Получает выборку всех объектов - необх. для дальнейшего взаимодействия
    oneStep.query = ymaps.geoQuery(taskCollection); 

    oneStep.query.addEvents('click', function (e) {
        var x = e.get('target');
        alertMistake.source = x.properties.balloonContentHeader;
    });
    
    oneStep.query.addEvents('click', alertMistake);
    
    settings.sw_tna = false;
    document.getElementById("s_swc").style = "background-color: #bbbbbb";
    s_sw.disabled = true;
    startTime = new Date();
    if (settings.sw_enabled) swStep();

    oneStep();
}

function drawGeoObjects( entry, ind ) {

    // Обработка точечных объектов
    if (entry.geometry.type == "Point") {
        if (settings.invert_coords) {
            var tmp = entry.geometry.coordinates[0];
            entry.geometry.coordinates[0] = entry.geometry.coordinates[1];
            entry.geometry.coordinates[1] = tmp;
        }
        var newDot;
        newDot = new ymaps.GeoObject( entry );
        newDot.properties.balloonContentHeader = entry.properties.description;
        newDot.id = entry.id;
        taskCollection.add( newDot );
    }
    
    // Обработка линейных объектов
    if (entry.geometry.type == "LineString") {
        if (settings.invert_coords) {
            for (var j in entry.geometry.coordinates) {
                var tmp = entry.geometry.coordinates[j][0];
                entry.geometry.coordinates[j][0] = entry.geometry.coordinates[j][1];
                entry.geometry.coordinates[j][1] = tmp;
            }
        }
        var newLine = new ymaps.GeoObject( {
                geometry: {
                    type: "LineString",
                    coordinates: entry.geometry.coordinates, 
                },
                properties: { description: entry.properties.description },
            }, {strokeWidth: 2});
        backgroundCollection.add(newLine);
        var half = Math.floor( entry.geometry.coordinates.length/2 );
        var newDot = new ymaps.GeoObject( {
            geometry: {
                type: "Point",
                coordinates: entry.geometry.coordinates[half] },
            id: entry.id,
                } );
        newDot.properties.balloonContentHeader = entry.properties.description;
        newDot.id = entry.id;
        taskCollection.add(newDot);
    }
    
    // Обработка площадных объектов
    if (entry.geometry.type == "Polygon") {
        if (settings.invert_coords) {
            for (var j in entry.geometry.coordinates) {
                for (var k in entry.geometry.coordinates[j]) {
                var tmp = entry.geometry.coordinates[j][k][0];
                entry.geometry.coordinates[j][k][0] = entry.geometry.coordinates[j][k][1];
                entry.geometry.coordinates[j][k][1] = tmp;
                }
            }
        }
        var newPoly = new ymaps.Polygon( entry.geometry.coordinates );
        backgroundCollection.add(newPoly);
        
        var half = Math.floor( entry.geometry.coordinates[0].length / 2);
        var bounds = [entry.geometry.coordinates[0][0], entry.geometry.coordinates[0][half]];
        var coords = [(bounds[0][0] + bounds[1][0]) / 2,
                      (bounds[0][1] + bounds[1][1]) / 2];

        var newDot = new ymaps.Placemark( coords );
        newDot.properties.balloonContentHeader = entry.properties.description;
        newDot.id = entry.id;
        taskCollection.add(newDot);
    } 
}
    
function oneStep() {
    var rand = Math.floor(Math.random() * counter );
    rand_t = mArray[rand];
    document.getElementById("task").innerText = js_data[rand_t].properties.description;
    
    mArray[rand] = mArray[counter-1];
    counter -= 1;
    mArray.pop();
    
    var qur = oneStep.query;
    qur.each( function(field) {
        if (field.id == rand_t) {
            alertAccurate.theone = field;
            field.events.remove('click', alertMistake);
            field.events.add('click', alertAccurate );
        }
    });
}
 
function alertMistake() {
	alert((settings.help) ? "Неправильно! Это "+alertMistake.source : "Неправильно!");
	result++;
	++errcount;
	if (errcount >= 3 && settings.help) {
		var rightimage = alertAccurate.theone;
		rightimage.options.set({
            preset: 'islands#violetCircleDotIcon',
        }); 
	}
} 

function alertAccurate() {
    var ra = alertAccurate.theone;
    ra.events.remove('click', alertAccurate);
    ra.events.add('click', alertMistake);
    var badsel = document.getElementById("badsel")
    for (var i = 0; i < badsel.options.length; i++) {
        var option = badsel.options[i];
        if(option.selected) {
            if (option.value=="one") allowed = 1;
            if (option.value=="two") allowed = 2;
            if (option.value=="three") allowed = 3;
        }
    }
    if (errcount >= allowed) bad.push(alertAccurate.theone.properties.balloonContentHeader);
    
    if (!settings.hardmode) {
        switch(errcount) {
          case 0:
            ra.options.set({
                preset: 'islands#darkGreenCircleDotIcon',
            });
            break;
          case 1:
            ra.options.set({
                preset: 'islands#oliveCircleDotIcon',
            });
            break;
          case 2:
            ra.options.set({
                preset: 'islands#darkOrangeCircleDotIcon',
            });
            break;
          default:
            ra.options.set({
                preset: 'islands#redCircleDotIcon',
            });
        } 
    } else {
        ra.options.set({
            preset: 'islands#blueCircleDotIcon',
        });
    };
    
    errcount = 0;
    if (counter != 0) {
        oneStep();
    } else {
        endGame();
    }
} 

function endGame() {
    var total = js_data.length;
    taskCollection.removeAll();
    backgroundCollection.removeAll();
    document.getElementById("task").innerText = "Тест завершён!";
    
    if (settings.sw_enabled) {
        clearTimeout(clocktimer); 
    }
    
    var rslt = document.getElementById("rslt");
    rslt.style.zIndex = "1200";
    rslt.style.top = "30%";
    var percent = rslt.appendChild(document.createElement('p'));
    percent.innerHTML = "Тест завершён! Процент точности: "+Math.round(total*100/result)+"%";
    percent.style = "text-align:center; margin:10px; font-weight: bold;";
    if (settings.sw_enabled) {
        var wholetime = rslt.appendChild(document.createElement('p'));
        wholetime.innerHTML = "Весь тест занял <b>"+document.getElementById("sw").innerText+"</b>";
        var avgtime = rslt.appendChild(document.createElement('p'));
        pTime = Math.floor(pTime/total);
        var ms = pTime % 1000; pTime -= ms; ms = Math.floor(ms/10);
        pTime = Math.floor (pTime/1000);
        var s = pTime%60; pTime-=s;
        pTime = Math.floor (pTime/60);
        var m = pTime%60; pTime-=m;
        if (m<10) m='0'+m;
        if (s<10) s='0'+s;
        if (ms<10) ms='0'+ms;
        if (m=='00'){
        avgtime.innerHTML = "В среднем на один объект ушло <b>" + s + "." + ms + " секунд</b>";}
        else {
        avgtime.innerHTML = "В среднем на один объект ушло <b>"+ m + " минут " + s + "." + ms + " секунд</b>";}  
    }
    var badlist = rslt.appendChild(document.createElement('p'));
    if (bad.length != 0) {
        badlist.innerHTML = "Присмотритесь повнимательнее к следующим объектам:";
        var div = rslt.appendChild(document.createElement('div'));
        var bl = div.appendChild(document.createElement('ul'));
        div.style = "overflow-y:auto; height:200px; position: block";
        for (var index in bad) {
            var li = bl.appendChild(document.createElement('li'));
            li.innerHTML = bad[index];
        }
    } else {
        badlist.innerHTML = "На этой карте у вас нет объектов, которых вы вообще не знаете :)";
    }
    setTimeout(function() {document.getElementById("map").addEventListener("click", hideResult); }, 500);
    
    result = 0;
    settings.sw_tna = true;
    s_sw.disabled = false;
    document.getElementById("s_sw").style.color = "#37483e";
    document.getElementById("s_swc").style = "background-color: #37483e";
}

function hideResult() {
    var rslt = document.getElementById("rslt");
    while (rslt.hasChildNodes()) {
        rslt.removeChild(rslt.lastChild);
    }
    rslt.style.zIndex = 1;
    rslt.style.top = "-80%";
    bad = [];
    document.getElementById("map").removeEventListener("click", hideResult);
    loadMenu();
}

/* Секундомер */

function swStep() {
    var newTime = new Date(),
        passedTime = newTime.getTime() - startTime.getTime();
    pTime = passedTime;
    var ms = passedTime % 1000; passedTime -= ms; ms = Math.floor(ms/10);
    passedTime = Math.floor (passedTime/1000);
    var s = passedTime%60; passedTime-=s;
    passedTime = Math.floor (passedTime/60);
    var m = passedTime%60; passedTime-=m;
    if (m<10) m='0'+m;
    if (s<10) s='0'+s;
    if (ms<10) ms='0'+ms;
    if (settings.sw_enabled==1) document.getElementById("sw").innerText = m + ':' + s + '.' + ms;
    clocktimer = setTimeout("swStep()",10); 
}

/* Загрузка набора данных с компьютера */

function showUpload() {
    var upl = document.getElementById("upl");
    upl.style.zIndex = "1200";
    upl.style.top = "40%";
    setTimeout(function() {document.getElementById("map").addEventListener("click", hideUpload); }, 500);
    document.getElementById("iu").addEventListener("change", loadUserData);
}

function loadUserData() {
    var file = this.files ? this.files[0] : null,
    fileReader = window.FileReader ? new FileReader() : null;
    if (file && fileReader) {
        fileReader.addEventListener("loadend", function(e) {
            var contents = e.target.result;
            try {
                js_data = JSON.parse( contents ).features;
                document.getElementById("upl").style.zIndex = 1;
                document.getElementById("upl").style.top = "-80%";
                document.getElementById("map").removeEventListener("click", hideUpload);
                document.getElementById("iu").removeEventListener("change", loadUserData);
                settings.invert_coords = invert.checked;
                parseData();
             }
            catch(err) {
                alert("Во время обработки файла произошла ошибка! Проверьте, соответствует ли ваш файл требованиям.");
            } 
        });
        fileReader.addEventListener("error", function() {
            alert("Во время загрузки файла произошла ошибка!");
        });
        fileReader.readAsText(file);
    }
}

function hideUpload() {
    loadMenu();
    document.getElementById("upl").style.zIndex = 1;
    document.getElementById("upl").style.top = "-80%";
    document.getElementById("map").removeEventListener("click", hideUpload);
    }