import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoteisPage } from './hoteis.page';

describe('HoteisPage', () => {
  let component: HoteisPage;
  let fixture: ComponentFixture<HoteisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoteisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoteisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
