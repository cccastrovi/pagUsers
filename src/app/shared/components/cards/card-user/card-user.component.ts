import { Component, Input, OnInit } from '@angular/core';
import { ICardUser } from './icard-user.metadata';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  @Input() data: ICardUser = {
    id: 0,
    avatar: '',
    name: '',
    gender: '',
    age: 0,
    description: '',
   work: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
