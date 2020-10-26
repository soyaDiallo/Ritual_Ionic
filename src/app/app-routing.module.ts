import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { redirectUnauthorizedTo, AngularFireAuthGuard } from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['portal']);

const routes: Routes = [
  {
    path: 'home-load',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [
      AngularFireAuthGuard
    ],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [
      AngularFireAuthGuard
    ],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'portal',
    loadChildren: () => import('./pages/portal/portal.module').then(m => m.PortalPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then(m => m.LocationPageModule),
    canActivate: [
      AngularFireAuthGuard
    ],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./pages/restaurant/restaurant.module').then(m => m.RestaurantPageModule),
    canActivate: [
      AngularFireAuthGuard
    ],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule),
    canActivate: [
      AngularFireAuthGuard
    ],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {
    path: 'awards',
    loadChildren: () => import('./pages/awards/awards.module').then(m => m.AwardsPageModule),
    canActivate: [
      AngularFireAuthGuard
    ],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersPageModule),
    canActivate: [
      AngularFireAuthGuard
    ],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {
    path: 'awards-about',
    loadChildren: () => import('./pages/awards-about/awards-about.module').then(m => m.AwardsAboutPageModule)
  },
  {
    path: 'pannier',
    loadChildren: () => import('./pages/pannier/pannier.module').then( m => m.PannierPageModule)
  },
  {
    path: 'restaurant-about',
    loadChildren: () => import('./pages/restaurant-about/restaurant-about.module').then( m => m.RestaurantAboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
