import { Component,OnInit,Input,Directive } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
//import { NgModule } from '@angular/core';


//@NgModule({
//  imports: [CommonModule,NgClass],
//  exports: []
//})

export class AppFaceSnapG1Module { }
@Component({
  selector: 'app-face-snap-g1',
  standalone: true,
  imports: [NgClass,CommonModule],
  templateUrl: './face-snap-g1.component.html',
  styleUrl: './face-snap-g1.component.scss'
})

export class FaceSnapG1Component implements OnInit {
  @Input() faceSnap!: FaceSnap;
  /*title!: string;
  description! : string; 
  createdDate !: Date;
  snaps! : number;
  imageUrl!: string;*/
  buttonText!: string;
  ngOnInit() {
    /*this.title = 'Camp Nou Stadium';
    this.description = 'It is the home stadium of FC Barcelona since its completion in 1957.';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://c4.wallpaperflare.com/wallpaper/346/401/264/fc-barcelona-spain-stadium-camp-nou-soccer-hd-wallpaper-preview.jpg';*/
    this.buttonText = 'Oh Snap!';
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, un Snap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }

}
