    const API_KEY = "81b15ea536b511d78bdb3829b5e01c0a";
    
    function onGeoOk(position){
        const lat = position.coords.latitude;
        const lon  = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        //자바스크립트가 url를 불러온다. <fetch>로 url를 받고 then json값을 response(추출)한다.
        //추출하면 data값을 얻는다. 
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            });
    }

    function onGeoOkError(){
        alert("위치를 찾을 수  없습니다.");
    }


    // 이 기능은 true 값과 error값 두개가 필요하다
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoOkError);

    //openweathermap.org에서 날씨값을 가져올 수 있다.
    