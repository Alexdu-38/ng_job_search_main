import { Routes } from '@angular/router';
import { AllJobComponent } from './components/job/all-job/all-job.component';
import { FavoriteJobComponent } from './components/job/favorite-job/favorite-job.component';
import { DetailJobComponent } from './components/job/detail-job/detail-job.component';

export const routes: Routes = [
    {
        path: 'jobs',
        title: 'Jobs',
        component: AllJobComponent
    },
    {
        path: 'jobs/:id',
        title: 'Job\'s detail',
        loadComponent: () => import('./components/job/detail-job/detail-job.component').then(c => c.DetailJobComponent)
    },
    {
        path: 'favorites',
        title: 'Favorites jobs',
        loadComponent: () => import('./components/job/favorite-job/favorite-job.component').then(c => c.FavoriteJobComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'jobs'
    },
    {
        path: '**',
        redirectTo: 'jobs'
    }
];
