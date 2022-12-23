
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_83c8xaw';
        const templateID = 'template_2m1kx7n';

        if (grecaptcha.getResponse().length === 0){
            Swal.fire({
                icon: 'error',
                title: 'Captcha incomplete',
                text: '',
                confirmButtonColor: '#41b6e6',
            })
        }
        else {
            emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                Swal.fire({
                    icon: 'success',
                    title: 'Email sent!',
                    text: '',
                    confirmButtonColor: '#41b6e6',
                })
                grecaptcha.reset();
                form.reset();
                }, (err) => {
                btn.value = 'Send Email';
                Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: 'Try again later',
                    confirmButtonColor: '#41b6e6',
                })
                grecaptcha.reset();
                form.reset();
            }); 
        }

        
});