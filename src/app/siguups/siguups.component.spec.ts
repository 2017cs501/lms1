import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiguupsComponent } from './siguups.component';

describe('SiguupsComponent', () => {
  let component: SiguupsComponent;
  let fixture: ComponentFixture<SiguupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiguupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiguupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
