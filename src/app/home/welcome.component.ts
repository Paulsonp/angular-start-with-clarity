import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    userDetails;
    constructor(public authService: AuthService) {
        authService.user.subscribe((data) => {
            this.userDetails = data;
        });
    }
}
