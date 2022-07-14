import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, throwError } from "rxjs";
import { UserDataService } from "../user-data.service";

@Injectable({ providedIn: 'root' })
export class RegisService {

    constructor(private http: HttpClient, private userDataService: UserDataService) { }

    storeData(userData) {
        this.http.post<{ name: string }>(
            'https://registration-form-6d100-default-rtdb.firebaseio.com/posts.json',
            userData).subscribe(
                responseData => {
                    console.log(responseData);
                }, error => {
                    console.log(error.message);
                }
            );
    }

    fatchData() {
        return this.http.get<any>(
            'https://registration-form-6d100-default-rtdb.firebaseio.com/posts.json',
            {
                headers: new HttpHeaders({'costom-header':'hello'}),
                params : new HttpParams().set('print','prety')
            }
        )
            .pipe(map(responseData => {
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key) ) {
                            this.userDataService.userDataInfo.push({ ...responseData[key], id: key })   
                        }
                    }
                
                return this.userDataService;
            }), catchError(errorRes => {
                return throwError(errorRes);
            })
            );
    }

   
    deleteData(id) {        
        return this.http.delete('https://registration-form-6d100-default-rtdb.firebaseio.com/posts/'+id+'.json')
    }

    updateData(upadetedData,id) {
        this.http.put<any>('https://registration-form-6d100-default-rtdb.firebaseio.com/posts/'+id+'.json', upadetedData)
            .subscribe(response => {
                console.log(response);
            });
    }    
}