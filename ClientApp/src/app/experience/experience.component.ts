import { Component } from '@angular/core';
import { ExperienceService } from '../ExperienceService';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [ExperienceService]
})
export class ExperienceComponent {

  constructor(private experienceService: ExperienceService) { }

  getExperiences() {
    return this.experienceService.experiences;
  }
}
