import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusersDetailComponent } from './addusers-detail.component';

describe('AddusersDetailComponent', () => {
  let component: AddusersDetailComponent;
  let fixture: ComponentFixture<AddusersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddusersDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddusersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
