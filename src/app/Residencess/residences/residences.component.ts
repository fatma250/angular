import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';
import { ResidenceService } from 'src/app/core/services/residence.service';


@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  listResidences:Residence[]=[ ];
 showA=false;
 searchItem= "";

 constructor(private resServ:ResidenceService){}

 ngOnInit(){

   this.resServ.getResidences().subscribe(
      data => this.listResidences = data,
      erreur => console.log(erreur),
      ( ) => console.log("Le chargement des résidences est terminé")
   );
}


 show(R:Residence){
  if (R.address=="inconnu"){alert("Adresse inconnue")}
  else {this.showA=true;}
 }
 delete(id:number){
  this.resServ.deleteResidence(id).subscribe(()=>{
    this.resServ.getResidences().subscribe(
     data => this.listResidences = data)
  });
 }
}
