import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfilForm: FormGroup;
  phone1: number;
  phone2: number;
  email: string;
  host: any;
  encab: string;
  hostCard: string;
  phone1Card: number;
  phone2Card: number;
  emailCard: string;
  editForm:boolean = true;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.perfilForm = new FormGroup({
      host: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      phone1: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{6}")]),
      phone2: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{6}")]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.perfilForm.controls[controlName].hasError(errorName);
  }

  public hideMatHint = (controlName: string, errorName: string) => {
    return this.perfilForm.controls[controlName].hasError(errorName);
  }

  public onSubmit() {
      this.hostCard = this.host;
      this.phone1Card = this.phone1;
      this.phone2Card = this.phone2;
      this.emailCard = this.email;
      this.editForm = false;
      this.onClean();
  }

  public onEdit() {
    this.host = this.hostCard;
    this.phone1 = this.phone1Card;
    this.phone2 = this.phone2Card;
    this.email = this.emailCard;
}

  public onClean() {
      this.host = '';
      this.phone1 = 0;
      this.phone2 = 0;
      this.email = '';
  }


}
