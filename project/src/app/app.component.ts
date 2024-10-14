import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnap } from './models/face-snap.model';
import { FaceSnapG1Component } from "./face-snap-g1/face-snap-g1.component";
import { CommonModule } from '@angular/common';
// import { AppComponent } from '../app.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapG1Component, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project';
  faceSnaps!: FaceSnap[];
  //mySnap!: FaceSnap;
  ngOnInit() {
    this.faceSnaps = [
      new FaceSnap(
        'Camp Nou Stadium',
        'It is the home stadium of FC Barcelona since its completion in 1957',
        new Date(),
        0,
        'https://c4.wallpaperflare.com/wallpaper/346/401/264/fc-barcelona-spain-stadium-camp-nou-soccer-hd-wallpaper-preview.jpg'
      ),
      new FaceSnap(
        'Lionel Messi',
        'Is the best player in the world', 
        new Date(),
        0,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfF19CkEeXDKYIM3I2_d9DoSYIyat6Qyxtg&s'
      ),
      new FaceSnap(
        'Fc Barcelona',
        'Is the best team in the world',
        new Date(),
        0,
        'https://www.fcbarcelona.com/photo-resources/2019/11/15/b23643b6-bc06-41e1-89ba-6a93bb9a847e/comunicacio-institucional.jpg?width=1200&height=750'
      )
    ];
  }
}
