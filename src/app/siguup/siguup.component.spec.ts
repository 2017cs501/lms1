import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiguupComponent } from './siguup.component';

describe('SiguupComponent', () => {
  let component: SiguupComponent;
  let fixture: ComponentFixture<SiguupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiguupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiguupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
