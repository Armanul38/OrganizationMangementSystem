import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/auth';

    register(registerData: any): Observable<any> {
        // The userData object must match the Java RegisterRequest DTO fields exactly
        return  this.http.post(`${this.apiUrl}/signup`, registerData);
    }

}