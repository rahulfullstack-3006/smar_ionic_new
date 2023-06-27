import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonTablePage } from './common-table.page';

describe('CommonTablePage', () => {
  let component: CommonTablePage;
  let fixture: ComponentFixture<CommonTablePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommonTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
