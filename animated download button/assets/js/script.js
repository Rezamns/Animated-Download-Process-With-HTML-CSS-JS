var btn = document.querySelector('#downloadBtn')

function startDownload() {
  btn.addEventListener('click', function() {
    this.classList.add('is-active')
    
    setTimeout(function() {
      btn.classList.add('dl-completed')
      btn.classList.add('animation-ended')
    }, 1200)
  })
}

startDownload();