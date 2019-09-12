import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  userData = null;
  constructor(
    private router: Router,
    private facebook: Facebook
  ) { }

  ngOnInit() {
  }
  slideOpts = {
    initialSlide: 0,
    speed: 500
  };

  loginComFB(){
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name, email, first_name, picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      })
    })
  }

  goToTabsPage(){
    this.router.navigateByUrl('tabs');
  }

}
