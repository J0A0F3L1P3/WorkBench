function showTab(tabIndex, tab) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    const aba = document.querySelectorAll('.tab');
    aba.forEach((tab) => {
        tab.style.background = 'rgba(700, 700, 700, 0.5)';
    });

    const selectedTabContent = document.getElementById(`tab${tabIndex}`);
    selectedTabContent.style.display = 'block';

    tab.style.background = '#fff';
}

document.querySelector('.checked').style.background = '#fff';

const selectedTabContent = document.getElementById(`tab2`);
selectedTabContent.style.display = 'block';