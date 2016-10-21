import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class Answer {
  text: string;

  constructor() {
    this.text = '';
  }  
}

export class Poll {
  question: string;
  answers: Answer[];
  multipleChoice: boolean;
  hideResults: boolean;
}

@Injectable()
export class PollApiService {
  
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:8080';
  }

  submitPoll(poll: Poll) {
    this.http.post(`${this.baseUrl}/polls`, poll).subscribe(
      response => console.log(`OK ${window.location.origin}/${response.text()}`),
      error => console.error(error)
    );
  }

  fetchPoll(hash: string) {
    return this.http.get(`${this.baseUrl}/polls/${hash}`);
  }

}
