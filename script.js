// header
const header = document.querySelector('header')
// Hamburger, click event-hez változók
const btn = document.querySelector('.hamburger')
const menu = document.querySelector('.mobile-menu')
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')
// Összes menüpont -> Event bubbling kihasználása
const mobileNavItem = document.querySelector('.m-menu')

// Lebegő gomb
const floatingBtn = document.querySelector('.floating-btn')

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 400) {
    floatingBtn.classList.add('show-btn')
  } else {
    floatingBtn.classList.remove('show-btn')
  }
})

floatingBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0
})

// 100px scroll után transparent header fekete, ha a felbontás nagyobb mint 1024px
if (window.innerWidth > 1024) {
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
      header.style.backgroundColor = 'black'
    } else {
      header.style.backgroundColor = 'transparent'
    }
  })
} else {
  header.style.backgroundColor = 'black'
}

// Hamburger click-re hamburger anim + menü be/ki
btn.addEventListener('click', () => {
  menu.classList.toggle('mobile-menu-on')
  line1.classList.toggle('line-1-on')
  line2.classList.toggle('line-2-on')
  line3.classList.toggle('line-3-on')
})

// Menüpontra kattintáskor mobil menüből kilép, X-ből hambi lesz

mobileNavItem.addEventListener('click', () => {
  menu.classList.remove('mobile-menu-on')
  line1.classList.remove('line-1-on')
  line2.classList.remove('line-2-on')
  line3.classList.remove('line-3-on')
})
