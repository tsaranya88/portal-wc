import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {SummaryComponent} from './summary/summary.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/summary', pathMatch: 'full' },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled', enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
