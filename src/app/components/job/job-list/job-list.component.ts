import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal, Signal } from '@angular/core';
import { Job } from '../../../services/model';
import { NgOptimizedImage } from '@angular/common';
import { JobService } from '../../../services/job/job.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-list',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListComponent {

  private readonly _jobService = inject(JobService);

  public jobs = input.required<Job[]>();
  public favJobsIds = input<number[]>([]);
  public addFavoriteJob = output<Job>();
  public removeFavoriteJob = output<number>();

  /**
   * Check if a job is in the favorite jobs list
   * TODO: Check if I can pass the id job rather then the job itself
   * @param job Job to check if in the favorite jobs list
   * @returns true if the job is in the favorite jobs list, false otherwise
   */
  protected isFavorite(job: Job) {
    return this.favJobsIds().includes(job.id);
  }

  protected toggleFavorite(job: Job) {
    // TODO: To implement
  }
}
