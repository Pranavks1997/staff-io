import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { StudentService } from '../services/student.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginUserData = {};
    constructor(public _router: Router, private _service: StudentService) {}

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true'); 
        console.log(this.loginUserData);
        this._service.loginUser(this.loginUserData)
            .subscribe(         //response will be the token
                res =>{ 
                    console.log(res),
                    localStorage.setItem('access_token',res['access_token']),
                    //localStorage.setItem('refresh_token',res['refresh_token']),
                    this._router.navigate([''])
                },
                err => console.log(err)
            )
    }
}
