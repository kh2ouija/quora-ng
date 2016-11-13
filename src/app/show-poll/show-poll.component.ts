import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Ballot, Poll, Answer, PollApiService } from '../poll-api.service';

@Component({
  selector: 'show-poll',
  templateUrl: './show-poll.component.html',
  styleUrls: ['./show-poll.component.css']
})
export class ShowPollComponent implements OnInit {

  ballot: Ballot;
  hash: string;

  constructor(private pollApiService: PollApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pollApiService.loadBallot(params['hash']).subscribe(
        response => {
          this.hash = params['hash'];
          this.ballot = response.json();
          this.ballot.poll.answers.forEach((a) => a.picked = false);
        }
      );
    });  
  }

  answerClicked(answer: Answer) {
    if (this.ballot.poll.multipleChoice) {
      answer.picked = !answer.picked;
    }
    else {
      this.ballot.poll.answers.forEach((a) => a.picked = false);
      answer.picked = true;
    }
  }

  submitVote() {
    let answerIds: number[] = this.ballot.poll.answers.filter((a) => a.picked).map((a) => a.id); 
    this.pollApiService.submitVote(this.hash, answerIds).subscribe(
      response => console.log(response.json())
    )
  }

}
