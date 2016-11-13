import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';

import { Ballot, Poll, Answer, PollApiService } from '../poll-api.service';

@Component({
  selector: 'show-poll',
  templateUrl: './show-poll.component.html',
  styleUrls: ['./show-poll.component.css']
})
export class ShowPollComponent implements OnInit {

  ballot: Ballot;
  hash: string;
  showingResults: boolean;

  constructor(private pollApiService: PollApiService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.showingResults = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pollApiService.loadBallot(params['hash']).subscribe(
        response => {
          this.hash = params['hash'];
          this.ballot = response.json();
          if (this.ballot.alreadyVoted) {
            this.showResults();
          }
          else {
            this.ballot.poll.answers.forEach((a) => a.picked = false);
          }  
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
      response => {
        this.ballot = response.json();
        this.showResults();
      }
    )
  }

  showResults() {
    this.ballot.results = _.cloneDeep(this.ballot.poll.answers);
    this.ballot.results = _.orderBy(this.ballot.results, 'votes', 'desc');
    this.ballot.totalVotes = _(this.ballot.results).map('votes').sum();
    _.each(this.ballot.results, (a) => a.percStyle = this.sanitizer.bypassSecurityTrustStyle(`${100 * a.votes / this.ballot.totalVotes}%`));    
    this.showingResults = true;
  }

}
