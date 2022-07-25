import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const homeBtn = document.querySelector('.home')
const universeBtn = document.querySelector('.universe')
const explorationBtn = document.querySelector('.exploration')

homeBtn.addEventListener('click', function () {
  homeBtn.classList.add('selected')
  universeBtn.classList.remove('selected')
  explorationBtn.classList.remove('selected')
})

universeBtn.addEventListener('click', function () {
  universeBtn.classList.add('selected')
  homeBtn.classList.remove('selected')
  explorationBtn.classList.remove('selected')
})

explorationBtn.addEventListener('click', function () {
  explorationBtn.classList.add('selected')
  universeBtn.classList.remove('selected')
  homeBtn.classList.remove('selected')
})






