import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading:boolean=false
  constructor(private fb: FormBuilder, private authService: AuthService, private toastr: ToastrService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user', Validators.required], 
    });
  }

  register() {
    this.isLoading=true
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          this.isLoading=false
          this.registerForm.reset();
          this.toastr.success('Registration successful. Verify your email.');
        },
        error: (error) => {
          this.isLoading=false
          this.toastr.error('Registration Failed', error);
        },
      })
  }
}
}