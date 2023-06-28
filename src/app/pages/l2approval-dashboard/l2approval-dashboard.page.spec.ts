import { ComponentFixture, TestBed } from '@angular/core/testing';
import { L2approvalDashboardPage } from './l2approval-dashboard.page';

describe('L2approvalDashboardPage', () => {
  let component: L2approvalDashboardPage;
  let fixture: ComponentFixture<L2approvalDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(L2approvalDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
