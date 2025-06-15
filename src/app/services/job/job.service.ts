import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Job, JobDetail } from '../model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private _jobs = signal<Job[]>([]);
  public jobs = this._jobs.asReadonly();

  private _favoriteJobs = signal<Job[]>([]);
  public favoriteJobs = this._favoriteJobs.asReadonly();

  private http = inject(HttpClient);

  /**
   * Get all jobs
   * @returns All jobs
   */
  public getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs').pipe(
      tap(jobs => {
        this._jobs.set(jobs);
      })
    );
  }

  /**
   * Get a specific job by id
   * 
   * @param id Id of the job to retrieve
   * @returns A detailled job
   */
  public getJobDetail(id: number): Observable<JobDetail> {
    return this.http.get<JobDetail>(`/jobs/${id}`);
  }

  /**
   * Add a specific job to the favorite list
   * 
   * @param job Job to add
   */
  public addToFavoriteJobs(job: Job): void {
    this._favoriteJobs.update(favJobs => [...favJobs, job]);
  }

  /**
   * Remove a specific job to the favorite list
   * 
   * @param jobId Id of the job to remove
   */
  public removeFromFavoriteJobs(jobId: number): void {
    this._favoriteJobs().filter(favJobs => favJobs.id !== jobId);
  }
}
