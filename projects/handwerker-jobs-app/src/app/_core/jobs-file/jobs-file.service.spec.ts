/* tslint:disable:no-unused-variable */
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import * as fromRootModels from '@handwerker-jobs-app/models';
import { ErrorService } from '@handwerker-jobs-core/error/error.service';
import { jobsFileparams, JobsFileService } from '@handwerker-jobs-core/jobs-file/jobs-file.service';
import * as jobsFile from './jobs.json';

describe('ConfigFileService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let jobsFileService: JobsFileService;
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobsFileService, ErrorService]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    jobsFileService = TestBed.get(JobsFileService);
    url = './jobs.json';
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('can be instantiated via DI', () => {
    expect(jobsFileService instanceof JobsFileService).toBe(true);
  });

  it('can get the json and set body', () => {
    httpClient.get<fromRootModels.JobsFile>(url).subscribe((data: fromRootModels.JobsFile) => {
      expect(jobsFile).toEqual(data);
      expect(jobsFileService.jobs).toEqual(data.body);
    });
    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');

    req.flush(jobsFile);
  });

  it('can get the json with params', () => {
    httpClient
      .get<fromRootModels.JobsFile>(url, { params: jobsFileparams })
      .subscribe((data: fromRootModels.JobsFile) => expect(data).toEqual(jobsFile));

    const req = httpTestingController.expectOne(
      r => r.params.has('jobsRequest') && r.params.has('v')
    );

    req.flush(jobsFile);
  });
});
