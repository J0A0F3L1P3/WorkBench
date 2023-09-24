function showTab(tabIndex, tab) {
    let tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    let aba = document.querySelectorAll('.tab');
    aba.forEach((tab) => {
        tab.style.background = 'rgba(700, 700, 700, 0.5)';
    });

    let selectedTabContent = document.getElementById(`tab${tabIndex}`);
    selectedTabContent.style.display = 'block';

    tab.style.background = '#ccc';
}

document.querySelector('.checked').style.background = '#fff';

let selectedTabContent = document.getElementById(`tab1`);
selectedTabContent.style.display = 'block';