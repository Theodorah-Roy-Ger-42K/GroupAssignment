const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

function showError(input, msg) {
  const errorElement = document.getElementById(`${input.id}Error`);
  if (errorElement) {
    errorElement.textContent = msg;
  }
  input.setAttribute('aria-invalid', 'true');
}

function clearError(input) {
  const errorElement = document.getElementById(`${input.id}Error`);
  if (errorElement) {
    errorElement.textContent = '';
  }
  input.removeAttribute('aria-invalid');
}

function validate(input) {
  const value = input.value.trim();

  if (input.required && !value) {
    showError(input, 'This field is required.');
    return false;
  }

  if (input.id === 'name' && (value.length < 2 || !/\p{L}/u.test(value))) {
    showError(input, 'Enter your full name (at least 2 characters, with letters).');
    return false;
  }

  if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    showError(input, 'Enter a valid email address.');
    return false;
  }

  if (input.id === 'message' && value.length < 10) {
    showError(input, 'Message must be at least 10 characters.');
    return false;
  }

  clearError(input);
  return true;
}

if (form) {
  const fields = form.querySelectorAll('input, select, textarea');

  fields.forEach((field) => {
    field.addEventListener('blur', () => validate(field));

    field.addEventListener('input', () => {
      if (success) {
        success.hidden = true;
      }

      if (field.getAttribute('aria-invalid') === 'true') {
        validate(field);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const allFields = [...form.elements].filter((element) => element.id);
    const isValid = allFields.map(validate).every(Boolean);

    if (isValid) {
      if (success) {
        success.hidden = false;
        success.textContent = 'Thank you! Your enquiry has been sent.';
      }
      form.reset();
      return;
    }

    if (success) {
      success.hidden = true;
    }

    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) {
      firstInvalid.focus();
    }
  });
}
