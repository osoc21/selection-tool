(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerListeners();
    },
    cacheElements () {
      this.$menuToggler = document.querySelector('.menuToggler');
      this.$navbar = document.querySelector('.navbar');

    },
    registerListeners () {
      // Toggle hamburgermenu
      this.$menuToggler.addEventListener('click', () => {
        this.$navbar.classList.toggle('visible');
        this.$menuToggler.classList.toggle('visible');
      });

      document.querySelector('.navbar__nav').addEventListener('click', () => {
        console.log('tok');
        this.$navbar.classList.toggle('visible');
        //console.log(this.$navbar);
        this.$menuToggler.classList.toggle('visible');
      })
    }

  }

  app.initialize();
})()