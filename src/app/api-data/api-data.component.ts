import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {

  users:User[]=[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getData();
  }
   
  getData(){
    this.userService.getData().subscribe(
      (response)=>{
        this.users=response;
      },
      (erro)=>{
        console.log(erro);
      }
    )
  }

}
