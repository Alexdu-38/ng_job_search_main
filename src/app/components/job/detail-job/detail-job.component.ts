import { DatePipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobService } from '../../../services/job/job.service';
import { JobDetail } from '../../../services/model';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-detail-job',
  imports: [NavbarComponent, RouterLink, NgOptimizedImage, DatePipe],
  templateUrl: './detail-job.component.html',
  styleUrl: './detail-job.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailJobComponent implements OnInit {

  public jobId = input.required<number>()

  protected jobDetail: WritableSignal<JobDetail | null> = signal(null);

  private readonly _jobService = inject(JobService);

  ngOnInit(): void {
    this._jobService.getJobDetail(this.jobId()).subscribe(job => {
      this.jobDetail.set(job);
    })
  }
}
