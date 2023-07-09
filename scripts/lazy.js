// window.addEventListener('load', function() {
//     const lazyImages = document.querySelectorAll('.lazy');
  
//     function lazyLoad() {
//       lazyImages.forEach(function(image) {
//         if (image.getBoundingClientRect().top <= window.innerHeight && image.getBoundingClientRect().bottom >= 0 && getComputedStyle(image).display !== 'none') {
//           image.src = image.dataset.src;
//           image.classList.remove('lazy');
//         }
//       });
//     }
  
//     window.addEventListener('scroll', lazyLoad);
//   });
  