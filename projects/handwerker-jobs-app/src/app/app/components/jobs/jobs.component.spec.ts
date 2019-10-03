/* tslint:disable: component-selector */
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JobsComponent } from '@handwerker-jobs-app/components/jobs/jobs.component';

@Component({ selector: 'mat-toolbar', template: '' })
export class MatToolbarStubComponent {}

@Component({ selector: 'mat-card', template: '' })
export class MatCardStubComponent {}

@Component({ selector: 'mat-card-header', template: '' })
export class MatCardHeaderStubComponent {}

@Component({ selector: 'mat-card-title', template: '' })
export class MatCardTitleStubComponent {}

@Component({ selector: 'mat-card-content', template: '' })
export class MatCardContentStubComponent {}

@Component({ selector: 'mat-accordion', template: '' })
export class MatAccordionStubComponent {}

@Component({ selector: 'mat-expansion-panel', template: '' })
export class MatExpansionPanelStubComponent {}

@Component({ selector: 'mat-expansion-panel-header', template: '' })
export class MatExpansionPanelHeaderStubComponent {}

@Component({ selector: 'mat-panel-title', template: '' })
export class MatPanelTitleStubComponent {}

@Component({ selector: 'mat-panel-description', template: '' })
export class MatExpansionPanelDescriptionStubComponent {}

describe('JobsComponent', () => {
  let fixture: ComponentFixture<JobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JobsComponent,
        MatToolbarStubComponent,
        MatCardStubComponent,
        MatCardHeaderStubComponent,
        MatCardTitleStubComponent,
        MatCardContentStubComponent,
        MatAccordionStubComponent,
        MatExpansionPanelStubComponent,
        MatExpansionPanelHeaderStubComponent,
        MatPanelTitleStubComponent,
        MatExpansionPanelDescriptionStubComponent
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(JobsComponent);
      });
  }));

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
