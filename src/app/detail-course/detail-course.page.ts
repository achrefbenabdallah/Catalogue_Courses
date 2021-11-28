import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListCourseService } from '../list-course.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.page.html',
  styleUrls: ['./detail-course.page.scss'],
})
export class DetailCoursePage implements OnInit {
  selectedCourse;

  constructor(private activatedRoute : ActivatedRoute,
              private listCourse:ListCourseService,
              private router : Router,
              private alertCtrl:AlertController){ }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (p:ParamMap)=>{
        //console.log(p.get('id'));
        this.selectedCourse=this.listCourse.getCourseById(p.get('id'))
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  async onDelete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure ?',
      buttons: [{
        text : 'Yes',
        handler : ()=>{this.listCourse.deleteCourse(this.selectedCourse);
                       this.router.navigate(['/home']);
        },
      },
      'No']
    });

    await alert.present();
  }
}
