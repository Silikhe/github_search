import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private user: any;


  constructor(private http:HttpClient) {
    this.user = "silikhe";
   }


  getUserRepos(){
    return this.http.get("https://api.github.com/users/" + this.user +
    "/repos")
    .pipe(map(res => res));
  }

  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.user)
    .pipe(map(res => res));
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.user
    )
    .pipe(map(res => res));
  }

  getRepos(){
    return this.http.get("https://api.github.com/users/" + this.user)
     .pipe(map(res => res));
    }

  updateProfile(username:string){
    this.user = username;
  }

}
