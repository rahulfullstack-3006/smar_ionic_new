import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmardashboardPage } from './smardashboard.page';

describe('SmardashboardPage', () => {
  let component: SmardashboardPage;
  let fixture: ComponentFixture<SmardashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SmardashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
