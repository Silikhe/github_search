import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../serrvices/repository.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  public repos:any = [];

  constructor( private service: RepositoryService) {
    this.service.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
   }

  ngOnInit(): void {
  }

}
