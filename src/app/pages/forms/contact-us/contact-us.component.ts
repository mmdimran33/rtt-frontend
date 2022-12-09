import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RootTronicsService } from "src/app/pages/root-tronics.service";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent implements OnInit {

  contactusForm: any;

  constructor(private formBuilder: FormBuilder,
              private roottronicsService: RootTronicsService) { 
                  console.log('ContactUSComponent constructer called!!!!!!!!');
              }

  ngOnInit(): void {
    this.contactusForm = this.formBuilder.group({
      enquiryT: ["", Validators.required],
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      organization: ["", Validators.required],
      email: ["", Validators.required],
      jobtitle: ["", Validators.required],
      phonenumber: ["", Validators.required],
      location: ["", Validators.required],
      selectsite: ["", Validators.required],
      message: ["", Validators.required],
    })
  }

  onSubmit() {
    if(!this.contactusForm.valid) {
      return;
    } else {
      this.roottronicsService.addEmail(this.contactusForm.value).subscribe(data => {
        console.log('email Data : ' , data);
        console.log('data saved successfully!');        
      })
      // console.log('contactus form : ' , this.contactusForm.value);
    }
  }

}
