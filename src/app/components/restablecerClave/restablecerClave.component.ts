import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restablecerClave',
  templateUrl: './restablecerClave.component.html',
  styleUrls: ['./restablecerClave.component.css']
})
export class RestablecerClaveComponent implements OnInit {

  form! : FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      email : ['',Validators.required]
    })
  }

  ngOnInit() {
  }

  generarClave(){}
}
