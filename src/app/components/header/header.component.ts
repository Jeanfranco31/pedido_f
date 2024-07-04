import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidebar_container') sidebar_container! : SidebarComponent;
  constructor(private dialogRef : Dialog) { }

  ngOnInit() {
  }

  verMenu(){

    this.dialogRef.open(SidebarComponent,{
      width:'100vw',
      height:'100vh'
    })
  }
}
