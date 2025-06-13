
(function() {

    emailjs.init("kW84IvErMM6wTuZEG");
})();

document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.getElementById('contactForm');
    
o
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
         o
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
                to_email: 'joao.portela03@gmail.com' 
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