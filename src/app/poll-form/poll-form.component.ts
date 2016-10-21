import { Component, OnInit } from '@angular/core';
import { PollApiService } from '../poll-api.service'

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

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {

  poll: Poll;

  constructor(private pollApiService: PollApiService) {
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
    this.pollApiService.submitPoll(this.poll);
  };

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  ngOnInit() {
  }

}
