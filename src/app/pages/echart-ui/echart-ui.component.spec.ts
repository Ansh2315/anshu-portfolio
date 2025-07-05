import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartUiComponent } from './echart-ui.component';

describe('EchartUiComponent', () => {
  let component: EchartUiComponent;
  let fixture: ComponentFixture<EchartUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchartUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
