const topMenu = document.getElementById('ct-top-menu')
const toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)){
        //Khi click icon
        topMenu.classList.toggle('ct-topmenu-expanded')
        topMenu.classList.toggle('hidden')
    }
    else {
        //Khi click ra ngoai
        if (topMenu.classList.contains ('ct-topmenu-expanded')) {
            topMenu.classList.remove ('ct-topmenu-expanded')
            topMenu.classList.add ('hidden')
        }
    }
})