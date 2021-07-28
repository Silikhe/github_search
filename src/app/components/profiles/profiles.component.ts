import { RepositoryService } from './../../serrvices/repository.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  public info:any = [];
  public repos:any = [];
  public profiles: any = []

  constructor(private service: RepositoryService) { 
    this.service.getUserInfo().subscribe(info => {
      console.log(info);
      this.info = info;
    });
    this.service.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
  }

  ngOnInit(): void {
    this.service.getProfiles().subscribe((data)=> {
      this.profiles = data;
      console.log(data)
    })
  }
  

}
