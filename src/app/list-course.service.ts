import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCourseService {
  private tabCourses = [
    {
      id:1,
      title:'Android',
      author:'Prof 1',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/2346px-Android_logo_2019_%28stacked%29.svg.png',
      keywords:['Intent','Layout']
    },
    {
      id:2,
      title:'Angualar',
      author:'Prof 2',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      keywords:['Component','Binding']
    },
    {
      id:3,
      title:'ionic',
      author:'Prof 3',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/1200px-Ionic_Logo.svg.png',
      keywords:['Page','PageRouting']
    }
  ]

  constructor() { }

  getAllCourses(){
    return this.tabCourses;
  }

  getCourseById(id){
    return this.tabCourses.find((c)=>c.id==id);
  }

  deleteCourse(c){
    let i = this.tabCourses.indexOf(c);
    this.tabCourses.splice(i,1);
  }
}
