import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';
import { ResidenceService } from 'src/app/core/services/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css'],
  //providers:[ResidenceService]
})
export class AddResidenceComponent {

  addForm= new FormGroup({
    id: new FormControl(this.getRandomInt(1,100).toString()),
    name: new FormControl('', Validators.required),
    address: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    image: new FormControl(''),
    status: new FormControl('')
  });

  constructor(private resServ:ResidenceService, private Rout:Router){}
  get name(){
    return this.addForm.get('name');
  }

  get address(){
    return this.addForm.get('address');
  }
   
  R!:Residence;
  SaveResidence(F:FormGroup){
    
      this.R={...F.value};
      console.log(this.R);
      this.resServ.addResidence(this.R).subscribe(
        () => {console.log("Residence ajoutée avec succès");
        this.Rout.navigate(['/residences']);
        },
        
      );
  }

   getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
