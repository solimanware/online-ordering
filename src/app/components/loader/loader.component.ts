import { Component, OnInit } from '@angular/core';
import { IonSpinner } from '@ionic/angular/standalone';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [IonSpinner],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
