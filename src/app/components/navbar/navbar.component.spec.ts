import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCasePipe } from '@angular/common';
import { provideRouter, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterLink, RouterLinkActive, UpperCasePipe],
      providers:
        [
          provideRouter(routes)
        ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'Jobs' title`, () => {
    const jobsNavigationTitle = Object.getOwnPropertyDescriptor(component, 'jobsNavigationTitle')?.value;
    expect(jobsNavigationTitle).toEqual('Jobs');
  });

  it(`should have the 'Favorites' title`, () => {
    const favoriteJobsNavigationTitle = Object.getOwnPropertyDescriptor(component, 'favoriteJobsNavigationTitle')?.value;
    expect(favoriteJobsNavigationTitle).toEqual('Favorites');
  });
});
