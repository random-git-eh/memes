import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchostoneComponent } from './echostone.component';

describe('EchostoneComponent', () => {
  let component: EchostoneComponent;
  let fixture: ComponentFixture<EchostoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchostoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchostoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
