import { Component, provideZoneChangeDetection } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';
import { ResidenceService } from 'src/app/core/services/residence.service';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent {

  constructor( private actR:ActivatedRoute, private resServ: ResidenceService, private R:Router) { }
id!:number;
residence?:Residence
updateForm=new FormGroup
({
  id:new FormControl(0),
  name:new FormControl(''),
  address:new FormControl(''),
  image:new FormControl(''),
  status:new FormControl('') 
});
  
  ngOnInit() {

    this.id=Number(this.actR.snapshot.paramMap.get('id'));
    this.resServ.getResidenceById(this.id).subscribe((donne)=>
      {
        this.residence=donne;
        this.updateForm.patchValue(this.residence);
      });
}

updateR(){
console.log(this.updateForm.value);

  const updatedResidence: Residence = {
    ...this.updateForm.value,
    id: this.updateForm.value.id ?? 0 // Ensure id is a number
  } as Residence;
  this.resServ.updateResidence(updatedResidence).subscribe(
    ()=>{alert("Residence updated successfully");
      this.R.navigate(['/residences']);
    }
  );
}
}
