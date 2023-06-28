import { ComponentFixture, TestBed } from '@angular/core/testing';
import { L1approvalDashboardPage } from './l1approval-dashboard.page';

describe('L1approvalDashboardPage', () => {
  let component: L1approvalDashboardPage;
  let fixture: ComponentFixture<L1approvalDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(L1approvalDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
