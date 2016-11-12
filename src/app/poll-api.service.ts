import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';

export class Answer {
  id: number;
  text: string;
  picked: boolean;
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

  submitPoll(poll: Poll): Observable<any> {
    return this.http.post(`${this.baseUrl}/polls`, poll);
  }

  fetchPoll(hash: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/polls/${hash}`);
  }

  submitVote(hash: string, answerIds: number[]) {
    return this.http.post(`${this.baseUrl}/polls/${hash}/votes`, answerIds);
  }

}
