import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  private apiUrl = 'http://localhost:3000'; // replace with your API URL

  constructor(private http: HttpClient, private router:Router) { }

  // GET request
  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  // POST request
  post(endpoint: string, body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, body);
  }

  // PUT request
  put(endpoint: string, body: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, body);
  }

  // DELETE request
  delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }

  decodeToken(token: any): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  getRoleName(roleId: number): string {
    switch (roleId) {
      case 0:
        return 'Super Admin';
      case 1:
        return 'Admin (Nursing Home)';
      case 2:
        return 'Physician';
      case 3:
        return 'Physician Assistant';
      case 4:
        return 'Nurse Practitioner';
      case 5:
        return 'Patient';
      case 6:
        return 'Biller';
      default:
        return 'Unknown Role';
    }
  }

  capitalizeFirstLetter(input: string): string {
    if (!input) return '';
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

   redirectBasedOnRole(role: number) {
    switch (role) {
      case 0: // Super Admin
        this.router.navigateByUrl('/superadmin/dashboard').then(nav => {
          if (nav) {
            console.log('Navigation to Super Admin dashboard successful');
          } else {
            console.log('Navigation to Super Admin dashboard failed');
          }
        });
        break;
  
      case 1: // Admin (Nursing Home)
        this.router.navigate(['/admin/dashboard']).then(nav => {
          if (nav) {
            console.log('Navigation to Admin (Nursing Home) dashboard successful');
          } else {
            console.log('Navigation to Admin (Nursing Home) dashboard failed');
          }
        });
        break;
  
      case 2: // Physician
        this.router.navigate(['/physician/dashboard']).then(nav => {
          if (nav) {
            console.log('Navigation to Physician dashboard successful');
          } else {
            console.log('Navigation to Physician dashboard failed');
          }
        });
        break;
  
      default:
        this.router.navigate(['/default-route']).then(nav => {
          if (nav) {
            console.log('Navigation to default route successful');
          } else {
            console.log('Navigation to default route failed');
          }
        });
        break;
    }
  }
  

}