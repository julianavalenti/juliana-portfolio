const contactFormHTML = `
  <h2>Contact Form</h2>
  <form id="contactForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br>

    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="5" required></textarea><br>

    <input type="submit" value="Submit">
  </form>
`;


const formContainer = document.getElementById("formContainer");

// Insert the contact form HTML into the container element
formContainer.innerHTML = contactFormHTML;