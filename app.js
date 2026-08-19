const accountButton = document.getElementById('accountButton');
const navAddBook = document.getElementById('navAddBook');
const navAddShelf = document.getElementById('navAddShelf');
const navViewShelves = document.getElementById('navViewLibrary');
const sidePanel = document.getElementById('sidePanel');
const closePanelButton = document.getElementById('closePanel');
const panelContent = document.getElementById('sideContent');
const themeToggleButton = document.getElementById('toggleDarkMode');

//Toggle Dark Mode
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.innerHTML = 'Light Mode';
    } else {
        themeToggleButton.innerHTML = 'Dark Mode';
    }
});

//Open and Close Side Panel
function openPanel(contentHTML) {
    sidePanel.classList.add('open');
}

function closePanel() {
    sidePanel.classList.remove('open');
}

//Event Listeners
closePanelButton.addEventListener('click', closePanel);

accountButton.addEventListener('click', () => {
    openPanel();
});

navAddBook.addEventListener('click', () => {
    openPanel();
});

navAddShelf.addEventListener('click', () => {
    openPanel();
});

navViewShelves.addEventListener('click', () => {
    closePanel();
});