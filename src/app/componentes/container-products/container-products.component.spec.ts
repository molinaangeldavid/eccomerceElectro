import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProductsComponent } from './container-products.component';

describe('ContainerProductsComponent', () => {
  let component: ContainerProductsComponent;
  let fixture: ComponentFixture<ContainerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
