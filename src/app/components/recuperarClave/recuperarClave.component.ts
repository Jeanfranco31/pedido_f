import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperarClave',
  templateUrl: './recuperarClave.component.html',
  styleUrls: ['./recuperarClave.component.css']
})
export class RecuperarClaveComponent implements OnInit {

  form! : FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      email : ['',Validators.required]
    })
  }

  ngOnInit() {
  }

  generarClave(){

  }
}
