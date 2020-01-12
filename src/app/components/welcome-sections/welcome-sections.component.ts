import { Component, OnInit, Input } from '@angular/core';
import { WelcomeSection } from 'src/app/models/welcome-section';

@Component({
  selector: 'app-welcome-sections',
  templateUrl: './welcome-sections.component.html',
  styleUrls: ['./welcome-sections.component.scss']
})
export class WelcomeSectionsComponent implements OnInit {
  @Input() welcomeSection: WelcomeSection;


  constructor() { }

  ngOnInit() {
    console.log('Welcome section page', this.welcomeSection);
  }

}
