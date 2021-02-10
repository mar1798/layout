function openNav() {
    let nav = document.querySelectorAll('.menu_item'),
        content = document.querySelectorAll('.content'),
        name;

    nav.forEach(item => {
        item.addEventListener('click', selectNav)
    });

    function selectNav() {
        nav.forEach(item=>{
            item.children[0].classList.remove('active')
            item.classList.remove('active')
        });
        this.classList.add('active');
        this.children[0].classList.add('active')
        name = this.getAttribute('data-tab-name');
        selectContent(name)
    }

    function selectContent(name) {
        content.forEach(item=>{
            item.classList.contains(name)
                ? item.classList.add('active')
                : item.classList.remove('active')
        })

    }
}

function openSide() {

    let dark = document.createElement('div');
    document.body.append(dark);

    let burger = document.querySelector('.icon-menu')
    let close = document.querySelector('.icon-x')
    let sideMenu = document.querySelector('.menu')
    let sideMenuItem = document.querySelectorAll('.menu_item')
    let sideMenuItemText = document.querySelectorAll('.menu_item_text')
    let logoText = document.querySelector('.logo_tittle')
    let logoImg = document.querySelector('.logo_img')
    let logo =document.querySelector('.logo')
    burger.addEventListener('click', () => {
        if (burger.classList.contains('active'))
        burger.classList.remove('active')
        close.classList.add('active')
        sideMenu.classList.add('active')
        sideMenuItem.forEach(item=>{
            item.classList.add('open')
        })
        sideMenuItemText.forEach(item=> {
            item.classList.add('active')
        })
        logoImg.classList.add('open')
        logoText.classList.add('active')
        logo.classList.add('open')
        dark.classList.add('dark')

    })
    close.addEventListener('click', ()=> {
        if (close.classList.contains('active')) {
            close.classList.remove('active')
            burger.classList.add('active')
            sideMenuItemText.forEach(item=> {
                item.classList.remove('active')
            })
            sideMenuItem.forEach(item=>{
                item.classList.remove('open')
            })
            logoImg.classList.remove('open')
            sideMenu.classList.remove('active')
            logoText.classList.remove('active')
            logo.classList.remove('open')
            dark.classList.remove('dark')
        }})

}

openSide();
openNav()










