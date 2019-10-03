import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fromRootModels from '@handwerker-jobs-app/models';
import { ErrorService } from '@handwerker-jobs-core/error/error.service';
import { Observable } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

export const jobsFileparams = new HttpParams()
  .set('jobsRequest', 'jsonFile')
  .append(`v`, `${new Date().getTime()}`);

/**
 * Get jobs.json
 */
@Injectable({
  providedIn: 'root'
})
export class JobsFileService {
  get jobs(): fromRootModels.Job[] {
    return this._jobs;
  }
  set jobs(jobs: fromRootModels.Job[]) {
    this._jobs = jobs;
  }
  private _jobs: any;

  constructor(private errorService: ErrorService, private http: HttpClient) {}

  jobsFile(): Observable<fromRootModels.JobsFile> {
    return this.http.get<fromRootModels.JobsFile>('jobs.json', { params: jobsFileparams }).pipe(
      tap((jobsFile: fromRootModels.JobsFile) => (this.jobs = jobsFile.body)),
      take(1),
      catchError(this.errorService.handleHttpError('loadJobs'))
    );
  }
}
