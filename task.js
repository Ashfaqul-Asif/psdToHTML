let homeGallery = document.getElementById('home-gallery')
let {
  left,
  right
} = homeGallery.getBoundingClientRect()

let l = 0


let sliderEl = homeGallery.querySelector('.slider')

function nextImage() {

  sliderEl.scrollTo({
    left: l,
    behavior: 'smooth'
  })
  l += 200
}

function previousImage() {

  sliderEl.scrollTo({
    left: l,
    behavior: 'smooth'
  })
  l -= 200
}