
window.onload = function() {
    alert("Xyi");
var input = [
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
    
var output = {"type":"FeatureCollection","metadata":{"name":"Россия","creator":"Yandex Map Constructor","description":"Озёра"},"features":[]};

for (var i in input) {
    var tmp = input[i].crds[0];
    input[i].crds[0] = input[i].crds[1];
    input[i].crds[1] = tmp;
}

for (var i in input) {
    var feature = {"type": "Feature",
        "id": i,
        "geometry": {
            "coordinates": input[i].crds,
            "type": "Point",
        },
        "properties": {"description": input[i].name}
    }
    output.features.push(feature);
}

console.log(output);
var result = JSON.stringify(output);
document.getElementById("res").innerHTML = result;
}
