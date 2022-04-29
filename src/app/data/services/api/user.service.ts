import { Injectable } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { enviroment } from 'environments/enviroment.dev';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  public title = 'Detalle de Usuario';

  get getTitle(): string {
    return this.title;
  }

  setTitle(t: string){
    this.title = t;
  }

  clearTitle(){
    this.title = 'Nuevo titulo';
  }

  constructor(private Http: HttpClient){}

  /**
   * optine todos los usuarios
   */
  getAllUsers(){
    return this.Http.get<ICardUser[]>(enviroment.uri + '/users');
  }

  /**
   * optiene un usuario
  */
  getUserById(id:number){
    return this.Http.get<ICardUser>(`${enviroment.uri}/users/${id}`);
  }
}