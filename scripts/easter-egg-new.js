class Egg {
    constructor(id, found) {
        this.id = id;
        this.found = found;
    }
}

let page = (location.pathname).substring(4, location.pathname.indexOf('.'));

const eggObjects = hatchEggs(); // egg objects

if (isSessionNew()) {
    setEggs();
}
const eggCarton = findEggLocations(); // array of id's of all egg locations on page

refreshEggStorage(eggObjects);
refreshEggProgress(eggObjects);
displayEggToPage(eggCarton, eggObjects);

/* FUNCTIONS START HERE */

// create egg objects
function hatchEggs() { 
    let eggOne = new Egg('egg1', false);
    let eggTwo = new Egg('egg2', false);
    let eggThree = new Egg('egg3', false);
    let eggFour = new Egg('egg4', false);
    let eggFive = new Egg('egg5', false);

    const eggObjects = [eggOne, eggTwo, eggThree, eggFour, eggFive];

    return eggObjects
}

// checks if session is new
function isSessionNew() {
    var sessionNew = sessionStorage.getItem("site_first_load");
    if (!sessionNew) { // if site hasn't been loaded, write to storage
        sessionStorage.setItem("site_first_load","1");
        return true;
    } else {
        return false;
    }
}

// create eggs in storage
function setEggs() { 
    for (const egg of eggObjects) {
        sessionStorage.setItem(egg.id, 'nf');
    }
}

// updates egg in storage
function refreshEggStorage() {
    for (let i = 0; i < eggObjects.length; i++) {
        let checkedEgg = eggObjects[i];
        if (sessionStorage.getItem(checkedEgg.id) == 'f') {
            checkedEgg.found = true;
        }
    }
}

// updates egg on progress bar
function refreshEggProgress() {
    const footerEgg1 = document.getElementById("footer-egg1");
    const footerEgg2 = document.getElementById("footer-egg2");
    const footerEgg3 = document.getElementById("footer-egg3");
    const footerEgg4 = document.getElementById("footer-egg4");
    const footerEgg5 = document.getElementById("footer-egg5");
    const footerEggs = [footerEgg1, footerEgg2, footerEgg3, footerEgg4, footerEgg5]; // IF MORE EGGS ARE ADDED, UPDATE HERE

    for (let i = 0; i < footerEggs.length; i++) {
        
        if (footerEggs[i].firstChild) {
            footerEggs[i].removeChild(footerEggs[i].lastChild);
        }
 
        if (eggObjects[i].found == false) { // If egg hasn't been found
            let missingEgg = document.createElement("img");
            if (page == 'index') {
                missingEgg.setAttribute("src", "icons/record-grayed.png");
            } else {
                missingEgg.setAttribute("src", "../icons/record-grayed.png");
            }
            missingEgg.setAttribute("height", "30");
            missingEgg.setAttribute("width", "30");

            footerEggs[i].appendChild(missingEgg); // If egg has been found
        } else if (eggObjects[i].found == true) {
            let foundEgg = document.createElement("img");
            if (page == 'index') {
                foundEgg.setAttribute("src", "icons/record.png");
            } else {
                foundEgg.setAttribute("src", "../icons/record.png");
            }
            foundEgg.setAttribute("height", "30");
            foundEgg.setAttribute("width", "30");

            footerEggs[i].appendChild(foundEgg);
        }
    }

}

function displayEggToPage() {
    for (let i = 0; i < eggCarton.length; i++) {
        // get element by id using eggCarton[i]
        let idToDisplay = eggCarton[i];
        for (const egg of eggObjects) {
            if (egg.id == idToDisplay) {
                let displayEgg = egg;

                if (displayEgg.found == false) {
                    let recordEgg = document.createElement("img");
                    if (page == 'index') {
                        recordEgg.setAttribute("src", "icons/record.png");
                    } else {
                        recordEgg.setAttribute("src", "../icons/record.png");
                    }
                    recordEgg.setAttribute("height", "20");
                    recordEgg.setAttribute("width", "20");
        
                    document.getElementById(eggCarton[i]).appendChild(recordEgg);
        
                    recordEgg.addEventListener('click', eggClick);
                    recordEgg.myParam = eggCarton[i];
                }
            }
        }
    }
}

function eggClick(evt) {
    let id = evt.currentTarget.myParam;
    console.log(id + ' found!');
    document.getElementById(id).remove();
    sessionStorage.setItem(id, 'f'); 
    
    refreshEggStorage();
    refreshEggProgress();
}

// search page for eggs
function findEggLocations() {
    const eggCollection = document.getElementsByClassName('record-egg');
    const eggCount = eggCollection.length;
    let eggCarton = [];

    if (eggCount > 0) {

        for (let i = 0; i < eggCount; i++) {
            eggCarton.push(eggCollection[i].id);
        }
        
        return eggCarton; // returns id's of all eggs on page

    } else {
        console.log('No eggs found');
        return eggCarton;
    }
}