import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Smar1Page } from './smar1.page';

describe('Smar1Page', () => {
  let component: Smar1Page;
  let fixture: ComponentFixture<Smar1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Smar1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
