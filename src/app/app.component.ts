import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'gfa-auth-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gfa-auth';
  error: string = '';
  loading: boolean = false;

  profileForm: FormGroup;

  constructor(private service: AuthService) {
    this.profileForm = new FormGroup({
      user: new FormControl(''),
      pass: new FormControl(''),
    });
  }

  ngOnInit() {

  }

  async onSubmit() {
    this.error = '';
    this.loading = true;
    const values = this.profileForm.value;

    if (!['user', 'other'].includes(values.user)) {
      this.error = 'Usuário invalido';
      this.loading = false;
      return;
    }

    if (values.user === 'user') {
      await this.service.authenticate('user-1');
    }

    if (values.user === 'other') {
      await this.service.authenticate('user-2');
    }

    this.loading = false;
    document.location.href = '/';
  }

  // async onLogin() {
  //   this.loading = true;
  //   await this.service.authenticate();
  //   this.loading = false;
  //   document.location.href = '/';
  // }

}
