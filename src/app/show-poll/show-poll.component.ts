import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Poll, Answer, PollApiService } from '../poll-api.service';

@Component({
  selector: 'show-poll',
  templateUrl: './show-poll.component.html',
  styleUrls: ['./show-poll.component.css']
})
export class ShowPollComponent implements OnInit {

  poll: Poll;
  hash: string;

  constructor(private pollApiService: PollApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pollApiService.fetchPoll(params['hash']).subscribe(
        response => {
          this.hash = params['hash'];
          this.poll = response.json();
          this.poll.answers.forEach((a) => a.picked = false);
        }
      );
    });    
  }

  answerClicked(answer: Answer) {
    if (this.poll.multipleChoice) {
      answer.picked = !answer.picked;
    }
    else {
      this.poll.answers.forEach((a) => a.picked = false);
      answer.picked = true;
    }
  }

  submitVote() {
    let answerIds: number[] = this.poll.answers.filter((a) => a.picked).map((a) => a.id); 
    this.pollApiService.submitVote(this.hash, answerIds).subscribe(
      response => console.log(response.json())
    )
  }

}
