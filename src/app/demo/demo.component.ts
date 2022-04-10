import { Component, OnInit } from '@angular/core';
import {DemoService} from "./demo.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


  title: string | undefined;

  constructor(private demoService: DemoService) {

  }

  ngOnInit(): void {
    this.demoService.getTitle().subscribe(title => this.title = title);
  }

}
