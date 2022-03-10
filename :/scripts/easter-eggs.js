/*
Below is the foundation logic for easter eggs that are found around the Dream Regime website. 
If an egg is to be added to a page (assuming the page doesn't already have an egg) the following steps need to occur
    - Add page to isFirstLoad() method
    - Add page to eggFound() method
    - Add page to displayEgg() method
    - Add page to eggClicked() method
*/

let page = location.pathname;

// Set easter eggs in backend
onSiteFirstLoad(); 

// Set easter eggs in front end
if (isFirstLoad(page)) { 
    displayEggs(page); 
} else if (!eggFound(page)) {
    displayEggs(page);
}

eggProgress();

function onSiteFirstLoad() {
    console.log('method works');
    var siteFirstLoad = sessionStorage.getItem("site_first_load");
    if (!siteFirstLoad) { // if site hasn't been loaded, write to storage
        sessionStorage.setItem("site_first_load","1");
        console.log('First time loaded!');
        setEasterEggs();
    }
}

// Write eggs to storage
function setEasterEggs() { 
    sessionStorage.setItem('egg1', 'nf');
    sessionStorage.setItem('egg2', 'nf');
    sessionStorage.setItem('egg3', 'nf');
    sessionStorage.setItem('egg4', 'nf');
    sessionStorage.setItem('egg5', 'nf');
}

function eggProgress() {
    // populate with grayed out eggs 
    const footerEgg1 = document.getElementById("footer-egg1");
    if (footerEgg1.firstChild) {
        footerEgg1.removeChild(footerEgg1.lastChild);
    }
   
    const missingEgg1 = document.createElement("img");
    missingEgg1.setAttribute("src", "../icons/record-grayed.png");
    missingEgg1.setAttribute("height", "30");
    missingEgg1.setAttribute("width", "30");

    const foundEgg1 = document.createElement("img");
    foundEgg1.setAttribute("src", "../icons/record.png");
    foundEgg1.setAttribute("height", "30");
    foundEgg1.setAttribute("width", "30");

    const footerEgg2 = document.getElementById("footer-egg2");
    if (footerEgg2.firstChild) {
        footerEgg2.removeChild(footerEgg2.lastChild);
    }

    const missingEgg2 = document.createElement("img");
    missingEgg2.setAttribute("src", "../icons/record-grayed.png");
    missingEgg2.setAttribute("height", "30");
    missingEgg2.setAttribute("width", "30");

    const foundEgg2 = document.createElement("img");
    foundEgg2.setAttribute("src", "../icons/record.png");
    foundEgg2.setAttribute("height", "30");
    foundEgg2.setAttribute("width", "30");

    const footerEgg3 = document.getElementById("footer-egg3");
    if (footerEgg3.firstChild) {
        footerEgg3.removeChild(footerEgg3.lastChild);
    }

    const missingEgg3 = document.createElement("img");
    missingEgg3.setAttribute("src", "../icons/record-grayed.png");
    missingEgg3.setAttribute("height", "30");
    missingEgg3.setAttribute("width", "30");

    const foundEgg3 = document.createElement("img");
    foundEgg3.setAttribute("src", "../icons/record.png");
    foundEgg3.setAttribute("height", "30");
    foundEgg3.setAttribute("width", "30");

    // if element has child, remove it!

    if (sessionStorage.getItem('egg1') == 'nf') {
        footerEgg1.appendChild(missingEgg1);
    } else if (sessionStorage.getItem('egg1') == 'f') {
        footerEgg1.appendChild(foundEgg1);
    }

    if (sessionStorage.getItem('egg2') == 'nf') {
        footerEgg2.appendChild(missingEgg2);
    } else if (sessionStorage.getItem('egg2') == 'f') {
        footerEgg2.appendChild(foundEgg2);
    }

    if (sessionStorage.getItem('egg3') == 'nf') {
        footerEgg3.appendChild(missingEgg3);
    } else if (sessionStorage.getItem('egg3') == 'f') {
        footerEgg3.appendChild(foundEgg3);
    }
    // replace with white eggs if found
}

// Checks each page if it has been loaded before (only needed if page has eggs)
function isFirstLoad(page) {
    if (page == '/dreamregime/pages/home.html') {
        var homeFirstLoad = sessionStorage.getItem("home_first_load");
        if (!homeFirstLoad) {
            sessionStorage.setItem("home_first_load","1");
            console.log(page + ' loaded for first time');
            return true;
        } else {
            console.log(page + ' has been loaded before');
            return false;
        }
    } else if (page == '/dreamregime/pages/members.html'){
        var membersFirstLoad = sessionStorage.getItem("members_first_load");
        if (!membersFirstLoad) {
            sessionStorage.setItem("members_first_load","1");
            console.log(page + ' loaded for first time');
            return true;
        } else {
            console.log(page + ' has been loaded before');
            return false;
        }
    } else if (page == '/dreamregime/pages/vault.html') {
        var membersFirstLoad = sessionStorage.getItem("vault_first_load");
        if (!membersFirstLoad) {
            sessionStorage.setItem("vault_first_load","1");
            console.log(page + ' loaded for first time');
            return true;
        } else {
            console.log(page + ' has been loaded before');
            return false;
        }
    }
}

function eggFound(page) {
    if (page == '/dreamregime/pages/home.html') {
        if (sessionStorage.getItem('egg1') == 'nf') {
            console.log('egg not found');
            return false;
        } else {
            console.log('egg found');
            return true;
        }
    } else if (page == '/dreamregime/pages/members.html') {
        if (sessionStorage.getItem('egg2') == 'nf') {
            console.log('egg not found');
            return false;
        } else {
            console.log('egg found');
            return true;
        }
    }  else if (page == '/dreamregime/pages/vault.html') {
        if (sessionStorage.getItem('egg3') == 'nf') {
            console.log('egg not found');
            return false;
        } else {
            console.log('egg found');
            return true;
        }
    }
}

function displayEggs(page) {
    // Create record egg element
    const recordEgg = document.createElement("img");
    recordEgg.setAttribute("src", "../icons/record.png");
    recordEgg.setAttribute("height", "20");
    recordEgg.setAttribute("width", "20");
    
    // Display egg 1 - home page
    if (page == '/dreamregime/pages/home.html') {
        document.getElementById("egg1").appendChild(recordEgg);
        const egg1 = document.getElementById('egg1');
        
        egg1.addEventListener('click', eggClicked);
        egg1.myParam = 'egg1';
    }

    // Display egg 2 - members page
    if (page == '/dreamregime/pages/members.html') {
        document.getElementById("egg2").appendChild(recordEgg);
        const egg1 = document.getElementById('egg2');

        // Adds an event listener to trigger eggClicked() when clicked
        egg1.addEventListener('click', eggClicked);
        egg1.myParam = 'egg2';
    }

    if (page == '/dreamregime/pages/vault.html') {
        document.getElementById("egg3").appendChild(recordEgg);
        const egg1 = document.getElementById('egg3');

        // Adds an event listener to trigger eggClicked() when clicked
        egg1.addEventListener('click', eggClicked);
        egg1.myParam = 'egg3';
    }
   
}

// Egg removed and tracked in counter
function eggClicked(evt) {
    console.log('Event occured.');

    if (evt.currentTarget.myParam == 'egg1') {
        console.log('Egg 1 found!');
        sessionStorage.setItem('egg1', 'f');
        document.getElementById('egg1').remove();
        eggProgress();

        // document.getElementById("footer-egg1").removeChild("missing-egg");

        // var imageRemoved = document.getElementById('footer-egg1');
        // imageRemoved.parentNode.removeChild(imageRemoved);
        // NEED: count egg

    } else if (evt.currentTarget.myParam == 'egg2') {
        console.log('Egg 2 found!');
        sessionStorage.setItem('egg2', 'f');
        document.getElementById('egg2').remove();
        eggProgress();

        // eggProgress();
        // NEED: count egg
    } else if (evt.currentTarget.myParam == 'egg3') {
        sessionStorage.setItem('egg3', 'f');
        document.getElementById('egg3').remove();
        eggProgress();

    } else {
        console.log('Egg not found');
    }
}
