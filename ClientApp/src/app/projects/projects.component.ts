import { Component } from '@angular/core';
import { ProjectsService } from '../ProjectsServices';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent {

  constructor(private projectsService: ProjectsService) { }

  getProjects() {
    return this.projectsService.projects;
  }

}
