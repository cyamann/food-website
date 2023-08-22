import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getAll():Food[]{
    return [
      {
        id:1,
        name:"Chicken Wrap",
        price:65,
        cookTime:'15',
        favourite:false,
        origins:['Mexico','USA'],
        stars: 3.2,
        imageUrl:"\\assets\\images\\food-1.jpeg",
        tags:['Fast Food','Lunch']
      },
      {
        id:2,
        name:"Salmon and Rice",
        price:250,
        cookTime:'30',
        favourite:false,
        origins:['Norway'],
        stars: 4.2,
        imageUrl:"\\assets\\images\\food-2.jpeg",
        tags:['Slow Food','Dinner']
      },
      {
        id:3,
        name:"Pasta",
        price:60,
        cookTime:'15',
        favourite:false,
        origins:['Italy'],
        stars: 3.5,
        imageUrl:"\\assets\\images\\food-3.jpeg",
        tags:['Easy Food']
      },
      {
        id:4,
        name:"Hamburger",
        price:125,
        cookTime:'20',
        favourite:true,
        origins:['Germany'],
        stars: 4.5,
        imageUrl:"\\assets\\images\\food-4.jpeg",
        tags:['Fast Food']
      },
      {
        id:5,
        name:"Chicken and Peas",
        price:100,
        cookTime:'30',
        favourite:false,
        origins:['Turkey'],
        stars: 3.7,
        imageUrl:"\\assets\\images\\food-5.jpeg",
        tags:['Slow Food']
      },
      {
        id:6,
        name:"Meatballs and Broccoli",
        price:150,
        cookTime:'15',
        favourite:false,
        origins:['China'],
        stars: 4.2,
        imageUrl:"\\assets\\images\\food-6.jpeg",
        tags:['Dinner']
      }
     ]
  }
  constructor() { }
  ngInit(){
    
  }
}

