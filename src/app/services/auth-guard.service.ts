import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/*Importing service starts*/
import { ChatService } from './chat.service';
/*Importing service ends*/

@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(
		public chatService: ChatService,
		public router: Router
	) { }

	canActivate(): Observable<boolean> {
		return this.chatService.userSessionCheck();
	}
}
