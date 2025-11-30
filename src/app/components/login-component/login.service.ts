import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/auth';

    // The Signal that holds the user state
    currentUser = signal<{username: string} | null>(null);

    login(credentials: any) {
        return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
        tap(response => {
            localStorage.setItem('token', response.token);
            // Updating the signal
            this.currentUser.set({ username: credentials.username });
        })
        );
    }

    logout() {
        localStorage.removeItem('token');
        this.currentUser.set(null);
    }
}