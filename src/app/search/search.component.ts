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
  username: any;
  display: any =false;

  constructor(private profileService: RepositoryService) {}

  ngOnInit(): void {}

  findUser() {
    this.display =
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe((profile) => {
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getRepos().subscribe((repos) => {
      console.log("repos here" + repos);
      this.repos.json = repos;
    });
  }
}
