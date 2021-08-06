import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { AppService } from '../app.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
     private router: Router,
     private ase: AppService


    ) {}
   logout() {
    this.router.navigate(['/']);
  }
    drawer_toggle_j(drawer: MatSidenav) {
    if (drawer.mode === 'over') {
      drawer.opened = false;
    }
  }
    user = "";
  ngOnInit() {
    if (this.ase.user === undefined) {
      let login_user: any = localStorage.getItem("login_menba");
      login_user = JSON.parse(login_user);
      console.log('login_user', login_user);
      this.ase.user = login_user;
      if (login_user === null) {
        this.router.navigate(['']);
      }
      this.user = this.ase.user['user'];

    } else {
      console.log('this.ase.user', this.ase.user)
      this.user = this.ase.user['user'];
      //localStorage.setItem('login_user', JSON.stringify(this.ase.user)) ;

    }

  }







}

