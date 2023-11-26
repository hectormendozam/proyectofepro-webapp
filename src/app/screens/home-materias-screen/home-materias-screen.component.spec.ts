import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMateriasScreenComponent } from './home-materias-screen.component';

describe('HomeMateriasScreenComponent', () => {
  let component: HomeMateriasScreenComponent;
  let fixture: ComponentFixture<HomeMateriasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMateriasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMateriasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
