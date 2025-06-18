import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Job, JobDetail } from '../model';

const FAVORITES_JOBS_STORAGE = 'favJobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private _jobs = signal<Job[]>([]);
  public jobs = this._jobs.asReadonly();

  private favJobsStorage = localStorage.getItem(FAVORITES_JOBS_STORAGE);
  private _favoritesJobs = signal<Job[]>(this.favJobsStorage !== null ? JSON.parse(this.favJobsStorage) : []);
  public favoritesJobs = this._favoritesJobs.asReadonly();

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
  public getJobDetail(jobId: number): Observable<JobDetail> {
    return this.http.get<JobDetail>(`/jobs/${jobId}`);
  }

  /**
   * Add a specific job to the favorite list and uodate the local storage
   * 
   * @param job Job to add
   */
  public addToFavoriteJobs(job: Job): void {
    this._favoritesJobs.update(favJobs => [...favJobs, job]);
    localStorage.setItem(FAVORITES_JOBS_STORAGE, JSON.stringify(this._favoritesJobs()));
  }

  /**
   * Remove a specific job to the favorite list and uodate the local storage
   * 
   * @param jobId Id of the job to remove
   */
  public removeFromFavoriteJobs(jobId: number): void {
    this._favoritesJobs.update(favJobs => favJobs.filter(job => job.id !== jobId));
    localStorage.setItem(FAVORITES_JOBS_STORAGE, JSON.stringify(this._favoritesJobs()));
  }
}
