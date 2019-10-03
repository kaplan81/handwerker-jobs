/* tslint:disable: object-literal-sort-keys */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '@handwerker-jobs-app/containers/app/app.component';
import * as fromRootModels from '@handwerker-jobs-app/models';
import * as fromRootServices from '@handwerker-jobs-app/services';
import { ComponentSuite, ComponentSuiteElements } from '@handwerker-jobs-testing/component-suite';
import { Observable, of } from 'rxjs';

@Component({ selector: 'hdj-jobs', template: '' })
export class JobsStubComponent {
  @Input() title: string;
  @Input() jobs: fromRootModels.Job[];
}

// We pick only active jobs.
const jobsMock: fromRootModels.Job[] = [
  {
    id: '98969442',
    title: '90 m� Dach neu eindecken, Material ben�tigt',
    zip_code: '10115',
    city: 'Berlin',
    thumbnail: '//placekitten.com/150/150',
    attachments: [
      '//placekitten.com/300/200',
      '//placekitten.com/200/400',
      '//placekitten.com/250/250'
    ],
    counter: {
      messages_total: 4,
      messages_unread: 1
    },
    is_awarded: false,
    categories: [
      {
        id: '41'
      },
      {
        id: '58'
      }
    ],
    state: 'active',
    description:
      // tslint:disable-next-line: max-line-length
      'Eum accusata erroribus ei, te usu homero nostrud. Sed te tractatos dissentiet, id saperet luptatum forensibus est. His idque tibique periculis ut, quis principes consulatu ad per. Impedit periculis voluptaria mel eu, periculis intellegat incorrupte his an, ex vis adhuc saepe habemus.\r\n\r\n\r\nEi vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei. Eum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.',
    end_date: '2018-10-31T14:14:32+01:00',
    created_at: '2018-10-01T14:14:32+02:00'
  },
  {
    id: '68934444',
    title: '2 Scheiben in Altbau-Balkont�r austauschen',
    zip_code: '10115',
    city: 'Berlin',
    thumbnail: '//placekitten.com/150/150',
    attachments: [],
    counter: {
      messages_total: 1,
      messages_unread: 0
    },
    is_awarded: false,
    categories: [
      {
        id: '33'
      }
    ],
    state: 'active',
    description:
      // tslint:disable-next-line: max-line-length
      'Ei vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei.\r\n\r\nEum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.',
    end_date: '2018-11-28T16:10:02+01:00',
    created_at: '2018-10-11T04:14:32+02:00'
  },
  {
    id: '8969556',
    title: 'W�chentliche Renigung eines Hauses',
    zip_code: '10115',
    city: 'Berlin',
    thumbnail: '//placekitten.com/150/150',
    attachments: [],
    counter: {
      messages_total: 1,
      messages_unread: 1
    },
    is_awarded: true,
    categories: [
      {
        id: '14'
      }
    ],
    state: 'active',
    description:
      // tslint:disable-next-line: max-line-length
      'Sed te tractatos dissentiet, id saperet luptatum forensibus est. His idque tibique periculis ut, quis principes consulatu ad per. Impedit periculis voluptaria mel eu, periculis intellegat incorrupte his an, ex vis adhuc saepe habemus.\r\n\r\n\r\nEi vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei. Eum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.',
    end_date: '2018-10-31T14:14:32+01:00',
    created_at: '2018-10-01T14:14:32+02:00'
  }
];

export class JobsServiceMock extends fromRootServices.JobsService {
  loadJobs(): Observable<fromRootModels.Job[]> {
    return of(jobsMock);
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let els: ComponentSuiteElements<AppComponent>;
  let jobsService: fromRootServices.JobsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, JobsStubComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: fromRootServices.JobsService, useClass: JobsServiceMock }]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        els = new ComponentSuite<AppComponent>(fixture).elements;
        jobsService = els.host.debugEl.injector.get(fromRootServices.JobsService);
      });
  }));

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should get the jobs', () => {
    fixture.detectChanges();
    jobsService.loadJobs().subscribe((jobs: fromRootModels.Job[]) => {
      expect(jobs).toEqual(jobsMock);
    });
  });
});
