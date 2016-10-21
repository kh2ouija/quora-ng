import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Poll, PollApiService } from '../Poll-api.service';

@Component({
  selector: 'app-show-Poll',
  templateUrl: './show-Poll.component.html',
  styleUrls: ['./show-Poll.component.css']
})
export class ShowPollComponent implements OnInit {
  Poll: Poll;

  constructor(private PollApiService: PollApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.PollApiService.fetchPoll(params['hash']).subscribe(
        Poll => {
          this.Poll = Poll.json();
          console.log(this.Poll);
        },
        error => console.error(error)
      );
    });
    
  }

}
