import { Component, OnInit } from '@angular/core';
import { Poll, Answer, PollApiService } from '../Poll-api.service'

@Component({
  selector: 'app-create-Poll',
  templateUrl: './create-Poll.component.html',
  styleUrls: ['./create-Poll.component.css']
})
export class CreatePollComponent implements OnInit {

  poll: Poll;

  constructor(private PollApiService: PollApiService) {
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
    this.PollApiService.submitPoll(this.poll);
  };

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  ngOnInit() {
  }

}
