import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SugestoesPage } from './sugestoes.page';

describe('SugestoesPage', () => {
  let component: SugestoesPage;
  let fixture: ComponentFixture<SugestoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SugestoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
