import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'Home'
    },
    {
      title: 'Recherche',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'Commandes',
      url: '/home',
      icon: 'newspaper'
    },
    {
      title: 'Récompences',
      url: '/home',
      icon: 'wallet'
    },
    {
      title: 'Groupes',
      url: '/home',
      icon: 'people'
    },
    {
      title: 'Carnet d\'adresse',
      url: '/home',
      icon: 'documents'
    },
    {
      title: 'Paramètres utilisateur',
      url: '/settings',
      icon: 'person'
    }
  ];

  public displayName: string;
  public email: string;

  constructor(
    private afa: AngularFireAuth
  ) { }

  ngOnInit() {
    this.afa.onAuthStateChanged(user => {
      if (user) {
        this.displayName = user.displayName;
        this.email = user.email;
      }
    });
  }

}
