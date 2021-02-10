window.onload = checkTabs;

updateClock();
window.setInterval(updateClock, 1000)


function showTab(tabN) {
    var tabs;
    tabs = document.getElementsByClassName("content")[0].children;


    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    tabs[tabN].style.display = "block";
    bg = document.getElementsByClassName("bg-img")[0];
    bg.style.backgroundImage = "url(" + tabs[tabN].dataset.img + ")";
}

function markTab(tabN) {
    localStorage.setItem("visited-" + tabN, true);
    // location.reload(); // if showing checkmarks is needed immediately
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
    var clockString = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2)

    document.getElementsByClassName("clock")[0].textContent = clockString;
}