import { FormGroup, ValidationErrors } from '@angular/forms';


export function checkPasswords(form: FormGroup): ValidationErrors | null {
  const password: string = form.get('account.password').value;
  const confirmPassword: string = form.get('account.confirmPassword').value;

  if (password === confirmPassword) {
    return null;
  }

  form.get('account.confirmPassword').setErrors({ notSame: true });

  return { notSame: true };
}
