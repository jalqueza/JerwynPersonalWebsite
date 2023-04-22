import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = "Jerwyn Alqueza";
  about = "Hi! I'm a developer who likes to make full-stack applications. Here is a ramble of my journey...";
  file_location = "assets/me.jpg";
}
