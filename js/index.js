function initMenuMobile() {
    const toggle = document.getElementById('toggle')
    const link = document.querySelectorAll('.menu-link')
    function activeToggle(event) {
        if (event.type === 'touchstart')
            event.preventDefault()
        const menu = document.getElementById('menu')
        const hamburger = document.getElementById('hamburger')
        menu.classList.toggle('active')
        hamburger.classList.toggle('active')
        
    }


    
    link.forEach(item => item.addEventListener('click', activeToggle))
    link.forEach(item => item.addEventListener('touchstart', activeToggle))
    toggle.addEventListener('click', activeToggle)
    toggle.addEventListener('touchstart', activeToggle)
}

initMenuMobile()