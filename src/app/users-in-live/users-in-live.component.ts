import {Component, Input, OnInit} from '@angular/core';
import {User} from "app/models/user.model";
import {SocketService} from "app/socket.service";

@Component({
  selector: 'app-users-in-live',
  templateUrl: './users-in-live.component.html',
  styleUrls: ['./users-in-live.component.css']
})
export class UsersInLiveComponent implements OnInit {
  @Input() public users = [];

  public user: String;
  onlineUsers: User[] = [];

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.socketService.onUserJoined().subscribe((user) => {

    });
  }

}
