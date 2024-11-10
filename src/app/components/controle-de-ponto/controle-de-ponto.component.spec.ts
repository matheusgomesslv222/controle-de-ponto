import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleDePontoComponent } from './controle-de-ponto.component';

describe('ControleDePontoComponent', () => {
  let component: ControleDePontoComponent;
  let fixture: ComponentFixture<ControleDePontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleDePontoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleDePontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
