import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Poll, Answer, PollApiService } from '../poll-api.service'

@Component({
  selector: 'create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  poll: Poll;

  constructor(private pollApiService: PollApiService, private router: Router) {
    this.poll = {
      question: '',
      answers: [new Answer(), new Answer()],
      multipleChoice: false,
      hideResults: false
    };
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
      response => this.router.navigateByUrl(`/success/${response.text()}`),
      error => console.error(error)
    );
  };

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  ngOnInit() {
  }

}
