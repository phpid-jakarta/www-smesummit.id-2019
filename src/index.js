import Rellax from 'rellax'
require('intersection-observer')

require('./index.scss')

document.addEventListener('DOMContentLoaded', function() {
  new Rellax('.rellax')
  if ('IntersectionObserver' in window) {
    var about = document.querySelector('#conf_title')
    let lazyImageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        console.log('entry.intersectionRatio', entry, entry.intersectionRatio)
        if (entry.intersectionRatio <= 0) {
          document.querySelector('.header_sticky').classList.add('is--have-bg')
        } else {
          document.querySelector('.header_sticky').classList.remove('is--have-bg')
        }
      })
    })

    lazyImageObserver.observe(about)
  }
})

