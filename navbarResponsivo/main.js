class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = 'active'
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', () => console.log('Hi'))
    {
      this.addClickEvent()
    }
    return
  }
}

const MobileNavbar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li'
)
