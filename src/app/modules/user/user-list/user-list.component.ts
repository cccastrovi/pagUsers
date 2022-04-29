import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
import { UserService } from '@data/services/api/user.service';
import { ICarouselItem } from '@shared/components/carousel/Icarousel-item.metadata';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {  

  public carouseldata: ICarouselItem[];
  public users: ICardUser [];
  public title: string;
  public userSubcription: Subscription | any;
  
  //public pricePesos: number

  constructor(private $sUser: UserService) {
    this.carouseldata = CAROUSEL_DATA_ITEMS;
    this.users = [];
    this.$sUser.setTitle('Lista de Usuarios');
    this.title = this.$sUser.getTitle;
    //this.pricePesos = 0;
  }

  ngOnInit(): void {
    // this.ngOnDestroy();
    this.getUsers();
  }

  // addAmount(){
  //   this.pricePesos += 10;
  // }

  getUsers(){
    this.userSubcription = this.$sUser.getAllUsers().subscribe(data => {
      this.users = data;
    }) 
  }

  // ngOnDestroy(): void{
  //   if (this.userSubcription) {
  //     this.userSubcription.unsubscribe();
  //   }
  //   this.$sUser.clearTitle()
  // }

}
