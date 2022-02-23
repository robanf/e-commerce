import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmCategorieComponent } from './amm-categorie.component';

describe('AmmCategorieComponent', () => {
  let component: AmmCategorieComponent;
  let fixture: ComponentFixture<AmmCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
