import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  id:any;
  post:any;
  productService:ProductService=new ProductService();;
  constructor(private route:ActivatedRoute) { 
     
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get('id')
    })
    this.post=this.productService.getPostById(Number(this.id));
    console.log(this.post);
  }

}
