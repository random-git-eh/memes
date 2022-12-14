import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgComponent } from './erg.component';

describe('ErgComponent', () => {
  let component: ErgComponent;
  let fixture: ComponentFixture<ErgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
