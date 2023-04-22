import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: {
    university: string,
    degree: string,
    duration: string
    courses: string[]
  } = {
    university: "University of Alberta",
    degree: "Computer Science Specialization",
    duration: "2017 - 2021",
    courses: ["Programming Methodology", "Algorithms", "Software Engineering", "Software Process and Product Management",
      "Web Applications and Architecture", "File and Database Management", "Network Security", "Human Computer Interaction"]
    };

  getUnivesity() {
    return this.education.university;
  }

  getDegree() {
    return this.education.degree
  }

  getDuration() {
    return this.education.duration
  }

  getCourses() {
    return this.education.courses;
  }

}
