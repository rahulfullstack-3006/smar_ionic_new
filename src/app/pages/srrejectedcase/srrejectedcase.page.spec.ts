import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SrrejectedcasePage } from './srrejectedcase.page';

describe('SrrejectedcasePage', () => {
  let component: SrrejectedcasePage;
  let fixture: ComponentFixture<SrrejectedcasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SrrejectedcasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
