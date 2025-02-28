import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/app/Core/Models/residence';
import { ResidenceService } from '../Core/Services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit{

  listResidences:Residence[]=[];
  filteredResidences: Residence[] = [];
  selectedResidenceId: number | null = null;
  favoriteResidences: Residence[] = [];
  searchAddress: string = '';
  constructor(private reservS:ResidenceService){}

  ngOnInit() {
    this.loadResidences();
  }

  loadResidences() {
    this.reservS.getResidences().subscribe(residences => {
      this.listResidences = residences;
      this.filteredResidences = [...residences];
    });
  }

  showR(R: Residence) {
    if (R.address === "inconnu") {
      alert("Unknown Address");
    } else {
      this.selectedResidenceId = R.id;
    }
  }

  toggleFavorite(R: Residence) {
    const index = this.favoriteResidences.findIndex(res => res.id === R.id);
    if (index > -1) {
      this.favoriteResidences.splice(index, 1);
    } else {
      this.favoriteResidences.push(R);
    }
  }

  isFavorite(R: Residence): boolean {
    return this.favoriteResidences.some(res => res.id === R.id);
  }

  filterResidences() {
    const search = this.searchAddress.trim().toLowerCase();
    this.filteredResidences = this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(search) || residence.name.toLowerCase().includes(search)
    );
  }
}
