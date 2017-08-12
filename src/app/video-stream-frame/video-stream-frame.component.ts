import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-video-stream-frame',
  templateUrl: './video-stream-frame.component.html',
  styleUrls: ['./video-stream-frame.component.css']
})
export class VideoStreamFrameComponent implements OnInit{

  myStreamUrl = "http://192.168.3.1:8080/?action=stream";

  constructor() { }

  ngOnInit() {
  }




  playVideo() {
  }


  stopVideo(){}


}
