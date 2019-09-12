import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PontosTuristicosPage } from './pontos-turisticos.page';

describe('PontosTuristicosPage', () => {
  let component: PontosTuristicosPage;
  let fixture: ComponentFixture<PontosTuristicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosTuristicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PontosTuristicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
