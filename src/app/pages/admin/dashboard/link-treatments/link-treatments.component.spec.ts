import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTreatmentsComponent } from './link-treatments.component';

describe('LinkTreatmentsComponent', () => {
  let component: LinkTreatmentsComponent;
  let fixture: ComponentFixture<LinkTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkTreatmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
