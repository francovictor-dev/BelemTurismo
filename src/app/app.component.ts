import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
      {
        title: 'Início',
        url: '/tabs',
        icon: 'home'
      },
      {
        title: 'Hotéis',
        url: '/hoteis',
        icon: 'stats'
      },
      {
        title: 'Restaurantes',
        url: '/restaurantes',
        icon: 'restaurant'
      },
      {
        title: 'Pontos Turísticos',
        url: '/pontos-turisticos',
        icon: 'car'
      },
      {
        title: 'Praias',
        url: '/praias',
        icon: 'boat'
      }

    ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('intro');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
