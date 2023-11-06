function checkPassword() {
    const passwordInput = document.getElementById('password');
    const lengthInstruction = document.getElementById('length');
    const lettersInstruction = document.getElementById('letters');
    const numbersInstruction = document.getElementById('numbers');
    const symbolsInstruction = document.getElementById('symbols');
    const status = document.getElementById('status');

    const password = passwordInput.value;

    const hasMinLength = password.length >= 8;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*]/.test(password);

    lengthInstruction.style.color = hasMinLength ? 'green' : 'red';
    lettersInstruction.style.color = hasLetters ? 'green' : 'red';
    numbersInstruction.style.color = hasNumbers ? 'green' : 'red';
    symbolsInstruction.style.color = hasSymbols ? 'green' : 'red';

    if (hasMinLength && hasLetters && hasNumbers && hasSymbols) {
      status.textContent = 'Password meets all requirements.';
      status.style.color = 'green';
      
      
    } else  {
      status.textContent = 'Password does not meet all requirements.';
      status.style.color = 'red';
      
    }

   
}