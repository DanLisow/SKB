let tabs = function () {
    let tab = document.querySelectorAll('.tab')

    tab.forEach(item => {
        item.addEventListener('click', selectTab);
    });
    

    function selectTab() {
        tab.forEach( item => {
            item.classList.remove('active-tab');
        });
        this.classList.add('active-tab');
        console.log(tab);
    }
};
tabs();