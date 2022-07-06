import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './Product';
import { Post } from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ezz Project';

  products:Product[]=[];
  posts:Post[]=[];
  productService=new ProductService();
  constructor(){
     this.products=this.productService.getAllProducts();
     this.posts=this.productService.getAllPosts();
  }

 }



