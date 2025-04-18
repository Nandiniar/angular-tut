import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  standalone:true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent{
private route=inject(ActivatedRoute);
ngOnInit(){
const value=  this.route.snapshot.paramMap.get('id'); // this is used to ftech the value of id which we have given in about route

console.log(value);

}
}
