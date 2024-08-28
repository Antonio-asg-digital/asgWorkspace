import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgcomponentlibraryComponent } from './asgcomponentlibrary.component';

describe('AsgcomponentlibraryComponent', () => {
  let component: AsgcomponentlibraryComponent;
  let fixture: ComponentFixture<AsgcomponentlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsgcomponentlibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsgcomponentlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
