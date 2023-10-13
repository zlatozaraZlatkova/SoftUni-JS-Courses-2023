function validate() {
    const name = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyCheckbox = document.getElementById('company');
    const companyNumber = document.getElementById('companyNumber');
  
    const namePattern = /^[A-Za-z0-9]{3,20}$/;
    const passPattern = /^\w{5,15}$/;
    const valid = [];
    const invalids = [];
  
    document.getElementById('submit').addEventListener('click', onClick);
    companyCheckbox.addEventListener('change', () => {
      document.getElementById('companyInfo').style.display = companyCheckbox.checked ? 'block' : 'none';
    });
  
    function onClick(ev) {
      ev.preventDefault();
  
      if (namePattern.test(name.value)) {
        valid.push(name);
      } else {
        invalids.push(name);
      }
  
      if (passPattern.test(password.value) && password.value === confirmPassword.value) {
        valid.push(password);
        valid.push(confirmPassword);
      } else {
        invalids.push(password);
        invalids.push(confirmPassword);
      }
  
      const index = email.value.indexOf('@');
      if (index > 0 && email.value.includes('.', index)) {
        valid.push(email);
      } else {
        invalids.push(email);
      }
  
      if (companyCheckbox.checked) {
        if (Number(companyNumber.value) >= 1000 && Number(companyNumber.value) <= 9999) {
          valid.push(companyNumber);
        } else {
          invalids.push(companyNumber);
        }
      }
  
      valid.forEach(el => el.style.border = 'none');
      invalids.forEach(el => {
        el.style.border = '';
        el.style.borderColor = 'red';
      });
  
      document.getElementById('valid').style.display = invalids.length === 0 ? 'block' : 'none';
    }
  }