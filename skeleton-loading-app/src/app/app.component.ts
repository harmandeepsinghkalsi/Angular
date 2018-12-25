import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  users: Array<any> = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((response) => {
        this.users = response;
      },
        (err) => {
          console.log('err', err);
        });
  }

  generateFake(count: Number): Array<number> {
    const indexes = [];

    for (let index = 0; index < count; index++) {
      indexes.push(index);
    }

    return indexes;
  }
}
