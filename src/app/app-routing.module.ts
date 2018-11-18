import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './views/main-view/main-view.component';
import { MetricsViewComponent } from './views/metrics-view/metrics-view.component';

const routes: Routes = [
  { path:'', component: MainViewComponent},
  { path:'metrics', component: MetricsViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
