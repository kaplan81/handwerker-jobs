import { Injectable } from '@angular/core';
import * as fromRootModels from '@handwerker-jobs-app/models';
import { JobsFileService } from '@handwerker-jobs-core/jobs-file/jobs-file.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  constructor(private jobsFileService: JobsFileService) {}

  // This is all tested in the core service that gets data from a file.
  loadJobs(): Observable<fromRootModels.JobsFile> {
    return this.jobsFileService.jobsFile();
  }
}
