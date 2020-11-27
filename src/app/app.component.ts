import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewChecked{
  title = 'Interfaces-FinalTP';
  bottomGap: number = 0;
  topGap: number = 0;
  @ViewChild('navbar', {read: ElementRef}) navBarView: ElementRef;
  sideNavToggler: boolean = false;

  constructor(private cd: ChangeDetectorRef,
              private router: Router) {
    this.topGap = 0;
  }

  ngAfterViewChecked(): void {
    this.topGap = (<HTMLElement>this.navBarView.nativeElement).getBoundingClientRect().height
    this.cd.detectChanges();
  }

  ngOnInit(): void {
  }

  navigate(url) {
    this.router.navigate([url]);
  }
}
