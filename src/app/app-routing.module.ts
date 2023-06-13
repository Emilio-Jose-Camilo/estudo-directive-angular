import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { SubNgIfComponent } from './ng-if/sub-ng-if/sub-ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForFormComponent } from './ng-for-form/ng-for-form.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'app-ng-style',
    component: NgStyleComponent
  },
  {
    path: 'app-ng-class',
    component: NgClassComponent
  },
  {
    path: 'app-ng-if',
    component: NgIfComponent
  },
  {
    path: 'app-sub-ng-if',
    component: SubNgIfComponent
  },
  {
    path: 'app-ng-for',
    component: NgForComponent
  },
  {
    path: 'app-ng-for-form',
    component: NgForFormComponent
  },
  {
    path: 'app-ng-switch',
    component: NgSwitchComponent
  },
  {
    path: 'app-ng-template',
    component: NgTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
