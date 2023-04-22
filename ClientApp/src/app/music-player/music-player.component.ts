import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  @ViewChild('myAudio', {static: true}) myAudio: ElementRef;
  audioPlaying: boolean = false;
  
  constructor() {
    this.myAudio = {} as ElementRef<HTMLAudioElement>;
  }

  ngOnInit() {
    this.playAudio();
  }

  playAudio() {
    this.myAudio.nativeElement.muted = true;
    this.myAudio.nativeElement.play();
    this.audioPlaying = true;
    this.myAudio.nativeElement.muted = false;
  }

  pauseAudio() {
    this.myAudio.nativeElement.pause();
    this.audioPlaying = false;
    this.myAudio.nativeElement.muted = true;
  }

  toggleAudio() {
    if (this.audioPlaying) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
  }
  
}
