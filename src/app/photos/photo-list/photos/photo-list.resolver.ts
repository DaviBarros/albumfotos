
import { PhotoService } from '../../photo/photo.service';
import { Injectable } from '@angular/core';
import { Photo } from '../../photo/photo';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private service: PhotoService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]>{
        const userName = route.params.userName;
        return this.service.listFromUserPagination(userName, 1);
    }

}
