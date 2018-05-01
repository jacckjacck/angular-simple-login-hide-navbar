import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth-service';
import { MzModalService, MzModalComponent } from 'ng2-materialize';
import { LoadingModalComponent } from '../loading-modal/loading-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  loading = false;

  @ViewChild('bottomSheetModal') LoadingModalComponent: MzModalComponent;

  public modalOptions: Materialize.ModalOptions = {
    dismissible: false,
    opacity: 0.9,
    endingTop: '40%'
  };

  constructor(private formBuilder: FormBuilder, private authService: AuthService
    , private modalService: MzModalService, private router: Router) {
    this.loginForm = formBuilder.group({
      'username' : this.username,
      'password' : this.password
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.loginForm.valid) { return false; }

    this.LoadingModalComponent.open();
    setTimeout(() => {
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
      this.LoadingModalComponent.close();
      this.router.navigate(['/home']);
    }, 3000);
  }

}
