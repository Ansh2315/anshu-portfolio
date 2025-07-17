import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerTreeComponent } from './explorer-tree.component';

describe('ExplorerTreeComponent', () => {
  let component: ExplorerTreeComponent;
  let fixture: ComponentFixture<ExplorerTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorerTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
