import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RejectedCasesPage } from './rejected-cases.page';

describe('RejectedCasesPage', () => {
  let component: RejectedCasesPage;
  let fixture: ComponentFixture<RejectedCasesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RejectedCasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
