    function onGeoOk(position){
        const lat = position.coords.latitiude;
        const lng  = position.coords.latitiude;
        console.log("이곳에 있습니다.", lat, lng);
    }

    function onGeoOkError(){
        alert("위치를 찾을 수  없습니다.");
    }


    // 이 기능은 true 값과 error값 두개가 필요하다
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoOkError);
    