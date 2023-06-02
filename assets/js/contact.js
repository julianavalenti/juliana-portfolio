const contactFormHTML = `
<div id="container">
  <h1 class="contact-title">Want to talk about future opportunities?</h1>
  <div class="underline">
  </div>
  <div class="icon_wrapper">
    
  </div>
  <form action="https://formspree.io/f/mqkoovlb" method="post" id="contact_form">
    <div class="name">
      <label for="name"></label>
      <input type="text" placeholder="My name is" name="name" id="name_input" required>
    </div>
    <div class="email">
      <label for="email"></label>
      <input type="email" placeholder="My e-mail is" name="email" id="email_input" required>
    </div>
    <div class="telephone">
      <label for="name"></label>
      <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required>
    </div>
    
    <div class="message">
      <label for="message"></label>
      <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div class="submit">
      <input type="submit" value="Send Message" id="form_button" />
    </div>
  </form><!-- // End form -->
</div><!-- // End #container -->
`;


const formContainer = document.getElementById("formContainer");

// Insert the contact form HTML into the container element
formContainer.innerHTML = contactFormHTML;


