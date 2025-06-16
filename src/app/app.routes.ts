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
    // TODO: Need to use LazyLoading
    {
        path: 'jobs/:id',
        title: 'Job\'s detail',
        component: DetailJobComponent
    },
    // TODO: Need to use LazyLoading
    {
        path: 'favorites',
        title: 'Favorites jobs',
        component: FavoriteJobComponent
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
