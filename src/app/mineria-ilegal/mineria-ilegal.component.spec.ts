import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineriaIlegalComponent } from './mineria-ilegal.component';

describe('MineriaIlegalComponent', () => {
  let component: MineriaIlegalComponent;
  let fixture: ComponentFixture<MineriaIlegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineriaIlegalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineriaIlegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
