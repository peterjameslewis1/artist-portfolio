import './style.css'
import { artworks, cv } from './data.js'

const TABS = ['home', 'gallery', 'about', 'exhibitions', 'contact']
const $ = (sel) => document.querySelector(sel)

// ---------- Tiles ----------
function tile(art, index) {
  const btn = document.createElement('button')
  btn.className = 'tile'
  btn.dataset.index = index
  btn.innerHTML = `
    <div class="tile-media ${art.src ? '' : 'placeholder'}" style="aspect-ratio:${art.ratio}">
      ${art.src ? `<img src="${art.src}" alt="${art.title}" loading="lazy" />` : ''}
    </div>
    <div class="tile-caption">
      <span class="tile-title">${art.title}</span>
      <span class="tile-meta">${art.medium}, ${art.year}</span>
    </div>`
  btn.addEventListener('click', () => openLightbox(index))
  return btn
}

function renderFeatured() {
  const grid = $('#featured-grid')
  artworks.slice(0, 3).forEach((art, i) => grid.append(tile({ ...art, ratio: 4 / 5 }, i)))
}

// ---------- Gallery + filters ----------
let activeFilter = 'All'

function renderFilters() {
  const cats = ['All', ...new Set(artworks.map((a) => a.category))]
  const wrap = $('#filters')
  wrap.innerHTML = ''
  cats.forEach((cat) => {
    const b = document.createElement('button')
    b.className = 'chip'
    b.textContent = cat
    b.setAttribute('role', 'tab')
    b.setAttribute('aria-selected', String(cat === activeFilter))
    b.addEventListener('click', () => {
      activeFilter = cat
      renderFilters()
      renderGallery()
    })
    wrap.append(b)
  })
}

function renderGallery() {
  const grid = $('#gallery-grid')
  grid.innerHTML = ''
  artworks.forEach((art, i) => {
    if (activeFilter === 'All' || art.category === activeFilter) grid.append(tile(art, i))
  })
}

// ---------- Lightbox ----------
const lightbox = $('#lightbox')

function openLightbox(index) {
  const art = artworks[index]
  const media = $('#lightbox-image')
  media.style.aspectRatio = art.ratio
  media.style.setProperty('--r', art.ratio)
  media.classList.toggle('placeholder', !art.src)
  media.innerHTML = art.src ? `<img src="${art.src}" alt="${art.title}" />` : ''
  $('#lightbox-caption').innerHTML = `
    <strong>${art.title}</strong>
    <span>${art.medium} · ${art.size} · ${art.year}</span>`
  lightbox.showModal()
}

$('.lightbox-close').addEventListener('click', () => lightbox.close())
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.close()
})

// ---------- CV ----------
function renderCv() {
  $('#cv').innerHTML = cv
    .map(
      (group) => `
      <div class="cv-group">
        <h2>${group.heading}</h2>
        <ul>${group.items.map((i) => `<li><span class="cv-year">${i.year}</span><span>${i.text}</span></li>`).join('')}</ul>
      </div>`,
    )
    .join('')
}

// ---------- Tabs (hash routing works on GitHub Pages with no server config) ----------
function showTab() {
  const id = location.hash.slice(1)
  const tab = TABS.includes(id) ? id : 'home'
  document.querySelectorAll('.tab').forEach((s) => s.classList.toggle('active', s.id === `tab-${tab}`))
  document.querySelectorAll('.site-nav a').forEach((a) => {
    a.classList.toggle('active', a.dataset.tab === tab)
    a.toggleAttribute('aria-current', a.dataset.tab === tab)
  })
  document.body.classList.remove('nav-open')
  $('.nav-toggle').setAttribute('aria-expanded', 'false')
  window.scrollTo({ top: 0 })
}

$('.nav-toggle').addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open')
  $('.nav-toggle').setAttribute('aria-expanded', String(open))
})

// ---------- Contact (mailto, since GitHub Pages has no backend) ----------
$('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = new FormData(e.target)
  const to = $('.contact-list a[href^="mailto:"]').getAttribute('href').replace('mailto:', '')
  const subject = `${data.get('type')} enquiry from ${data.get('name')}`
  const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`
  location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

$('#year').textContent = new Date().getFullYear()
renderFeatured()
renderFilters()
renderGallery()
renderCv()
window.addEventListener('hashchange', showTab)
showTab()
