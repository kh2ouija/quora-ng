import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Poll, Answer, PollApiService } from '../poll-api.service';

@Component({
  selector: 'create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent {

  poll: Poll;
  createdHash: string;

  constructor(private pollApiService: PollApiService, private router: Router) {
    this.reset();
  }

  reset() {
    this.poll = {
      question: '',
      answers: [new Answer(), new Answer()],
      multipleChoice: false,
      hideResults: false
    };
    this.createdHash = null;
  }

  getSuccessHref() {
    return `${window.location.protocol}//${window.location.host}/${this.createdHash}`
  }

  addAnswer() {
    this.poll.answers.push(new Answer());
  };

  deleteAnswer(i) {
    if (this.poll.answers.length > 1) {
      this.poll.answers.splice(i, 1);
    }
  }

  createPoll() {
    this.pollApiService.submitPoll(this.poll).subscribe(
      response => {
        this.createdHash = response.text();
        console.log(this.createdHash);
        //this.router.navigateByUrl(`/${response.text()}`),
      },
      error => console.error(error)
    );
  };

  customTrackBy(index: number, obj: any): any {
    return index;
  }

}
