import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfilForm: FormGroup;
  host: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.perfilForm = this.formBuilder.group({
      'host': [this.host, [
        Validators.required
      ]]
    })
  }
}
