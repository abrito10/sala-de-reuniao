import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})


export class UpdateRoomComponent implements OnInit {

  rooms!: Observable<Room[]>;

  id!: number;
  room!: Room;
  submitted = false;


  constructor(private route: ActivatedRoute,private router: Router,
    private roomService: RoomService) { }

  ngOnInit() {
    this.room = new Room();

    this.id = this.route.snapshot.params['id'];
    
    this.roomService.getRoom(this.id)
      .subscribe(data => {
        console.log(data)
        this.room = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateRoom();    
  }

  updateRoom() {
    this.roomService.updateRoom(this.id, this.room)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        }, 
        error => console.log(error));
    //this.room = new Room();
    //this.gotoList();
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/room']);
  }

  reloadData() {
    this.rooms = this.roomService.getRoomsList();
    this.gotoList();

  }
  
}
