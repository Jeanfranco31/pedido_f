import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Role } from 'src/app/interfaces/role';
import { RolesService } from 'src/app/services/PerfilRol/roles.service';


@Component({
  selector: 'app-add-rol-dialog',
  templateUrl: './add-rol-dialog.component.html',
  styleUrls: ['./add-rol-dialog.component.css']
})
export class AddRolDialogComponent {
  roleForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddRolDialogComponent>,private fb: FormBuilder, 
    private rolService: RolesService, private _snackBar: MatSnackBar
  ) {
    this.roleForm = this.fb.group({
      nombre: ['', Validators.required], 
      estado: [true]
    });
  }

  onSave(): void {
    const formValue = this.roleForm.value;
    const rol: Role = {
      nombre: formValue.nombre,
      estado: formValue.estado ? 1 : 2 
    };
    if (formValue.nombre == null || formValue.nombre == '') {
      this.openSnackBar();
    } else {
      
      this.rolService.addRol(rol).subscribe((response) => {
        if (response) {
          this.dialogRef.close({ action: 'add', role: response.message });
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }



  openSnackBar() {
    this._snackBar.open('Ingrese el nombre del Perfil', 'Aceptar', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
