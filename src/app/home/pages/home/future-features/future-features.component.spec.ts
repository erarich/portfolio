import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureFeaturesComponent } from './future-features.component';

describe('FutureFeaturesComponent', () => {
  let component: FutureFeaturesComponent;
  let fixture: ComponentFixture<FutureFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FutureFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
