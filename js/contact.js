(function() {
   
    emailjs.init("kW84IvErMM6wTuZEG");
})();

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();


            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            let valid = true;
            let firstInvalid = null;

            contactForm.querySelectorAll('.input-error').forEach(e => e.remove());

            function showError(input, msg) {
                const error = document.createElement('div');
                error.className = 'input-error';
                error.style.color = '#C42430';
                error.style.fontSize = '0.95em';
                error.style.marginTop = '5px';
                error.textContent = msg;
                input.parentNode.appendChild(error);
                if (!firstInvalid) firstInvalid = input;
            }

            if (!name || name.value.trim().length < 2) {
                valid = false;
                showError(name, 'Digite seu nome completo.');
            }
            if (!email || !/^\S+@\S+\.\S+$/.test(email.value)) {
                valid = false;
                showError(email, 'Digite um e-mail válido.');
                showError(message, 'Digite um e-mail válido no campo acima.');
            }
            if (!phone || !/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/.test(phone.value)) {
                valid = false;
                showError(phone, 'Digite um telefone válido. Ex: (11) 91234-5678');
            }
            if (!subject || !subject.value) {
                valid = false;
                showError(subject, 'Selecione um assunto.');
            }
            if (!message || message.value.trim().length < 10) {
                valid = false;
                showError(message, 'Digite uma mensagem com pelo menos 10 caracteres.');
            }
            if (!valid) {
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitButton.disabled = true;
            
          
            const formData = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').options[document.getElementById('subject').selectedIndex].text,
                message: document.getElementById('message').value,
                to_email: 'academiacarolinasadm@gmail.com' 
            };
            
           
            emailjs.send('service_tbjsu69', 'template_r9y17r9', formData)
                .then(function(response) {
                    console.log('E-mail enviado com sucesso!', response);
                    
                  
                    const successMessage = document.createElement('div');
                    successMessage.className = 'alert alert-success';
                    successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Mensagem enviada com sucesso! Entraremos em contato em breve.';
                    
                
                    contactForm.parentNode.insertBefore(successMessage, contactForm);
                    
                  
                    contactForm.reset();
                    
                    
                    successMessage.scrollIntoView({behavior: 'smooth'});
                    
                  
                    setTimeout(() => {
                        successMessage.style.opacity = '0';
                        setTimeout(() => {
                            successMessage.remove();
                        }, 500);
                    }, 5000);
                })
                .catch(function(error) {
                    console.error('Erro ao enviar e-mail:', error);
                    
                
                    const errorMessage = document.createElement('div');
                    errorMessage.className = 'alert alert-error';
                    errorMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.';
                    
                 
                    contactForm.parentNode.insertBefore(errorMessage, contactForm);
                
                   
                    errorMessage.scrollIntoView({behavior: 'smooth'});
                    
                  
                    setTimeout(() => {
                        errorMessage.style.opacity = '0';
                        setTimeout(() => {
                            errorMessage.remove();
                        }, 500);
                    }, 5000);
                })
                .finally(function() {
                    
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                });
        });
    }
});