import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { JobService } from '../../../services/job/job.service';
import { Job } from '../../../services/model';
import { NavbarComponent } from '../../navbar/navbar.component';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { JobListComponent } from '../job-list/job-list.component';

@Component({
  selector: 'app-all-job',
  imports: [NavbarComponent, JobListComponent, AsyncPipe],
  templateUrl: './all-job.component.html',
  styleUrl: './all-job.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllJobComponent {
  private readonly _jobService = inject(JobService);
  protected jobs$ = this._jobService.getJobs();

  /**
   * Add the specific job to the favorite list
   * @param job Job to add
   */
  public addToFavoriteJobs(job: Job): void {
    this._jobService.addToFavoriteJobs(job);
  }

  /**
   * Remove the specific job to the favorite list
   * @param jobId Id of the job 
   */
  public removeFromFavoriteJobs(jobId: number): void {
    this._jobService.removeFromFavoriteJobs(jobId);
  }
}
