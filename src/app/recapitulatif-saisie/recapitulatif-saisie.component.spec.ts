import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulatifSaisieComponent } from './recapitulatif-saisie.component';

describe('RecapitulatifSaisieComponent', () => {
  let component: RecapitulatifSaisieComponent;
  let fixture: ComponentFixture<RecapitulatifSaisieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapitulatifSaisieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapitulatifSaisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
