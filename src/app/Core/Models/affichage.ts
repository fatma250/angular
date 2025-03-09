import { Component, OnInit } from '@angular/core';
import { Annonce } from './entite';
import { AnnonceService } from 'src/app/services/annonce.service';


@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  annonces: Annonce[] = []; // This will hold the list of announcements

  constructor(private annonceService: AnnonceService) {}

  ngOnInit(): void {
    this.fetchAnnonces();
  }

  // Method to fetch announcements
  fetchAnnonces(): void {
    this.annonceService.getAnnonces().subscribe(response => {
      this.annonces = response;
    }, error => {
      console.error('Error fetching annonces:', error);
    });
  }
}
