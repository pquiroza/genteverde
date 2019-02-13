import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  lat: number = 51.678418;
    lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
