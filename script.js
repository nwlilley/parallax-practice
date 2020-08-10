const scrollTag = document.querySelector('.header__pixels')
const progressBar = document.querySelector('.progress-bar')
const bodyTag = document.querySelector('body')
const sections = document.querySelectorAll('.section')

const headerTag = document.querySelector('.header')
const clientTag = document.querySelector('.header__client')
const pageTag = document.querySelector('.header__page')

document.addEventListener('scroll', function () {
  const pixels = window.pageYOffset
  scrollTag.innerHTML = pixels
})

document.addEventListener('scroll', function () {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight
  const percentage = pixels / totalScrollableDistance
  progressBar.style.width = `${percentage * 100}%`
})

document.addEventListener('scroll', function () {
  const pixels = window.pageYOffset
  sections.forEach(section => {
    if (section.offsetTop - 60 <= pixels) {
      clientTag.innerHTML = section.getAttribute('data-client')
      pageTag.innerHTML = section.getAttribute('data-page')
      if (section.hasAttribute('data-bg-color')) {
        headerTag.classList.add('white')
        progressBar.classList.add('bg-white')
      } else {
        headerTag.classList.remove('white')
        progressBar.classList.remove('bg-white')
      }
    }
  })
})

// Parallax
document.addEventListener('scroll', function () {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)
  sections.forEach(section => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)
    const distanceToSection = midViewport - midSection
    const parallaxTags = section.querySelectorAll('[data-parallax]')

    parallaxTags.forEach(tag => {
      const speed = parseFloat(tag.getAttribute('data-parallax'))
      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
    })
  })
})
