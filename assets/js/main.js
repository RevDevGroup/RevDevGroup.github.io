const app = Vue.createApp({
  data() {
    return {
      mailerUrl: 'https://mailer-tau.vercel.app',
      email: '',
      name: 'User',
      subject: 'Website contact 🚀',
      message: '',
      honeypot: '',
      success: false,
      failure: false
    }
  },
  methods: {
    clearSuccess: function() {
      this.success = false
    },

    clearFailure: function() {
      this.failure = false
    },

    sendForm: async function() {
      const url = `${this.mailerUrl}/api/mail`
      const data = {
        email: this.email,
        name: this.name,
        subject: this.subject,
        message: this.message,
        honeypot: this.honeypot
      }

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        this.success = response.ok
        this.failure = !response.ok
      } catch(e) {
        this.failure = true
      }
    }
  }
})

app.mount('#app');

options = {
  "cursorOuter": "disable",
  "hoverEffect": "pointer-overlay",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 30,
  "outerHeight": 30
};
magicMouse(options);

// Toggle
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

anime({
  targets: '.cls-1',
  scale: { value: 1.1, duration: 4000 },
  translateY: { value: 30, duration: 6000 },
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '.cls-2',
  translateX: { value: 30, duration: 6000 },
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
});
