import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Teachers } from './teachers/teachers';
import { Activities } from './activities/activities';
import { Safety } from './safety/safety';
import { Admissions } from './admissions/admissions';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'teachers', component: Teachers },
  { path: 'activities', component: Activities },
  { path: 'safety', component: Safety },
  { path: 'admissions', component: Admissions },
  { path: 'contact', component: Contact },
];
