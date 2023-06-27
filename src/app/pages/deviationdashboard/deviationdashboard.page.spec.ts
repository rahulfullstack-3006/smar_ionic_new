import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviationdashboardPage } from './deviationdashboard.page';

describe('DeviationdashboardPage', () => {
  let component: DeviationdashboardPage;
  let fixture: ComponentFixture<DeviationdashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeviationdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
