    const h1 = document.querySelector("div.hello:first-child h1");

    function handleTitleClick() {
        console.log("title was clicked!!");
        h1.style.color ="blue";
    }

    function  handleMouseEnter() {
        h1.innerText = "Mouse is here!";
    }     

    function handleMouseLeave() {
        h1.innerText = "Mouse is gone";
    }

    function handleWindowResize() {
        document.body.style.backgroundColor = "tomato";
    }

    function handleWindowCopy() {
        alert("copier");
    }

    function handleWindowOffline() {
        alert("SOS no WIFI");
    }

    function handleWindowOnline() {
        alert("인터넷이 연결되었습니다.");
    }


    h1.onclick = handleTitleClick;
    h1.onmouseenter = handleMouseEnter;
    h1.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("copy", handleWindowCopy);
    window.addEventListener("offline", handleWindowOffline);
    window.addEventListener("online", handleWindowOnline);

