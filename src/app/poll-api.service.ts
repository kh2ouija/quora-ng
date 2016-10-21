import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Poll } from './poll-form/poll-form.component';

@Injectable()
export class PollApiService {
  
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:8080/polls';
  }

  submitPoll(poll: Poll) {
    this.http.post(this.baseUrl, poll).subscribe(response => console.log(response));
  }

}
