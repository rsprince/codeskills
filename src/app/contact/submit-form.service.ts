import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {
  private mailApi = 'https://mailthis.to/codeskillsacademy'

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    //input._after = '';
    return this.http.post(this.mailApi, input, { responseType: 'text' })
      .pipe(
        map(
          response => {
            if (response) {
              return response;
            }
          },
          error => {
            return error;
          }
        )
      )
  }
}
