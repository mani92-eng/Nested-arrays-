import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arr';
  items!: FormArray;
  reactform = new FormGroup({
    code: new FormControl('', Validators.required),
     name: new FormControl('', Validators.required),
    deladdress: new FormArray([])
  });



  ProceedSave() {
    console.log(this.reactform.value);
  }

  Addnewrow() {
    this.items = this.reactform.get("deladdress") as FormArray;
    this.items.push(this.Genrow())
  }
  Removeitem(index:any){
    this.items = this.reactform.get("deladdress") as FormArray;
    this.items.removeAt(index)
  }

  get deladdress(){
    return this.reactform.get("deladdress") as FormArray;
  }

  Genrow(): FormGroup {
    return new FormGroup({
     street:new FormControl('',Validators.required),
     city:new FormControl('',Validators.required),
     state:new FormControl('',Validators.required),
     zip:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(6)]) )
    });
  }
}
