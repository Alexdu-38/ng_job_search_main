import { booleanAttribute, ChangeDetectionStrategy, Component, computed, inject, input, output, signal, Signal } from '@angular/core';
import { Job } from '../../../services/model';
import { NgOptimizedImage } from '@angular/common';
import { JobService } from '../../../services/job/job.service';
import { RouterLink } from '@angular/router';
import { StarHoverDirective } from '../../../directives/star-hover.directive';

@Component({
  selector: 'app-job-list',
  imports: [NgOptimizedImage, RouterLink, StarHoverDirective],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListComponent {

  public displayStars = input(false, {transform: booleanAttribute});
  public jobs = input.required<Job[]>();
  public favJobsIds = input<number[]>([]);
  public addFavoriteJob = output<Job>();
  public removeFavoriteJob = output<number>();

  protected toggleFavorite(job: Job) {
    this.favJobsIds().includes(job.id) ? this.removeFavoriteJob.emit(job.id) : this.addFavoriteJob.emit(job);
  }
}
