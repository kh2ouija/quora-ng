import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Poll, PollApiService } from '../poll-api.service';

@Component({
  selector: 'show-poll',
  templateUrl: './show-poll.component.html',
  styleUrls: ['./show-poll.component.css']
})
export class ShowPollComponent implements OnInit {

  poll: Poll;
  href: string;

  constructor(private pollApiService: PollApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('show poll init');
    this.route.params.subscribe(params => {
      this.pollApiService.fetchPoll(params['hash']).subscribe(
        response => this.poll = response.json()
      );
    });
    
  }

}
