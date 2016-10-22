import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'poll-links',
  templateUrl: './poll-links.component.html',
  styleUrls: ['./poll-links.component.css']
})
export class PollLinksComponent implements OnInit {

  hash: string;
  window: Window;

  constructor(private route: ActivatedRoute) {
    this.window = window;
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.hash = params['hash']
    );
  }

}
