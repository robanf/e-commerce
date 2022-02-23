import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmProdottiComponent } from './amm-prodotti.component';

describe('AmmProdottiComponent', () => {
  let component: AmmProdottiComponent;
  let fixture: ComponentFixture<AmmProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmProdottiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
