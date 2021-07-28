import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private user: any;
  private _Url = 'https://api.github.com/users';

  constructor(private http:HttpClient) {
    this.user = "silikhe";
   }

   ngOnInit() {      
    // Simple GET request with response type <any>
    this.http.get<any>('https://api.github.com/users').subscribe(data => {
        this.user = data.total;
        console.log(this.user)
    })

   
}

// getHeroes(): Observable<any[]> {
//   return this.http.get<any[]>(this.heroesUrl)
//     .pipe(
//       catchError(this.handleError<any[]>('getHeroes', []))
//     );
// }


getProfiles(){
  return this.http.get<any[]>(this._Url);
}

}
