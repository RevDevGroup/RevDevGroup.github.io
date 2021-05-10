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

function contactForm() {
  return {
    formData: {
      email: '',
      name: 'revdev webpage';
      subject: 'Contact',
      message: '',
      honeypot: ''
    },
    message_notify: '',

    buttonLabel: 'Submit',

    submitData() {
      this.message = ''

      fetch('https://mailer-kohl.vercel.app/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      })
        .then(() => {
          this.message_notify = "Mensaje enviado correctamente"
        })
        .catch(() => {
          this.message_notify = "Oh Oh, Ha ocurrido un error!"
        })
    }
  }
}

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
