import { Component, Input } from '@angular/core';
import * as fromRootModels from '@handwerker-jobs-app/models';

@Component({
  selector: 'hdj-jobs',
  templateUrl: './jobs.component.html'
})
export class JobsComponent {
  @Input() title: string;
  @Input() jobs: fromRootModels.Job[];
}
