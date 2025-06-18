import { NgOptimizedImage } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarHoverDirective } from '../../../directives/star-hover.directive';
import { Job } from '../../../services/model';

@Component({
  selector: 'app-job-list',
  imports: [NgOptimizedImage, RouterLink, StarHoverDirective],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListComponent {

  public displayStars = input(false, { transform: booleanAttribute });
  public jobs = input.required<Job[]>();
  public favJobsIds = input<number[]>([]);
  public addFavoriteJob = output<Job>();
  public removeFavoriteJob = output<number>();

  protected toggleFavorite(job: Job): void {
    this.favJobsIds().includes(job.id) ? this.removeFavoriteJob.emit(job.id) : this.addFavoriteJob.emit(job);
  }
}
