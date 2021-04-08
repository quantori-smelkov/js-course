import {FormGroup, ValidationErrors} from '@angular/forms';

export  function checkPassword(formGroup: FormGroup): ValidationErrors | null {
  const password: string = formGroup.get('account.password').value;
  const confirmPassword: string = formGroup.get('account.confirmPassword').value;
  if (password === confirmPassword) {
    return null;
  }

  formGroup.get('account.confirmPassword').setErrors({ notSame: true });
  return { notSame: true };
}
