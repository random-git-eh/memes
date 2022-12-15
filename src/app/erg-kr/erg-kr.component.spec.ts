import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgKrComponent } from './erg-kr.component';

describe('ErgKrComponent', () => {
  let component: ErgKrComponent;
  let fixture: ComponentFixture<ErgKrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgKrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErgKrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
