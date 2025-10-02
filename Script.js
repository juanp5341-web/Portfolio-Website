document.addEventListener("DOMContentLoaded", () => {
  // Update year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".close");

  const thumbs = document.querySelectorAll(".thumb, .gallery-thumb");

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = thumb.src;
      captionText.textContent = thumb.alt;
    });
  });

  closeBtn.addEventListener("click", () => lightbox.style.display = "none");
  lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.style.display = "none"; });
});
