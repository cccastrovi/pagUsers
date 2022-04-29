import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrls: ['./card-loader.component.scss']
})
export class CardLoaderComponent implements OnInit {

  //Input styles
  @Input() imageSize = 75;
  @Input() barHeight = 15;
  @Input() bars = 1;

  public totalBars: {width:string}[] = [];
  public finalStyleImage = {};
  public finalHeightBar = {};

  constructor() { }

  ngOnInit(): void {

    //Calcular total bars
    for (let i = 0; i < this.bars; i++) {
      const width = Math.floor(Math.random() * (100 - 80)) + 80;
      this.totalBars.push({width: `${width}%`})
      
    }

    //img style
    this.finalStyleImage = {
      with: `${this.imageSize}px`,
      height: `${this.imageSize}px`,
    };

    //bar style
    this.finalHeightBar = `${this.barHeight}px`
  }

}
