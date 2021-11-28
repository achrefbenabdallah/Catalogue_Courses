import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children:[
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
      },
      {
        path: 'details/:id',
        loadChildren: () => import('./detail-course/detail-course.module').then( m => m.DetailCoursePageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('./add-course/add-course.module').then( m => m.AddCoursePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
