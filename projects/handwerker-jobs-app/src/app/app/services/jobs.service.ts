import { Injectable } from '@angular/core';
import * as fromRootModels from '@handwerker-jobs-app/models';
import { JobsFileService } from '@handwerker-jobs-core/jobs-file/jobs-file.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  constructor(private jobsFileService: JobsFileService) {}

  // This is all tested in the core service that gets data from a file.
  loadJobs(): Observable<fromRootModels.Job[]> {
    return this.jobsFileService
      .jobsFile()
      .pipe(
        map((jobsFile: fromRootModels.JobsFile) =>
          jobsFile.body.filter((job: fromRootModels.Job) => job.state === 'active')
        )
      );
  }
}
