import { Routes } from '@angular/router';
import { ExampleRoot } from './pages/example-root/example-root';
import { ExampleDisplayPage } from './pages/example-display-page/example-display-page';
import { ExampleUpdatePage } from './pages/example-update-page/example-update-page';

export default [
  {
    path: '',
    component: ExampleRoot,
    children: [
      { path: '', redirectTo: 'display', pathMatch: 'full' },

      { path: 'display', component: ExampleDisplayPage },

      { path: 'update', component: ExampleUpdatePage },
    ],
  },
] as Routes;
