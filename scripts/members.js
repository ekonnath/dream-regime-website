

function getIcons(member) {
    if (member == "Erik") {
        const instagram = document.getElementById("mem-insta");
        instagram.setAttribute("href", "https://instagram.com/erikonnath")
        instagram.setAttribute("target", "_blank");
    

        const twitter = document.getElementById("mem-twitter");
    }

    if (member == "Aidan") {

    }

    if (member == "Colin") {
        
    }

    if (member == "Jason") {
        
    }
}

function changeToErik() {

    var bgimg = document.getElementById("mem-background")
    bgimg.src =  "../images/members/members2-erik.JPG";

    footerIcons = getIcons("Erik");

}

function changeToAidan() {

    var bgimg = document.getElementById("mem-background")
    bgimg.src =  "../images/members/members2-aidan.JPG";


}


function changeToColin() {

    var bgimg = document.getElementById("mem-background")
    bgimg.src =  "../images/members/members2-colin.JPG";


}

function changeToJason() {

    var bgimg = document.getElementById("mem-background")
    bgimg.src =  "../images/members/members2-jason.JPG";


}

function changeToDefault() {

    if (newBackground) {
        var bgimg = document.getElementById("mem-background")
        bgimg.src =  "../images/members/members2.JPG";


    }

}