import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { SubmitFormService } from './submit-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  showForm: boolean = true;
  
  interests: any[] = [
    'UX/ UI Design',
    'Full Stack Development',
    'Game Development',
    'Professional Courses',
    'Enrichment Courses'
  ]

  constructor(
    private formBuilder: FormBuilder,
    private submitFormService: SubmitFormService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm() {
    this.FormData = this.formBuilder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Phone: new FormControl('', [Validators.required]),
      Interest: new FormControl('', [Validators.required]),
      Comments: new FormControl('', [Validators.required])
    });
  }

  onSubmit(FormData) {
    this.showForm = false;

    setTimeout(() => {
      this.submitFormService.PostMessage(FormData)
      .subscribe(response => {
        alert("Your inquiry is being submitted.");
        location.href = 'https://mailthis.to/confirm';
        
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      });
        this.prepareForm();
        this.showForm = true;
      });


  } 

}
