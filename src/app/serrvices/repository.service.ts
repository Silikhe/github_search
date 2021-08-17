import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private user: any;
  private username: string;
  private _Url = 'https://api.github.com/users';

  constructor(private http: HttpClient) {
    this.username = 'silikhe';
  }

  ngOnInit() {
    // Simple GET request with response type <any>
    this.http.get<any>('https://api.github.com/users').subscribe((data) => {
      this.username = data.total;
      console.log(this.username);
    });
  }

  getUserInfo() {
    return this.http.get('https://api.github.com/users/' + this.username);
  }

  getUserRepos() {
    return this.http.get(
      'https://api.github.com/users/' + this.username + '/repos'
    );
  }

  getProfiles() {
    return this.http.get<any[]>(this._Url);
  }



  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username);
  }

  getRepos(user: any){
    let userrepo = this.http.get('https://api.github.com/users/' + user + '/repos');
    console.log(userrepo)
    return userrepo
  }

  updateProfile(username:string){
    this.username = username;
  }

  updateRepo(username:string){
    this.username = username;
  }
}
