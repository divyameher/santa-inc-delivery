import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftDeliveryComponent } from './gift-delivery.component';

describe('GiftDeliveryComponent', () => {
  let component: GiftDeliveryComponent;
  let fixture: ComponentFixture<GiftDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
