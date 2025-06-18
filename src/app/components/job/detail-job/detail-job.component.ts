import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal, WritableSignal } from '@angular/core';
import { JobService } from '../../../services/job/job.service';
import { JobDetail } from '../../../services/model';
import { DatePipe, Location, NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-job',
  imports: [NavbarComponent, RouterLink, NgOptimizedImage, DatePipe],
  templateUrl: './detail-job.component.html',
  styleUrl: './detail-job.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailJobComponent implements OnInit {

  public id = input.required<number>()

  protected jobDetail: WritableSignal<JobDetail | null> = signal(null);

  protected readonly sanitizer = inject(DomSanitizer);
  private readonly _jobService = inject(JobService);

  ngOnInit(): void {
    this._jobService.getJobDetail(this.id()).subscribe(job => {
      this.jobDetail.set(job);
    })
  }
}
