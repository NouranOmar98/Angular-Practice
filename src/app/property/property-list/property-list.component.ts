import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      id: 1,
      Name: 'Birla House',
      Type: 'House',
      Price: 12000,
    },
    {
      id: 2,
      Name: 'Birla House',
      Type: 'House',
      Price: 12000,
    },
    {
      id: 3,
      Name: 'Birla House',
      Type: 'House',
      Price: 12000,
    },
  ];
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
