import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { SafeStyle } from '@angular/platform-browser';

export class Answer {
  id: number;
  text: string = '';
  picked: boolean;
  percStyle: SafeStyle;
  votes: number;
}

export class Poll {
  question: string;
  answers: Answer[];
  multipleChoice: boolean;
  hideResults: boolean;
}

export class Ballot {
  poll: Poll;
  results: Answer[];
  alreadyVoted: boolean;
  totalVotes: number;
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

  loadBallot(hash: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/polls/${hash}`);
  }

  submitVote(hash: string, answerIds: number[]) {
    return this.http.post(`${this.baseUrl}/polls/${hash}/votes`, answerIds);
  }

}
