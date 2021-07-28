import { RepositoryService } from './../../serrvices/repository.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  public profile: any = []

  constructor(private service: RepositoryService) { }

  ngOnInit(): void {
    this.service.getProfiles().subscribe((data)=> {
      this.profile = data;
      console.log(data)
    })
  }
  

}
