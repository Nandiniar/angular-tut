import { Component, OnInit } from '@angular/core';
import { Router,RouterConfigOptions, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title='Code with me';
  // private router=inject(Router);

  // constructor(private router:Router){
  // console.log('constructor');
  // }
  
  ngOnInit(){
    console.log('ngoninit');
  //  this.changeTitle();
  }
  changeTitle(){
       this.title='Coding techniques';
   }
  //  navigate(){
  //   this.router.navigate(['/about']);
  //  }
}
