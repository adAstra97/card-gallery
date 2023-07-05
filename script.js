let slider = document.querySelector('.slider');

slider.addEventListener('click', (event) => {
   if (!event.target.closest('.slide')) return;

   for (let i = 0; i < slider.children.length; i++) {
      slider.children[i].classList.remove('active');
   }
   event.target.closest('.slide').classList.add('active');
});