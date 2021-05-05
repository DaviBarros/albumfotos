import { filter, map, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

constructor(private router: Router, private activadedRoute: ActivatedRoute, private titleService: Title ){}

  ngOnInit(): void {
    this.router.events
    .pipe(filter(
      event => event instanceof NavigationEnd))
    .pipe(map(() => this.activadedRoute))
    .pipe(map(route => {
      while(route.firstChild) route = route.firstChild;
      return route;
    }))
   .pipe(switchMap(route => route.data))
   .subscribe(event => this.titleService.setTitle(event.title));
       
  }

}