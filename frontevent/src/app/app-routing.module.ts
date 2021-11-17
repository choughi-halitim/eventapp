import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { KumojinEventsResolver } from '@core/resolvers/kumojin-events.resolver';
import { KumojinEventsComponent } from '@shared/pages/kumojin-events/kumojin-events.component';

const routes: Routes = [

  { path: '', resolve: { kumojinEvents: KumojinEventsResolver }, component: KumojinEventsComponent }

];

@NgModule({

  imports: [ RouterModule.forRoot(routes, {

    preloadingStrategy: PreloadAllModules

  })],

  exports: [ RouterModule ],

})
export class AppRoutingModule { }
