import { Post } from "./models/Post";
import { Product } from "./Product";

export class ProductService{
    posts:Post[]=[];

    constructor(){
      this.getAllPosts();
    }

public getAllPosts(){
   this.posts=[
      new Post(1,'Math','Calculas 102','Ahmad ali','Amman'),
      new Post(2,'Science','Science 102','Tareq ali','Irbid'),
      new Post(3,'Physics','Physics 101','Mohammad alali','Aqaba')
   ];

   return this.posts;
}

public getPostById(id:number){
   let result=this.posts.filter(x=>x.id==id);
   return result;
}

public getAllProducts(){
     let products:Product[];
     
     products=[
        new Product(1,'Apple Watch',5000),
        new Product(2,'Banana',600),
        new Product(3,'Orange',550),
        new Product(4,'Samsung s7',6500),
        new Product(6,'Water',420)
     ];
    
     return products;
}

}