function slidesPlugin(activeSlide = 2) {

   let slider = document.querySelector('.slider');
   let slides = document.querySelectorAll('.slide');

   slides[activeSlide].classList.add('active');

   slider.addEventListener('click', (event) => {
      if (!event.target.closest('.slide')) return;

      for (let i = 0; i < slider.children.length; i++) {
         slider.children[i].classList.remove('active');
      }
      event.target.closest('.slide').classList.add('active');
   });

}

slidesPlugin();
