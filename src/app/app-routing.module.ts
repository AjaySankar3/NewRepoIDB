import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';
const routes: Routes = [
  {
    path:'home',
    loadChildren: () =>
    import('./home/home.module').then((m)=>m.HomeModule)
  },
  {
    path:'test1',
    loadChildren: () =>
    import('./testing-one/testing-one.module').then((m)=>m.TestingOneModule),
    data:{applyPreload:true}
  },
  {
    path:'test2',
    loadChildren: () =>
    import('./testing-second/testing-second.module').then((m)=>m.TestingSecondModule),
    // data:{applyPreload:true}
  },
  {
    path:'', redirectTo:'/home/initialPage', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
