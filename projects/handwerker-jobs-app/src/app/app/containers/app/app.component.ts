import { Component, OnInit } from '@angular/core';
import * as fromRootModels from '@handwerker-jobs-app/models';
import * as fromRootServices from '@handwerker-jobs-app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'hdj-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'MyHammer App';
  jobs$: Observable<fromRootModels.Job[]>;

  constructor(private jobsService: fromRootServices.JobsService) {}

  ngOnInit(): void {
    this.jobs$ = this.jobsService.loadJobs();
  }
}
