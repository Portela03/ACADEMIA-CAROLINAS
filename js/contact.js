(function() {
    // Inicialização do EmailJS com sua chave pública
    emailjs.init("kW84IvErMM6wTuZEG");
})();

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitButton.disabled = true;
            
            // Coletando dados do formulário
            const formData = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').options[document.getElementById('subject').selectedIndex].text,
                message: document.getElementById('message').value,
                to_email: 'joao.portela03@gmail.com' 
            };
            
            // Enviando e-mail usando EmailJS
            emailjs.send('service_tbjsu69', 'template_r9y17r9', formData)
                .then(function(response) {
                    console.log('E-mail enviado com sucesso!', response);
                    
                    // Exibindo mensagem de sucesso
                    const successMessage = document.createElement('div');
                    successMessage.className = 'alert alert-success';
                    successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Mensagem enviada com sucesso! Entraremos em contato em breve.';
                    
                    // Inserindo mensagem antes do formulário
                    contactForm.parentNode.insertBefore(successMessage, contactForm);
                    
                    // Resetando formulário
                    contactForm.reset();
                    
                    // Rolando para a mensagem
                    successMessage.scrollIntoView({behavior: 'smooth'});
                    
                    // Removendo mensagem após 5 segundos
                    setTimeout(() => {
                        successMessage.style.opacity = '0';
                        setTimeout(() => {
                            successMessage.remove();
                        }, 500);
                    }, 5000);
                })
                .catch(function(error) {
                    console.error('Erro ao enviar e-mail:', error);
                    
                    // Exibindo mensagem de erro
                    const errorMessage = document.createElement('div');
                    errorMessage.className = 'alert alert-error';
                    errorMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.';
                    
                    // Inserindo mensagem antes do formulário
                    contactForm.parentNode.insertBefore(errorMessage, contactForm);
                
                    // Rolando para a mensagem
                    errorMessage.scrollIntoView({behavior: 'smooth'});
                    
                    // Removendo mensagem após 5 segundos
                    setTimeout(() => {
                        errorMessage.style.opacity = '0';
                        setTimeout(() => {
                            errorMessage.remove();
                        }, 500);
                    }, 5000);
                })
                .finally(function() {
                    // Restaurando botão
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                });
        });
    }
});