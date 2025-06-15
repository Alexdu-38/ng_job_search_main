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
  private favJobsIds = signal<number[]>(this._jobService.favoriteJobs().map(job => job.id));

  public jobs = input.required<Job[]>();
  public addFavoriteJob = output<Job>();
  public removeFavoriteJob = output<number>();
}
