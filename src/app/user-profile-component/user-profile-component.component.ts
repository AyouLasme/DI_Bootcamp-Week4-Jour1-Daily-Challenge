import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent {
  user = {
    name : 'LASME',
    prenom : 'Ayou',
    Image : 'https://media.licdn.com/dms/image/D4E03AQEWNPus3ky0wA/profile-displayphoto-shrink_800_800/0/1672957281686?e=1678924800&v=beta&t=I_aIRGVE4jrjx1uehlAIaeX3XvxL9o4OCxiaq4W4qRI'
  };

  get fullName(){
    return this.user.name + " " + this.user.prenom;
  }
}
