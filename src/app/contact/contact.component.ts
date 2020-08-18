import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { SubmitFormService } from './submit-form.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  //form: any = {name: '', email: '', phone: '', interest: '', comments: ''};
  FormData: FormGroup;
  
  interests: any[] = [
    'UX/ UI Design',
    'Full Stack Development',
    'Game Development',
    'Professional Courses',
    'Enrichment Courses'
  ]

  constructor(
    private formBuilder: FormBuilder,
    private submitFormService: SubmitFormService
    ) { }

  ngOnInit(): void {
    this.FormData = this.formBuilder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      comment: new FormControl('', [Validators.required])
    }
    )
  }

  submitForm() {
    console.log(this.form.name, this.form.email, this.form.phone, this.form.interest, this.form.comments);
    let formdata: string = this.form.name + this.form.email + this.form.phone + this.form.interest + this.form.comments;
    
    console.log(formdata);

    this.submitFormService.PostMessage(formdata)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm' //
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })

      this.form = {name: '', email: '', phone: '', interest: '', comments: ''};
    } 

}
