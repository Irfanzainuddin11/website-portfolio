// contact

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Aget element from form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // basic validation
    if (name && email && message) {
        // Data sending simulation
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);

        // if message success
        showResponseMessage('Your message has been sent successfully!', 'success');

        // no succes
        document.getElementById('contact-form').reset();
    } else {
        // error response
        showResponseMessage('All fields are required!', 'error');
    }
});

function showResponseMessage(message, type) {
    const responseElement = document.getElementById('form-response');
    responseElement.textContent = message;
    responseElement.className = type;
}
