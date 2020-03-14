import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsPresentComponent } from './items-present.component';

describe('ItemsPresentComponent', () => {
  let component: ItemsPresentComponent;
  let fixture: ComponentFixture<ItemsPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
