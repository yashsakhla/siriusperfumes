import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCatComponent } from './products-cat.component';

describe('ProductsCatComponent', () => {
  let component: ProductsCatComponent;
  let fixture: ComponentFixture<ProductsCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
