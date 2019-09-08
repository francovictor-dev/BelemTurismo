import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PraiasPage } from './praias.page';

describe('PraiasPage', () => {
  let component: PraiasPage;
  let fixture: ComponentFixture<PraiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PraiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
