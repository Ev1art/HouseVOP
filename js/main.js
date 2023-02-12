/* VIDEO */

const video = document.getElementById("video");
const btn = document.getElementById("btnplay");

function myFunction() {
  if (video.paused) {
    video.classList.add("video-play")
    video.play();

    btn.classList.add("btn-off")
    btn.classList.remove("btn-play")

  } else {
    video.classList.remove("video-play")
    video.pause();

    btn.classList.add("btn-play")
    btn.classList.remove("btn-off")
  }
}

/* SCROLL */

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 0
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});