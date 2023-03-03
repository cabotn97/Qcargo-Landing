const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_jtlmre4';
   const templateID = 'template_v23q3fg';

   emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                Swal.fire({
                    icon: 'success',
                    title: 'Email sent!',
                    text: '',
                    confirmButtonColor: '#41b6e6',
                })
                form.reset();
                }, (err) => {
                btn.value = 'Send Email';
                Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: 'Try again later',
                    confirmButtonColor: '#41b6e6',
                })
                form.reset();
            }); 
});