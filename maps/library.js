function mainMenuItems() {
    
    // Список пунктов главного меню
    
    var ret = [
        new ymaps.control.ListBoxItem({ 
            data: {content:'Россия', code:'rus', center: [62.0, 95.0], zoom: 3}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({ 
            data: {content:'Европа', code:'eur', center: [55.0, 12.0], zoom: 4}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({ 
            data: {content:'Азия', code:'asi', center: [27.0, 71.0], zoom: 3}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({ 
            data: {content:'Африка', code:'afr', center: [0.0, 12.0], zoom: 3}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({ 
            data: {content:'Северная Америка', code:'nam', center: [49.0, -104.0], zoom: 3}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({ 
            data: {content:'Южная Америка', code:'sam', center: [-27.0, -61.0], zoom: 3}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({ 
            data: {content:'Австралия и Океания', code:'aao', center: [-13.0, 173.0], zoom: 3}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({ 
            data: {content:'Загрузить с компьютера', code:'tst', center: [27.0, 76.0], zoom: 2}, options: {selectOnClick: false}}),
        ];
    return ret;
}


function addSubmenu(code){
    
    // Списки пунктов подменю 
    
    var submenu;
    if (code=='rus') {  // Россия
        submenu = [
        new ymaps.control.ListBoxItem({data: {id:'m0', content:'Острова'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m1', content:'Полуострова и мысы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m2', content:'Заливы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m3', content:'Проливы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m4', content:'Горные системы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m5', content:'Отдельные горы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m6', content:'Реки'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m7', content:'Озёра'}, options: {selectOnClick: false}}),
        ];
    } ;
    if (code=='eur') {  // Европа
        submenu = [
        new ymaps.control.ListBoxItem({data: {id:'m0', content:'Острова'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m1', content:'Полуострова и мысы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m2', content:'Заливы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m3', content:'Проливы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m4', content:'Горные системы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m5', content:'Отдельные горы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m6', content:'Реки'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m7', content:'Озёра'}, options: {selectOnClick: false}}),
        ];
    } ;
    if (code=='asi') {  // Азия
        submenu = [
        new ymaps.control.ListBoxItem({data: {id:'m0', content:'Острова'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m1', content:'Полуострова и мысы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m2', content:'Заливы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m3', content:'Проливы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m4', content:'Горные системы и пустыни'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m5', content:'Отдельные горы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m6', content:'Реки и озёра'}, options: {selectOnClick: false}}),
        ];
    } ;
    if (code=='afr') {  // Африка
        submenu = [
        new ymaps.control.ListBoxItem({data: {id:'m0', content:'Острова'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m1', content:'Полуострова и мысы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m2', content:'Горные системы, хребты, нагорья и пустыни'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m3', content:'Отдельные горы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m4', content:'Водные объекты'}, options: {selectOnClick: false}}),
        ];
    } ;
    if (code=='nam') {  // Северная Америка
        submenu = [
        new ymaps.control.ListBoxItem({data: {id:'m0', content:'Острова'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m1', content:'Полуострова и мысы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m2', content:'Горные системы, хребты, нагорья и пустыни'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m3', content:'Отдельные горы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m4', content:'Водные объекты'}, options: {selectOnClick: false}}),
        ];
    } ;
    if (code=='sam') {  // Южная Америка
        submenu = [
        new ymaps.control.ListBoxItem({data: {id:'m0', content:'Острова'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m1', content:'Полуострова и мысы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m2', content:'Горные системы, хребты, нагорья и пустыни'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m3', content:'Отдельные горы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m4', content:'Низменности и равнины'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m5', content:'Водные объекты'}, options: {selectOnClick: false}}),
        ];
    } ;
    if (code=='aao') {  // Австралия и Океания
        submenu = [
        new ymaps.control.ListBoxItem({data: {id:'m0', content:'Острова'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m1', content:'Полуострова и мысы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m2', content:'Горные системы, хребты, нагорья и пустыни'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m3', content:'Отдельные горы'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m4', content:'Низменности и равнины'}, options: {selectOnClick: false}}),
        new ymaps.control.ListBoxItem({data: {id:'m5', content:'Водные объекты'}, options: {selectOnClick: false}}),
        ];
    } ;
    if (code=='tst') {   // Тест
        submenu = [
        new ymaps.control.ListBoxItem({data: {id:'m0', content:'Загрузить GeoJSON'}, options: {selectOnClick: false}}),
        ];
    } ;
    
    var gmapSubmenu = new ymaps.control.ListBox({
        data: {
            content: 'Выбрать раздел',
        },
        options: {float: "right"},
        items: submenu,
        state: {expanded: true}
    });
    return gmapSubmenu;
}


function getRus(spec){
    var ret;
    if (spec=="m0") {   // Россия - острова
        ret=[
        {
            "id": "kotlin",
            "name": "Котлин",
            "crds": [60.006080, 29.735224]
        },
        {
            "id": "solov",
            "name": "Соловецкие",
            "crds": [65.079493, 35.704098]
        },
        {
            "id": "kolguev",
            "name": "Колгуев",
            "crds": [69.107777, 49.119377]
        },
        {
            "id": "tulen1",
            "name": "Тюлений (Каспийское море)",
            "crds": [44.461951, 47.520295]
        },
        {
            "id": "valaam",
            "name": "Валаам",
            "crds": [61.375590, 30.957014]
        },
        {
            "id": "vaigac",
            "name": "Вайгач",
            "crds": [70.036314, 59.482108]
        },
        {
            "id": "newear",
            "name": "Новая Земля",
            "crds": [75.239870, 60.551562]
        },
        {
            "id": "friold",
            "name": "Земля Франца-Иосифа",
            "crds": [80.508298, 49.299112]
        },
        {
            "id": "commie",
            "name": "СЗ: Комсомолец",
            "crds": [80.591513, 94.952590]
        },
        {
            "id": "revolt",
            "name": "СЗ: Октябрьской Революции",
            "crds": [79.494948, 97.135703]
        },
        {
            "id": "bolsh",
            "name": "СЗ: Большевик",
            "crds": [78.629034, 102.482988]
        },
        {
            "id": "bigbeg",
            "name": "Большой Бегичев",
            "crds": [74.325737, 112.561483]
        },
        {
            "id": "heater",
            "name": "Новосибирские: Котельный",
            "crds": [75.406695, 140.660749]
        },
        {
            "id": "newsib",
            "name": "Новосибирские: Новая Сибирь",
            "crds": [75.087604, 148.497203]
        },
        {
            "id": "pimper",
            "name": "Врангеля",
            "crds": [71.215009, -179.154945]
        },
        {
            "id": "shantar",
            "name": "Шантарские",
            "crds": [54.931857, 137.718830]
        },
        {
            "id": "sahali",
            "name": "Сахалин",
            "crds": [50.329419, 142.706537]
        },
        {
            "id": "kunash",
            "name": "Кунашир",
            "crds": [44.172171, 145.946544]
        },
        {
            "id": "iturup",
            "name": "Итуруп",
            "crds": [45.075718, 147.877707]
        },
        {
            "id": "urup",
            "name": "Уруп",
            "crds": [45.905689, 149.948943]
        },
        {
            "id": "paramy",
            "name": "Парамушир",
            "crds": [50.372746, 155.721463]
        },
        {
            "id": "rberin",
            "name": "Беринга",
            "crds": [55.062313, 166.261792]
        },
        {
            "id": "ratman",
            "name": "Ратманова",
            "crds": [65.783817, -169.061320]
        }
        
    ];
    }
    
    if (spec=="m1") {   //Россия - полуострова и мысы
        ret=[
        {
            "id": "fish",
            "name": "Полуостров Рыбачий",
            "crds": [69.734222, 32.499843]
        },
        {
            "id": "kola",
            "name": "Кольский",
            "crds": [67.569365, 36.699135]
        },
        {
            "id": "krum",
            "name": "Крымский",  
            "crds": [45.389194, 33.993751]
        },
        {
            "id": "tarh",
            "name": "Мыс Тарханкут",
            "crds": [45.347611, 32.494822]
        },
        {
            "id": "tarh",
            "name": "Полуостров Тарханкут",
            "crds": [45.440719, 32.735325]
        },
        {
            "id": "arab",
            "name": "Арабатская стрелка",
            "crds": [45.685513, 35.029894]
        },
        {
            "id": "kyrs",
            "name": "Куршская коса",
            "crds": [55.486418, 21.082678]
        },
        {
            "id": "kani",
            "name": "Канин",
            "crds": [67.780241, 44.644787]
        },
        {
            "id": "yama",
            "name": "Ямал",
            "crds": [70.520720, 70.024310]
        },
        {
            "id": "foro",
            "name": "Мыс Сарыч",
            "crds": [44.387656, 33.739527]
        },
        {
            "id": "cani",
            "name": "Канин Нос",
            "crds": [68.560146, 43.671175]
        },
        {
            "id": "fona",
            "name": "Фонарь",
            "crds": [45.382946, 36.644643]
        },
        {
            "id": "prib",
            "name": "Прибойный",
            "crds": [45.390264, 32.481356]
        },
        {
            "id": "taym",
            "name": "Таймыр",
            "crds": [73.996790, 97.081732]
        },
        {
            "id": "chyk",
            "name": "Чукотский полуостров",
            "crds": [65.982613, 174.432311]
        },
        {
            "id": "chyk",
            "name": "Чукотский мыс",
            "crds": [64.242538, -173.108616]
        },
        {
            "id": "kamc",
            "name": "Камчатка",
            "crds": [58.112974, 160.400340]
        },
        {
            "id": "tama",
            "name": "Таманский",
            "crds": [45.257413, 37.184989]
        },
        {
            "id": "swia",
            "name": "Святой Нос (Мурм. обл.)",
            "crds": [68.084986, 39.857441]
        },
        {
            "id": "swia",
            "name": "Святой Нос (Бурятия)",
            "crds": [53.697803, 108.843931]
        },
        {
            "id": "swia",
            "name": "Святой Нос (Якутия)",
            "crds": [72.834922, 140.737052]
        },
        {
            "id": "taig",
            "name": "Тайгонос",
            "crds": [61.663584, 161.385253]
        },
        {
            "id": "chel",
            "name": "Челюскин",
            "crds": [77.721041, 104.258571]
        },
        {
            "id": "flig",
            "name": "Флигели",
            "crds": [81.844834, 59.277122]
        },
        {
            "id": "dezh",
            "name": "Дежнёва",
            "crds": [66.078870, -169.685271]
        },
        {
            "id": "lopa",
            "name": "Лопатка",
            "crds": [50.953504, 156.762063]
        },
        {
            "id": "niko",
            "name": "Николая",
            "crds": [44.386747, 33.777032]
        },
        {
            "id": "hers",
            "name": "Херсонес",
            "crds": [44.583371, 33.380336]
        }
    ];
    }
    
    if (spec=="m2") {   //Россия - заливы
        ret=[
        {
            "id": "koniksb",
            "name": "Калининградский",
            "crds": [54.595471, 20.002939]
        },
        {
            "id": "kyrshs",
            "name": "Куршский",
            "crds": [55.059198, 20.969724]
        },
        {
            "id": "loev",
            "name": "Финский",  
            "crds": [59.916388, 26.388515]
        },
        {
            "id": "taman",
            "name": "Таманский",
            "crds": [45.290300, 36.767811]
        },
        {
            "id": "taganro",
            "name": "Таганрогский",
            "crds": [46.956842, 38.255134]
        },
        {
            "id": "kalamit",
            "name": "Каламитский",
            "crds": [45.037267, 33.476016]
        },
        {
            "id": "sivash",
            "name": "Сиваш",
            "crds": [45.881031, 34.628042]
        },
        {
            "id": "kandala",
            "name": "Кандалакшский",
            "crds": [66.478888, 34.138442]
        },
        {
            "id": "onezhs",
            "name": "Онежская губа",
            "crds": [64.377320, 36.454326]
        },
        {
            "id": "dvina",
            "name": "Двинская губа",
            "crds": [65.056347, 39.000116]
        },
        {
            "id": "cheshk",
            "name": "Чёшская губа",
            "crds": [67.329989, 46.500967]
        },
        {
            "id": "obskaya",
            "name": "Обская губа",
            "crds": [69.525864, 73.217565]
        },
        {
            "id": "enisey",
            "name": "Енисейский",
            "crds": [72.103696, 81.347417]
        },
        {
            "id": "hatangs",
            "name": "Хатангский",
            "crds": [73.642854, 108.871465]
        },
        {
            "id": "anadyr",
            "name": "Анадырский",
            "crds": [64.343074, -177.610182]
        },
        {
            "id": "karagin",
            "name": "Карагинский",
            "crds": [58.835219, 162.865886]
        },
        {
            "id": "shelih",
            "name": "Шелихова",
            "crds": [60.184734, 158.757032]
        },
        {
            "id": "avache",
            "name": "Авачинский",
            "crds": [52.850091, 159.136400]
        },
        {
            "id": "sahalin",
            "name": "Сахалинский",
            "crds": [53.875114, 141.430749]
        },
        {
            "id": "petergr",
            "name": "Петра Великого",
            "crds": [42.756578, 131.841261]
        },
        {
            "id": "posiet",
            "name": "Посьета",
            "crds": [42.561285, 130.901400]
        }
    ];
    }
    
    if (spec=="m3") {   //Россия - проливы
        ret=[
        {
            "id": "kerch",
            "name": "Керченский",
            "crds": [45.273329, 36.593493]
        },
        {
            "id": "karsk",
            "name": "Карские Ворота",
            "crds": [70.495273, 58.073397]
        },
        {
            "id": "matsh",
            "name": "Маточкин Шар",  
            "crds": [73.328086, 55.347316]
        },
        {
            "id": "yugsh",
            "name": "Югорский Шар",
            "crds": [69.730516, 60.565557]
        },
        {
            "id": "vilki",
            "name": "Вилькицкого",
            "crds": [77.791743, 101.938231]
        },
        {
            "id": "shoka",
            "name": "Шокальского",
            "crds": [79.108277, 100.370896]
        },
        {
            "id": "sanni",
            "name": "Санникова",
            "crds": [74.456436, 143.930132]
        },
        {
            "id": "longa",
            "name": "Лонга",
            "crds": [70.023498, 179.325739]
        },
        {
            "id": "berin",
            "name": "Берингов",
            "crds": [64.852639, -169.494397]
        },
        {
            "id": "tatar",
            "name": "Татарский",
            "crds": [48.739632, 140.905433]
        },
        {
            "id": "nevel",
            "name": "Невельского",
            "crds": [52.085060, 141.518048]
        },
        {
            "id": "kamch",
            "name": "Камчатский",
            "crds": [55.953059, 164.345065]
        }
    ];
    }
    
    if (spec=="m4") {   //Россия - горные системы
        ret=[
        {
            "id": "hibiny",
            "name": "Хибины",
            "crds": []
        },
        {
            "id": "timansky",
            "name": "Тиманский кряж",
            "crds": []
        },
        {
            "id": "crimea",
            "name": "Крымские",  
            "crds": []
        },
        {
            "id": "bigcauc",
            "name": "Большой Кавказ",
            "crds": []
        },
        {
            "id": "ural1",
            "name": "Полярный Урал",
            "crds": []
        },
        {
            "id": "ural2",
            "name": "Приполярный Урал",
            "crds": []
        },
        {
            "id": "ural3",
            "name": "Северный Урал",
            "crds": []
        },
        {
            "id": "ural4",
            "name": "Средний Урал",
            "crds": []
        },
        {
            "id": "ural5",
            "name": "Южный Урал",
            "crds": []
        },
        {
            "id": "altai",
            "name": "Алтай",
            "crds": []
        },
        {
            "id": "sayanw",
            "name": "Западный Саян",
            "crds": []
        },
        {
            "id": "sayane",
            "name": "Восточный Саян",
            "crds": []
        },
        {
            "id": "putorana",
            "name": "Плато Путорана",
            "crds": []
        },
        {
            "id": "hamardbn",
            "name": "Хамар-Дабан",
            "crds": []
        },
        {
            "id": "barguzin",
            "name": "Баргузинский хребет",
            "crds": []
        },
        {
            "id": "middlesib",
            "name": "Среднесибирское плоскогорье",
            "crds": []
        },
        {
            "id": "anabar",
            "name": "Анабарское плато",
            "crds": []
        },
        {
            "id": "ulanburg",
            "name": "Улан-Бургасы",
            "crds": []
        },
        {
            "id": "stanov1",
            "name": "Становое нагорье",
            "crds": []
        },
        {
            "id": "verhoyan",
            "name": "Верхоянский хребет",
            "crds": []
        },
        {
            "id": "cherskogo",
            "name": "Хребет Черского",
            "crds": []
        },
        {
            "id": "jugjur",
            "name": "Джугджур",
            "crds": []
        },
        {
            "id": "sihalin",
            "name": "Сихотэ-Алинь",
            "crds": []
        },
        {
            "id": "koryak",
            "name": "Корякское нагорье",
            "crds": []
        },
        {
            "id": "kolum",
            "name": "Колымское нагорье",
            "crds": []
        },
        {
            "id": "sredinn",
            "name": "Срединный хребет",
            "crds": []
        },
        {
            "id": "stanov2",
            "name": "Становой хребет",
            "crds": []
        },
        {
            "id": "aldan",
            "name": "Алданское нагорье",
            "crds": []
        },
        {
            "id": "burranga",
            "name": "Бырранга",
            "crds": []
        },
        {
            "id": "dombai",
            "name": "Домбай",
            "crds": []
        },
        {
            "id": "paihoi",
            "name": "Пай-хой",
            "crds": []
        }
    ];
    }
    
    if (spec=="m5") {   //Россия - отдельные горы
        ret=[
        {
            "id": "elbrus",
            "name": "Эльбрус",
            "crds": [43.345068, 42.465897]
        },
        {
            "id": "peoples",
            "name": "Народная",
            "crds": [65.033333, 60.116667]
        },
        {
            "id": "whiteone",
            "name": "Белуха",  
            "crds": [49.806944, 86.589722]
        },
        {
            "id": "yamantau",
            "name": "Ямантау",
            "crds": [54.255, 58.101944]
        },
        {
            "id": "romankosh",
            "name": "Роман-Кош",
            "crds": [44.612791, 34.243451]
        },
        {
            "id": "aipetri",
            "name": "Ай-Петри",
            "crds": [44.451674, 34.060218]
        },
        {
            "id": "bazarduzu",
            "name": "Базардюзю",
            "crds": [41.219977, 47.860218]
        }
    ];
    }
    
    if (spec=="m6") {   //Россия - реки
        ret=[
        {
            "id": "amyr",
            "name": "Амур",
            "crds": []
        },
        {
            "id": "newa",
            "name": "Нева",
            "crds": []
        },
        {
            "id": "swir",
            "name": "Свирь",  
            "crds": []
        },
        {
            "id": "volhov",
            "name": "Волхов",
            "crds": []
        },
        {
            "id": "dvinaw",
            "name": "Западная Двина",
            "crds": []
        },
        {
            "id": "dwinan",
            "name": "Северная Двина",
            "crds": []
        },
        {
            "id": "oka",
            "name": "Ока",
            "crds": []
        },
        {
            "id": "hoper",
            "name": "Хопёр",
            "crds": []
        },
        {
            "id": "don",
            "name": "Дон",
            "crds": []
        },
        {
            "id": "volga",
            "name": "Волга",
            "crds": []
        },
        {
            "id": "kama",
            "name": "Кама",
            "crds": []
        },
        {
            "id": "vyatka",
            "name": "Вятка",
            "crds": []
        },
        {
            "id": "pechora",
            "name": "Печора",
            "crds": []
        },
        {
            "id": "ahtyba",
            "name": "Ахтуба",
            "crds": []
        },
        {
            "id": "kyban",
            "name": "Кубань",
            "crds": []
        },
        {
            "id": "samara",
            "name": "Самара",
            "crds": []
        },
        {
            "id": "yral",
            "name": "Урал",
            "crds": []
        },
        {
            "id": "iset",
            "name": "Исеть",
            "crds": []
        },
        {
            "id": "miass",
            "name": "Миасс",
            "crds": []
        },
        {
            "id": "chusovaya",
            "name": "Чусовая",
            "crds": []
        },
        {
            "id": "tobol",
            "name": "Тобол",
            "crds": []
        },
        {
            "id": "ishim",
            "name": "Ишим",
            "crds": []
        },
        {
            "id": "ob",
            "name": "Обь",
            "crds": []
        },
        {
            "id": "irtysh",
            "name": "Иртыш",
            "crds": []
        },
        {
            "id": "katyn",
            "name": "Катунь",
            "crds": []
        },
        {
            "id": "biya",
            "name": "Бия",
            "crds": []
        },
        {
            "id": "selenga",
            "name": "Селенга",
            "crds": []
        },
        {
            "id": "olenek",
            "name": "Оленёк",
            "crds": []
        },
        {
            "id": "mezen",
            "name": "Мезень",
            "crds": []
        },
        {
            "id": "tyngyskal",
            "name": "Нижняя Тунгуска",
            "crds": []
        },
        {
            "id": "tyngyskaur",
            "name": "Подкаменная Тунгуска",
            "crds": []
        },
        {
            "id": "angara",
            "name": "Ангара",
            "crds": []
        },
        {
            "id": "enisei",
            "name": "Енисей",
            "crds": []
        },
        {
            "id": "lena",
            "name": "Лена",
            "crds": []
        },
        {
            "id": "aldan",
            "name": "Алдан",
            "crds": []
        },
        {
            "id": "yana",
            "name": "Яна",
            "crds": []
        },
        {
            "id": "kolyma",
            "name": "Колыма",
            "crds": []
        },
        {
            "id": "indigirka",
            "name": "Индигирка",
            "crds": []
        },
        {
            "id": "hatanga",
            "name": "Хатанга",
            "crds": []
        },
        {
            "id": "vilui",
            "name": "Вилюй",
            "crds": []
        },
        {
            "id": "mzymta",
            "name": "Мзымта",
            "crds": []
        },
        {
            "id": "swiyaga",
            "name": "Свияга",
            "crds": []
        },
        {
            "id": "alma",
            "name": "Альма",
            "crds": []
        }
    ];
    }
    
    if (spec=="m7") {   //Россия - озёра
        ret=[
        {
            "id": "ladoga",
            "name": "Ладожское",
            "crds": [60.842275, 31.461714]
        },
        {
            "id": "onega",
            "name": "Онежское",
            "crds": [61.807858, 35.419826]
        },
        {
            "id": "chydskoe",
            "name": "Чудское",  
            "crds": [58.641419, 27.624102]
        },
        {
            "id": "pskovskoe",
            "name": "Псковское",
            "crds": [58.023474, 27.913387]
        },
        {
            "id": "imandra",
            "name": "Имандра",
            "crds": [67.814756, 33.128763]
        },
        {
            "id": "umbozero",
            "name": "Умбозеро",
            "crds": [67.679760, 34.393725]
        },
        {
            "id": "sasyksivash",
            "name": "Сасык-Сиваш",
            "crds": [45.187408, 33.507519]
        },
        {
            "id": "taimyr",
            "name": "Таймыр",
            "crds": [74.558117, 102.221515]
        },
        {
            "id": "teletskoye",
            "name": "Телецкое",
            "crds": [51.588076, 87.665879]
        },
        {
            "id": "baikal",
            "name": "Байкал",
            "crds": [53.442262, 108.116719]
        },
        {
            "id": "hanka",
            "name": "Ханка",
            "crds": [44.910128, 132.369138]
        },
        {
            "id": "chany",
            "name": "Чаны",
            "crds": [54.824715, 77.088216]
        },
        {
            "id": "hasan",
            "name": "Хасан",
            "crds": [42.451374, 130.607865]
        },
        {
            "id": "kronotskoe",
            "name": "Кроноцкое",
            "crds": [54.800762, 160.229820]
        },
        {
            "id": "ilmen",
            "name": "Ильмень",
            "crds": [58.274891, 31.315900]
        },
        {
            "id": "beloye",
            "name": "Белое",
            "crds": [60.183718, 37.638750]
        }
    ];
    }
    return ret;
}

function getEur(spec) {
    var ret;
    if (spec=="m0") {   // Европа - острова
        ret=[
        {
            "id": "azor",
            "name": "Азорские",
            "crds": [37.808993, -25.473491]
        },
        {
            "id": "alands",
            "name": "Аландские",
            "crds": [60.244206, 20.123349]
        },
        {
            "id": "balears",
            "name": "Балеарские",
            "crds": [39.613520, 2.956787]
        },
        {
            "id": "bornholm",
            "name": "Борнхольм",
            "crds": [55.143157, 14.922589]
        },
        {
            "id": "gb",
            "name": "Великобритания",
            "crds": [53.139499, -1.685177]
        },
        {
            "id": "ireland",
            "name": "Ирландия",
            "crds": [53.383188, -8.163323]
        },
        {
            "id": "maine",
            "name": "Мэн",
            "crds": [54.197452, -4.568319]
        },
        {
            "id": "hebridas",
            "name": "Гебридские",
            "crds": [57.034188, -6.523260]
        },
        {
            "id": "orkneys",
            "name": "Оркнейские",
            "crds": [58.855491, -2.976954]
        },
        {
            "id": "vesterolen",
            "name": "Вестеролен",
            "crds": [68.696829, 15.407224]
        },
        {
            "id": "gotland",
            "name": "Готланд",
            "crds": [57.417310, 18.536889]
        },
        {
            "id": "dalmatins",
            "name": "Далматинские",
            "crds": [43.951318, 15.382674]
        },
        {
            "id": "danish",
            "name": "Датские",
            "crds": [55.538131, 11.551951]
        },
        {
            "id": "iceland",
            "name": "Исландия",
            "crds": [64.881884, -18.783719]
        },
        {
            "id": "ionic",
            "name": "Ионические",
            "crds": [38.222698, 20.575004]
        },
        {
            "id": "kapri",
            "name": "Капри",
            "crds": [40.550506, 14.225712]
        },
        {
            "id": "shpitsber",
            "name": "Шпицберген",
            "crds": [78.308415, 17.321342]
        },
        {
            "id": "malta",
            "name": "Мальта",
            "crds": [35.903046, 14.413972]
        },
        {
            "id": "krit",
            "name": "Крит",
            "crds": [35.204748, 24.907152]
        },
        {
            "id": "korsika",
            "name": "Корсика",
            "crds": [42.188137, 9.068367]
        },
        {
            "id": "lemnos",
            "name": "Лемнос",
            "crds": [39.913521, 25.225744]
        },
        {
            "id": "lesbos",
            "name": "Лесбос",
            "crds": [39.203598, 26.222793]
        },
        {
            "id": "lofonten",
            "name": "Лофотенские",
            "crds": [68.331890, 14.651810]
        },
        {
            "id": "normandy",
            "name": "Нормандские",
            "crds": [49.214619, -2.132915]
        },
        {
            "id": "rugen",
            "name": "Рюген",
            "crds": [54.436297, 13.398049]
        },
        {
            "id": "saaremaa",
            "name": "Сааремаа",
            "crds": [58.378835, 22.495647]
        },
        {
            "id": "samotraki",
            "name": "Самотраки",
            "crds": [40.457224, 25.577168]
        },
        {
            "id": "sardinia",
            "name": "Сардиния",
            "crds": [40.526621, 9.055359]
        },
        {
            "id": "sicilia",
            "name": "Сицилия",
            "crds": [37.472604, 14.138881]
        },
        {
            "id": "farerskie",
            "name": "Фарерские",
            "crds": [62.016315, -6.851936]
        },
        {
            "id": "frizskie",
            "name": "Фризские",
            "crds": [53.789137, 7.897721]
        },
        {
            "id": "evbeya",
            "name": "Эвбея",
            "crds": [38.555536, 23.792841]
        },
        {
            "id": "eland",
            "name": "Эланд",
            "crds": [56.746564, 16.677870]
        },
        {
            "id": "hiiymaa",
            "name": "Хийумаа",
            "crds": [58.887434, 22.634536]
        },
        {
            "id": "yanmaien",
            "name": "Ян-Майен",
            "crds": [71.013333, -8.387767]
        },
        {
            "id": "elba",
            "name": "Эльба",
            "crds": [42.778671, 10.287516]
        }
        
    ];
    }
    if (spec=="m1") {   // Европа - полуострова
       ret=[
        {
            "id": "apennin",
            "name": "Апеннинский",
            "crds": 700
        },
        {
            "id": "balkan",
            "name": "Балканский",
            "crds": 930
        },
        {
            "id": "peloponnes",
            "name": "Пелопоннес",  
            "crds": 980
        },
        {
            "id": "halkidiki",
            "name": "Халкидики",
            "crds": 1005
        },
        {
            "id": "bretan",
            "name": "Бретань",
            "crds": 250
        },
        {
            "id": "cornwall",
            "name": "Корнуэлл",
            "crds": 227
        },
        {
            "id": "pirenean",
            "name": "Пиренейский",
            "crds": 140
        },
        {
            "id": "scandinav",
            "name": "Скандинавский",
            "crds": 670
        },
        {
            "id": "utland",
            "name": "Ютландия",
            "crds": 590
        },
        {
            "id": "wales",
            "name": "Уэльс",
            "crds": 278
        },
        {
            "id": "calabria",
            "name": "Калабрия",
            "crds": 79
        },
        {
            "id": "kotanten",
            "name": "Котантен",
            "crds": 313
        }
    ]; 
    }
    if (spec=="m2") {   // Европа - заливы
        ret=[
        {
            "id": "biskaiskii",
            "name": "Бискайский",
            "crds": 204
        },
        {
            "id": "botnical",
            "name": "Ботнический",
            "crds": 792
        },
        {
            "id": "boxyc",
            "name": "Бохус (Бристольский)",  
            "crds": 242
        },
        {
            "id": "venicebay",
            "name": "Венецианский",
            "crds": 686
        },
        {
            "id": "kardigan",
            "name": "Кардиган",
            "crds": 257
        },
        {
            "id": "varagner",
            "name": "Варангер-Фьорд",
            "crds": 916
        },
        {
            "id": "rizhskii",
            "name": "Рижский",
            "crds": 898
        },
        {
            "id": "taranto",
            "name": "Таранто",
            "crds": 819
        },
        {
            "id": "kadiss",
            "name": "Кадисский",
            "crds": 40
        },
        {
            "id": "finskii",
            "name": "Финский",
            "crds": 947
        },
        {
            "id": "lionskii",
            "name": "Лионский",
            "crds": 420
        },
        {
            "id": "shchetsin",
            "name": "Щецинский",
            "crds": 712
        }
    ];
    }
    if (spec=="m3") {   // Европа - проливы
        ret=[
        {
            "id": "belt",
            "name": "Бельт",
            "crds": 632
        },
        {
            "id": "bonifaco",
            "name": "Бонифачо",
            "crds": 576
        },
        {
            "id": "bosfor",
            "name": "Босфор",  
            "crds": 1169
        },
        {
            "id": "gibraltars",
            "name": "Гибралтарский",
            "crds": 101
        },
        {
            "id": "dardanell",
            "name": "Дарданеллы",
            "crds": 1108
        },
        {
            "id": "kattegat",
            "name": "Каттегат",
            "crds": 643
        },
        {
            "id": "lamansh",
            "name": "Ла-Манш",
            "crds": 314
        },
        {
            "id": "maltii",
            "name": "Мальтийский",
            "crds": 749
        },
        {
            "id": "messin",
            "name": "Мессинский",
            "crds": 777
        },
        {
            "id": "otranto",
            "name": "Отранто",
            "crds": 869
        },
        {
            "id": "padekale",
            "name": "Па-де-Кале",
            "crds": 39
        },
        {
            "id": "skagirakk",
            "name": "Скагерра́к",
            "crds": 595
        }
    ];
    }
    if (spec=="m4") {   // Европа - горные системы
        ret=[
        {
            "id": "alps",
            "name": "Альпы",
            "crds": 586
        },
        {
            "id": "sierranew",
            "name": "Сьерра-Невада",
            "crds": 159
        },
        {
            "id": "apenniny",
            "name": "Апеннины",  
            "crds": 685
        },
        {
            "id": "carpaty",
            "name": "Карпаты",
            "crds": 988
        },
        {
            "id": "cembrie",
            "name": "Кембрийские",
            "crds": 295
        },
        {
            "id": "pirenei",
            "name": "Пиренеи",
            "crds": 318
        },
        {
            "id": "rodopy",
            "name": "Родопы",
            "crds": 1037
        },
        {
            "id": "oremounts",
            "name": "Рудные",
            "crds": 689
        },
        {
            "id": "skandmoun",
            "name": "Скандинавские",
            "crds": 678
        },
        {
            "id": "sydetu",
            "name": "Судеты",
            "crds": 768
        },
        {
            "id": "shymawa",
            "name": "Шумава",
            "crds": 707
        },
        {
            "id": "staraplan",
            "name": "Стара-Планина",
            "crds": 1024
        },
        {
            "id": "yura",
            "name": "Юра",
            "crds": 484
        },
        {
            "id": "shwartzw",
            "name": "Шварцвальд",
            "crds": 576
        }
    ];
    }
    if (spec=="m5") {   // Европа - отдельные горы
        ret=[
        {
            "id": "montblanc",
            "name": "Монблан",
            "crds": 515
        },
        {
            "id": "vesuvii",
            "name": "Везувий",
            "crds": 741
        },
        {
            "id": "dinara",
            "name": "Динара",  
            "crds": 780
        },
        {
            "id": "olympus",
            "name": "Олимп",
            "crds": 974
        },
        {
            "id": "etna",
            "name": "Этна",
            "crds": 75
        }
    ];
    }
    if (spec=="m6") {   // Европа - реки
        ret=[
        {
            "id": "visla",
            "name": "Висла",
            "crds": 825
        },
        {
            "id": "vltava",
            "name": "Влтава",
            "crds": 714
        },
        {
            "id": "gvadalk",
            "name": "Гвадалквивир",  
            "crds": 115
        },
        {
            "id": "garonna",
            "name": "Гаронна",
            "crds": 352
        },
        {
            "id": "dynai",
            "name": "Дунай",
            "crds": 845
        },
        {
            "id": "izar",
            "name": "Изар",
            "crds": 645
        },
        {
            "id": "lyara",
            "name": "Луара",
            "crds": 353
        },
        {
            "id": "oder",
            "name": "Одер",
            "crds": 715
        },
        {
            "id": "poe",
            "name": "По",
            "crds": 598
        },
        {
            "id": "rain",
            "name": "Рейн",
            "crds": 537
        },
        {
            "id": "rona",
            "name": "Рона",
            "crds": 459
        },
        {
            "id": "sena",
            "name": "Сена",
            "crds": 383
        },
        {
            "id": "taho",
            "name": "Тахо",
            "crds": 126
        },
        {
            "id": "tybr",
            "name": "Тибр",
            "crds": 679
        },
        {
            "id": "thames",
            "name": "Темза",
            "crds": 330
        },
        {
            "id": "ebro",
            "name": "Эбро",
            "crds": 258
        },
        {
            "id": "elba",
            "name": "Эльба",
            "crds": 667
        },
        {
            "id": "neman",
            "name": "Нямунас / Неман",
            "crds": 918
        },
        {
            "id": "daugawa",
            "name": "Даугава",
            "crds": 1017
        },
        {
            "id": "dnepr",
            "name": "Днепр",
            "crds": 1149
        },
        {
            "id": "dnestr",
            "name": "Днестр",
            "crds": 1034
        }
    ];
    }
    if (spec=="m7") {   // Европа - озёра
        ret=[
        {
            "id": "balaton",
            "name": "Балатон",
            "crds": 813
        },
        {
            "id": "boden",
            "name": "Боденское",
            "crds": 586
        },
        {
            "id": "venern",
            "name": "Венерн",  
            "crds": 681
        },
        {
            "id": "vettern",
            "name": "Веттерн",
            "crds": 710
        },
        {
            "id": "jenewa",
            "name": "Женевское",
            "crds": 496
        },
        {
            "id": "lohness",
            "name": "Лох-Несс",
            "crds": 304
        },
        {
            "id": "skoder",
            "name": "Скадарское / Шкодер",
            "crds": 874
        },
        {
            "id": "ohrid",
            "name": "Охридское",
            "crds": 914
        },
        {
            "id": "lagomaj",
            "name": "Лаго-Маджоре",
            "crds": 564
        }
    ];
    }
    return ret;
    
}

function getAsi(spec) {
    var ret;
    if (spec=="m0") {   // Азия - острова
        ret=[
        {
            "id": "andaman",
            "name": "Андаманские",
            "crds": 1200
        },
        {
            "id": "bahrein",
            "name": "Бахрейн",
            "crds": 365
        },
        {
            "id": "kalimant",
            "name": "Большие Зондские: Калимантан",
            "crds": 1714
        },
        {
            "id": "sulavesi",
            "name": "Большие Зондские: Сулавеси",
            "crds": 1877
        },
        {
            "id": "sumatra",
            "name": "Большие Зондские: Суматра",
            "crds": 1429
        },
        {
            "id": "java",
            "name": "Большие Зондские: Ява",
            "crds": 1624
        },
        {
            "id": "bali",
            "name": "Большие Зондские: Бали",
            "crds": 1765
        },
        {
            "id": "cyprus",
            "name": "Кипр",
            "crds": 193
        },
        {
            "id": "lakkadiv",
            "name": "Лаккадивские",
            "crds": 737
        },
        {
            "id": "maldives",
            "name": "Мальдивские",
            "crds": 742
        },
        {
            "id": "taiwan",
            "name": "Тайвань",
            "crds": 1786
        },
        {
            "id": "philippines",
            "name": "Филиппинские",
            "crds": 1888
        },
        {
            "id": "hainan",
            "name": "Хайнань",
            "crds": 1572
        },
        {
            "id": "tsushima",
            "name": "Цусима",
            "crds": 1869
        },
        {
            "id": "chagos",
            "name": "Чагос",
            "crds": 692
        },
        {
            "id": "hokkaido",
            "name": "Хоккайдо",
            "crds": 1967
        },
        {
            "id": "honsu",
            "name": "Хонсю",
            "crds": 1999
        },
        {
            "id": "sikoku",
            "name": "Сикоку",
            "crds": 1941
        },
        {
            "id": "kusu",
            "name": "Кюсю",
            "crds": 1907
        },
        {
            "id": "ruku",
            "name": "Рюкю (арх.)",
            "crds": 1913
        },
        {
            "id": "srilanka",
            "name": "Шри-Ланка",
            "crds": 917
        }
    ];
    }
    if (spec=="m1") {   // Азия - полуострова
        ret=[
        {
            "id": "aravii",
            "name": "Аравийский",
            "crds": 255
        },
        {
            "id": "katar",
            "name": "Катар",
            "crds": 365
        },
        {
            "id": "oman",
            "name": "Оман (???)",  
            "crds": 449
        },
        {
            "id": "indokitai",
            "name": "Индокитай",
            "crds": 1476
        },
        {
            "id": "indostan",
            "name": "Индостан",
            "crds": 870
        },
        {
            "id": "kathiyavar",
            "name": "Катхиявар",
            "crds": 730
        },
        {
            "id": "korean",
            "name": "Корея",
            "crds": 180
        },
        {
            "id": "leichzhou",
            "name": "Лэйчжоу",
            "crds": 157
        },
        {
            "id": "laodun",
            "name": "Ляодунский",
            "crds": 170
        },
        {
            "id": "lilasia",
            "name": "Малая Азия",
            "crds": 220
        },
        {
            "id": "sinai",
            "name": "Синайский",
            "crds": 11
        },
        {
            "id": "shandun",
            "name": "Шаньдунский",
            "crds": 16
        }
    ];
    }
    if (spec=="m2") {   // Азия - заливы
        ret=[
        {
            "id": "akaba",
            "name": "Акаба",
            "crds": 126
        },
        {
            "id": "antalia",
            "name": "Анталья",
            "crds": 18
        },
        {
            "id": "bakbo",
            "name": "Бакбо (Тонкинский)",  
            "crds": 1521
        },
        {
            "id": "bengal",
            "name": "Бенгальский",
            "crds": 111
        },
        {
            "id": "kach",
            "name": "Кач",
            "crds": 715
        },
        {
            "id": "laodyn",
            "name": "Ляодунский",
            "crds": 1683
        },
        {
            "id": "karabogazg",
            "name": "Кара-Богаз-Гол",
            "crds": 548
        },
        {
            "id": "omanskii",
            "name": "Оманский",
            "crds": 502
        },
        {
            "id": "persian",
            "name": "Персидский",
            "crds": 38
        },
        {
            "id": "siamskii",
            "name": "Сиамский",
            "crds": 141
        },
        {
            "id": "sinopskii",
            "name": "Синопский",
            "crds": 31
        },
        {
            "id": "syets",
            "name": "Суэцкий",
            "crds": 10
        },
        {
            "id": "bohaiwan",
            "name": "Бохайвань",
            "crds": 167
        }
    ];
    }
    if (spec=="m3") {   // Азия - проливы
        ret=[
        {
            "id": "babelman",
            "name": "Баб-Эль-Мандебский",
            "crds": 123
        },
        {
            "id": "zonds",
            "name": "Зондский",
            "crds": 153
        },
        {
            "id": "karimata",
            "name": "Каримата",  
            "crds": 158
        },
        {
            "id": "koreanstr",
            "name": "Корейский",
            "crds": 1868
        },
        {
            "id": "kynashir",
            "name": "Кунаширский",
            "crds": 1997
        },
        {
            "id": "makasar",
            "name": "Макасарский",
            "crds": 182
        },
        {
            "id": "ormyz",
            "name": "Ормузский",
            "crds": 479
        },
        {
            "id": "polk",
            "name": "Полкский",
            "crds": 905
        },
        {
            "id": "laperuza",
            "name": "Лаперуза",
            "crds": 1931
        },
        {
            "id": "malakksk",
            "name": "Малаккский",
            "crds": 1407
        }
    ];
    }
    if (spec=="m4") {   // Азия - горные системы и пустыни
        ret=[
        {
            "id": "bighingan",
            "name": "Большой Хинган",
            "crds": 1641
        },
        {
            "id": "eastgats",
            "name": "Восточные Гаты",  
            "crds": 915
        },
        {
            "id": "gimalayas",
            "name": "Гималаи",
            "crds": 983
        },
        {
            "id": "gindykysh",
            "name": "Гиндукуш",
            "crds": 813
        },
        {
            "id": "gobialtai",
            "name": "Гобийский Алтай",
            "crds": 1366
        },
        {
            "id": "karakorum",
            "name": "Каракорум",
            "crds": 883
        },
        {
            "id": "kunlun",
            "name": "Куньлунь",
            "crds": 1150
        },
        {
            "id": "dekan",
            "name": "Плоскогорье Декан",
            "crds": 850
        },
        {
            "id": "kopetdag",
            "name": "Копетдаг",
            "crds": 582
        },
        {
            "id": "pontiiskie",
            "name": "Понтийские горы",
            "crds": 329
        },
        {
            "id": "taurus",
            "name": "Тавр",
            "crds": 224
        },
        {
            "id": "chanshan",
            "name": "Тянь-Шань",
            "crds": 962
        },
        {
            "id": "tarbagatai",
            "name": "Тарбагатай",
            "crds": 103
        },
        {
            "id": "zagros",
            "name": "Загрос",
            "crds": 406
        },
        {
            "id": "tibet",
            "name": "Тибет",
            "crds": 1106
        },
        {
            "id": "taklamakan",
            "name": "Такла-Макан",
            "crds": 988
        },
        {
            "id": "karakums",
            "name": "Каракумы",
            "crds": 610
        },
        {
            "id": "gobi",
            "name": "Гоби",
            "crds": 1410
        },
        {
            "id": "elburs",
            "name": "Эльбурс",
            "crds": 478
        }
    ];
    }
    if (spec=="m5") {   // Азия - отдельные горы
        ret=[
        {
            "id": "araratbig",
            "name": "Арарат Большой",
            "crds": 403
        },
        {
            "id": "krakatau",
            "name": "Кракатау",
            "crds": 1519
        },
        {
            "id": "fudzi",
            "name": "Фудзияма",  
            "crds": 2012
        }
    ];
    }
    if (spec=="m6") {   // Азия - реки
        ret=[
        {
            "id": "amyr",
            "name": "Амур",
            "crds": 1743
        },
        {
            "id": "arax",
            "name": "Аракс",
            "crds": 416
        },
        {
            "id": "sungari",
            "name": "Сунгари",  
            "crds": 1741
        },
        {
            "id": "gang",
            "name": "Ганг",
            "crds": 922
        },
        {
            "id": "bramapytra",
            "name": "Брахмапутра",
            "crds": 1188
        },
        {
            "id": "ind",
            "name": "Инд",
            "crds": 905
        },
        {
            "id": "mekong",
            "name": "Меконг",
            "crds": 1287
        },
        {
            "id": "tigr",
            "name": "Тигр",
            "crds": 336
        },
        {
            "id": "evfrat",
            "name": "Евфрат",
            "crds": 304
        },
        {
            "id": "halhingol",
            "name": "Халхин-Гол",
            "crds": 1593
        },
        {
            "id": "huanhe",
            "name": "Хуанхэ",
            "crds": 1523
        },
        {
            "id": "yantszu",
            "name": "Янцзы",
            "crds": 1519
        },
        {
            "id": "kura",
            "name": "Кура",
            "crds": 456
        },
        {
            "id": "amudaria",
            "name": "Амударья",
            "crds": 685
        },
        {
            "id": "syrdaria",
            "name": "Сырдарья",
            "crds": 758
        },
        {
            "id": "iordan",
            "name": "Иордан",
            "crds": 192
        },
        {
            "id": "buhtarma",
            "name": "Бухтарма",
            "crds": 1077
        },
        {
            "id": "rioni",
            "name": "Риони",
            "crds": 411
        },
        {
            "id": "shattelar",
            "name": "Шатт-эль-Араб",
            "crds": 354
        }
    ];
    }
    if (spec=="m7") {   // Азия - озёра
        ret=[
        {
            "id": "van",
            "name": "Ван",
            "crds": 368
        },
        {
            "id": "balhash",
            "name": "Балхаш",
            "crds": 924
        },
        {
            "id": "issykkul",
            "name": "Иссык-Куль",  
            "crds": 937
        },
        {
            "id": "hubsugul",
            "name": "Хубсугул",
            "crds": 1310
        },
        {
            "id": "ubsunur",
            "name": "Убсу-Нур",
            "crds": 1200
        },
        {
            "id": "zaisan",
            "name": "Зайсан",
            "crds": 1058
        },
        {
            "id": "dalainor",
            "name": "Далайнор",
            "crds": 1564
        },
        {
            "id": "tonlesap",
            "name": "Тонлесап",
            "crds": 1464
        },
        {
            "id": "urmiya",
            "name": "Урмия",
            "crds": 392
        },
        {
            "id": "deadsea",
            "name": "Мёртвое море",
            "crds": 176
        },
        {
            "id": "tiveriad",
            "name": "Тивериадское",
            "crds": 199
        },
        {
            "id": "sevan",
            "name": "Севан",
            "crds": 41
        }
    ];
    }
    return ret;
    
}

function getAfr(spec) {
    var ret;
    if (spec=="m0") {   // Европа - острова
        alert("Later");
    }
    if (spec=="m1") {   // Европа - полуострова
        alert("Later");
    }
    if (spec=="m2") {   // Европа - заливы
        alert("Later");
    }
    if (spec=="m3") {   // Европа - проливы
        alert("Later");
    }
    if (spec=="m4") {   // Европа - горные системы
        alert("Later");
    }
    if (spec=="m5") {   // Европа - отдельные горы
        alert("Later");
    }
    if (spec=="m6") {   // Европа - реки
        alert("Later");
    }
    if (spec=="m7") {   // Европа - озёра
        alert("Later");
    }
    return ret;
    
}