// Social Media Links
const instagramErik = "https://instagram.com/erikonnath";
const twitterErik = "https://twitter.com/erikonnath";
const soundcloudErik = "https://soundcloud.com/anchorwatch";

const instagramAidan = "https://www.instagram.com/aidan.buech/";
const twitterAidan = "https://twitter.com/BuechlerAidan";
const soundcloudAidan = "https://soundcloud.com/user-768297045";

const instagramColin = "https://www.instagram.com/colinduffy18/";
const twitterColin = "https://twitter.com/colindtweets";

const instagramJason = "https://www.instagram.com/jasonkwonk/";

// HTML properties
const target = "_blank";
var iconHeight = "30";
var iconWidth = "30";

var instagram = document.getElementById("mem-instagram"); 
var instagramTitle = "Instagram";
var instagramSRC = "../icons/instagram-logo-white.png";
var onMouseOverInstagram = "this.src='../icons/instagram-logo.png'";
var onMouseOutInstagram = "this.src='../icons/instagram-logo-white.png'";

var twitter = document.getElementById("mem-twitter");
var twitterTitle = "Twitter";
var twitterSRC = "../icons/twitter.png";
var onMouseOverTwitter = "this.src='../icons/twitter-c.png'";
var onMouseOutTwitter = "this.src='../icons/twitter.png'";

var soundcloud = document.getElementById("mem-soundcloud");
var soundcloudTitle = "SoundCloud";
var soundcloudSRC = "../icons/soundcloud.png";
var onMouseOverSoundcloud = "this.src='../icons/soundcloud-c.png'";
var onMouseOutSoundcloud = "this.src='../icons/soundcloud.png'";


function changeToErik() {

    var bgimg = document.getElementById("mem-background")
    bgimg.src =  "../images/members/members2-erik.JPG";

    instagram.innerHTML = "<a href=" + instagramErik + 
                        " target=" + target + 
                        "><img title=" + instagramTitle + 
                        " src=" + instagramSRC + 
                        " height=" + iconHeight + " width=" + iconWidth + 
                        " onmouseover=" + onMouseOverInstagram + 
                        " onmouseout=" + onMouseOutInstagram + 
                        " /></a>"; 
    twitter.innerHTML = "<a href=" + twitterErik + 
                        " target=" + target + 
                        "><img title=" + twitterTitle + 
                        " src=" + twitterSRC + 
                        " height=" + iconHeight + " width=" + iconWidth + 
                        " onmouseover=" + onMouseOverTwitter + 
                        " onmouseout=" + onMouseOutTwitter + 
                        " /></a>"; 

    soundcloud.innerHTML = "<a href=" + soundcloudErik + 
                        " target=" + target + 
                        "><img title=" + soundcloudTitle + 
                        " src=" + soundcloudSRC + 
                        " height=" + iconHeight + " width=" + iconWidth + 
                        " onmouseover=" + onMouseOverSoundcloud + 
                        " onmouseout=" + onMouseOutSoundcloud + 
                        " /></a>"; 
}

function changeToAidan() {

    var bgimg = document.getElementById("mem-background")
    bgimg.src =  "../images/members/members2-aidan.JPG";

    instagram.innerHTML = "<a href=" + instagramAidan + 
    " target=" + target + 
    "><img title=" + instagramTitle + 
    " src=" + instagramSRC + 
    " height=" + iconHeight + " width=" + iconWidth + 
    " onmouseover=" + onMouseOverInstagram + 
    " onmouseout=" + onMouseOutInstagram + 
    " /></a>";     

    twitter.innerHTML = "<a href=" + twitterAidan + 
                        " target=" + target + 
                        "><img title=" + twitterTitle + 
                        " src=" + twitterSRC + 
                        " height=" + iconHeight + " width=" + iconWidth + 
                        " onmouseover=" + onMouseOverTwitter + 
                        " onmouseout=" + onMouseOutTwitter + 
                        " /></a>"; 

    soundcloud.innerHTML = "<a href=" + soundcloudAidan + 
                        " target=" + target + 
                        "><img title=" + soundcloudTitle + 
                        " src=" + soundcloudSRC + 
                        " height=" + iconHeight + " width=" + iconWidth + 
                        " onmouseover=" + onMouseOverSoundcloud + 
                        " onmouseout=" + onMouseOutSoundcloud + 
                        " /></a>"; 

}


function changeToColin() {

    var bgimg = document.getElementById("mem-background")
    bgimg.src =  "../images/members/members2-colin.JPG";

    instagram.innerHTML = "<a href=" + instagramColin + 
                        " target=" + target + 
                        "><img title=" + instagramTitle + 
                        " src=" + instagramSRC + 
                        " height=" + iconHeight + " width=" + iconWidth + 
                        " onmouseover=" + onMouseOverInstagram + 
                        " onmouseout=" + onMouseOutInstagram + 
                        " /></a>";  
                        
    twitter.innerHTML = "<a href=" + twitterColin + 
                        " target=" + target + 
                        "><img title=" + twitterTitle + 
                        " src=" + twitterSRC + 
                        " height=" + iconHeight + " width=" + iconWidth + 
                        " onmouseover=" + onMouseOverTwitter + 
                        " onmouseout=" + onMouseOutTwitter + 
                        " /></a>"; 

    soundcloud.innerHTML = '';                        
}

function changeToJason() {

    var bgimg = document.getElementById("mem-background")
    bgimg.src =  "../images/members/members2-jason.JPG";

    instagram.innerHTML = "<a href=" + instagramJason + 
                        " target=" + target + 
                        "><img title=" + instagramTitle + 
                        " src=" + instagramSRC + 
                        " height=" + iconHeight + " width=" + iconWidth + 
                        " onmouseover=" + onMouseOverInstagram + 
                        " onmouseout=" + onMouseOutInstagram + 
                        " /></a>";     
    twitter.innerHTML = '';

    soundcloud.innerHTML = ''; 
}

function changeToDefault() {

    if (newBackground) {
        var bgimg = document.getElementById("mem-background")
        bgimg.src =  "../images/members/members2.JPG";


    }

}