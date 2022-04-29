import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '../app/layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/auth/login',
    pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren: () => 
    import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'panel',
    component: SkeletonComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
        import('@modules/user/user.module').then((m) => m.UserModule)
      },
      // {
      //   path:'**',
      //   redirectTo: '/panel/user',
      //   pathMatch:'full'
      // }
    ]
  },
  {
    path:'**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
