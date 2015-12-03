$(document).ready(function () {

    console.log("hello");


    weatherApp = {

        $targetArea: $("#weather"),

        weatherApiKey: "",

        localStorageKey: "openWeatherApi",

        getFormData: function () {
            if(weatherApp.weatherApiKey ===null || weatherApp.weatherApiKey === ""){
                weatherApp.weatherApiKey = $("#apiKey");
                
                weatherApp.saveApiKey();
            }
            
            
            weatherApp.weatherApiKey = $("#apiKey").val();
            var zip = $("#zip").val();
            console.log(apiKey);
            console.log(zip);


        },
        
        getWeatherData : function (zipcode) {
            var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&appid=" + weatherApp.weatherApiKey + "&units=imperial";
            
            $.getJSON(url, function (data) {
                weatherApp.$targetArea("Success!");
            }).fail( function() {
                weatherApp.$targetArea.html("No weather data available try again later");
            }):
        }
        
        loadApiKey: function () {
            if (typeof (localStorage) === 'undefined') {
                weatherApp.$targetArea.html("Sorry local storage not supported");
            } else {
                weatherApp.weatherApiKey = localStorage.getItem(weatherApp.localStorageKey);
                if (weatherApp.weatherApiKey ===null || weatherApp.weatherApiKey === "") {
//                    weatherApp.$targetArea.html("No api key found");
                }
            }
        },
        saveApiKey: function () {
            if (typeof (localStorage) === 'undefined') {
                weatherApp$targetArea.html("Local storage not supported");
            } else {
               
                weatherApp.weatherApiKey = localStorage.getItem(weatherApp.localStorageKey);
                if (weatherApp.weatherApiKey === null || weatherApp.weatherApiKey === "") {
//                  
                }
            }
        },
    }
$("#submit").click(function(){
    weatherApp.getFormData();
    return false;
});
    if (weatherApp.loadApiKey()) {
//        $("#apidiv").attr("class", "hide")
    }
});