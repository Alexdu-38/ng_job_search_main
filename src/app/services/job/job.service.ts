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

  private favJobsStorage = localStorage.getItem('favJobs');
  private _favoriteJobs = signal<Job[]>(this.favJobsStorage !== null ? JSON.parse(this.favJobsStorage) : []);
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
   * Add a specific job to the favorite list and uodate the local storage
   * 
   * @param job Job to add
   */
  public addToFavoriteJobs(job: Job): void {
    this._favoriteJobs.update(favJobs => [...favJobs, job]);
    localStorage.setItem('favJobs', JSON.stringify(this._favoriteJobs()));
  }

  /**
   * Remove a specific job to the favorite list and uodate the local storage
   * 
   * @param jobId Id of the job to remove
   */
  public removeFromFavoriteJobs(jobId: number): void {
    this._favoriteJobs.update(favJobs => favJobs.filter(job => job.id !== jobId));
    localStorage.setItem('favJobs', JSON.stringify(this._favoriteJobs()));
  }
}
