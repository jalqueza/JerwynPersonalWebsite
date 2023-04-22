export class ProjectsService {
    projects: { 
        title: string, 
        github: string|null, 
        type: string, 
        path: string, 
        points: string[]
     }[] = [
        { 
            title: "Roombooker", 
            github: null,
            type: "image",
            path: "assets/roombooker.jpg",
            points: [
                "University of Alberta web application that centralizes all campus room bookings",
                "My role in this project as part of Information Services and Technology (IST) was to design and develop the front-end and back-end from start to finish using C#/.NET and JavaScript/HTML/CSS"]
        },
        { 
            title: "Connect6", 
            github: "https://github.com/C355Team/Connect6",
            type: "video",
            path: "assets/Connect6.mp4",
            points: [
                "Artificial Intelligence player to play Connect6 against", 
                "My role in group of 4 was to implement the backend search trees and scoring heuristic using Python"]
        },
        { 
            title: "YegAR", 
            github: null,
            type: "video",
            path: "assets/YEGAR.mp4",
            points: [
                "A City tour based augmented reality mobile application created in partnership with the City of Edmonton", 
                "My role in the group project of 5 was to work on the frontend utilizing React Native and JavaScript to display augmented reality components and map route"]
        },
        { 
            title: "Yonder", 
            github: "https://github.com/cmput404-project-yonder/yonder",
            type: "video",
            path: "assets/Yonder.mp4",
            points: [
                "A distributed social networking platform",
                "My role in the group of 4 was to work on the backend utilizing Django/Python and PostgresSQL"]
        }
    ];
}