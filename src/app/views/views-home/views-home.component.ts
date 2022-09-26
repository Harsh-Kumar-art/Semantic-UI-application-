import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats=[
    {value:22,label:'# of Users'},
    {value:900,label:'Revenue'},
    {value:50,label:'Reviews'}
  ];
  items=[
    {image:'/assets/images/4.jpg',title:'Hero',descp:'This is our hero'},
    {image:'/assets/images/6.jpg',title:'Heroine',descp:'This is our heroine'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
