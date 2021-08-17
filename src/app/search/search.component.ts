import { RepositoryService } from './../serrvices/repository.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  profile: any = [];
  repos: any = [];
  info: any=[];
  username: any;
  display: any =true;

  constructor(private profileService: RepositoryService) {
    this.profileService.getUserInfo().subscribe(info => {
      console.log("repos here" + info);
      this.info = info;
    });

    this.profileService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
  }

  ngOnInit(): void {}

  findUser() {
    
    this.display = false
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe((profile) => {
      console.log(profile);
      this.profile = profile;
    });

    // this.profileService.getRepos(this.username).subscribe((repos) => {
    //   console.log("repos here" + repos);
    //   this.repos = repos;
    // });

    // this.profileService.getProfileInfo().subscribe((info) => {
    //   console.log("repos here" + info);
    //   this.info = info;
    // });
  }
}
