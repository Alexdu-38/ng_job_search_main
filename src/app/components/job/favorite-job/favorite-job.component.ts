import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { JobListComponent } from '../job-list/job-list.component';
import { JobService } from '../../../services/job/job.service';
import { Job } from '../../../services/model';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-favorite-job',
  imports: [JobListComponent, NavbarComponent],
  templateUrl: './favorite-job.component.html',
  styleUrl: './favorite-job.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteJobComponent {
  private readonly _jobService = inject(JobService);
  protected favJobs: Job[] = this._jobService.favoritesJobs();
}
