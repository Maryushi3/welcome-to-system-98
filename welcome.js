window.onload = checkTabs;

updateClock();
window.setInterval(updateClock, 1000)


function showTab(tabN) {
    var tabs;
    tabs = document.getElementsByClassName("content")[0].children;
    console.log(tabs[tabN].style.display)


    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    tabs[tabN].style.display = "block";
    bg = document.getElementsByClassName("bg-img")[0];
    bg.style.backgroundImage = "url(" + tabs[tabN].dataset.img + ")";
    console.log("changed tab")
}

function markTab(tabN) {
    console.log("Marking tab " + tabN)
    console.log(tabN);
    localStorage.setItem("visited-" + tabN, true);
    location.reload();
}

function checkTabs() {
    var tabLinks = document.getElementsByClassName("sidebar-list")[0].children;
    for (let i = 0; i < tabLinks.length; i++) {
        const header = tabLinks[i].children[0].children[1];
        if (localStorage.getItem("visited-" + (i + 1))) {
            header.dataset.visited = true;
        } else {
            delete header.dataset.visited;
        }
        console.log(header)
    }

}

function clearStorage() {
    if (confirm('This will clear clicked links checkmarks')) {
        localStorage.clear()
        checkTabs();
    }
}

function updateClock() {
    var d = new Date();
    var clockString = d.getHours() + ":" + d.getMinutes();

    document.getElementsByClassName("clock")[0].textContent = clockString;
}