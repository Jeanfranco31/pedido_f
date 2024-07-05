import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TokenDecoderService } from 'src/app/services/Token/token-decoder.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidebar_container') sidebar_container! : SidebarComponent;

  NombreUsuario! : string;

  constructor(
    private dialogRef : Dialog,
    private tokenService : TokenDecoderService
  ) { }

  ngOnInit() {
    this.NombreUsuario  = this.tokenService.obtainName();
  }

  verMenu(){

    this.dialogRef.open(SidebarComponent,{
      width:'100vw',
      height:'100vh'
    })
  }
}
