window.onscroll = function () {
    if(window.pageYOffset>400)
        document.getElementById("header").style.backgroundColor= "#3977b3";
    else
        document.getElementById("header").style.backgroundColor="transparent";
}