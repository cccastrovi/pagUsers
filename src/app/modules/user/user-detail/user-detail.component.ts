import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS_DATA } from '@data/constants/user.const';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public users: ICardUser[] = USERS_DATA;
  public userss: ICardUser[] = [];
  public id: number;
  public title: string;

  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService) {
      this.id = this.route.snapshot.params['id'];
      this.title = userService.getTitle;
   }

   @Input() currentUser: ICardUser = {
     id: 0,
     avatar: '',
     name: '',
     gender: '',
     age: 0,
     description: '',
     work: ''

   }

  ngOnInit(): void {
    this.userService.getUserById(this.id).subscribe(data => {
      this.currentUser = data
    })
  }

}
