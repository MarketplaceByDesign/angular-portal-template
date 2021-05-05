import { Component, OnDestroy } from '@angular/core';
import { NativeLoginService } from 'oc-ng-common-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ComponentsUserLoginModel } from 'oc-ng-common-component';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnDestroy {

    signupUrl = '/signup';
    loginUrl = '/login';
    companyLogoUrl = './assets/img/logo-company-2x.png';
    forgotPasswordDoneIconPath = './assets/img/forgot-password-complete-icon.svg';
    showResultPage = false;
    signIn = new ComponentsUserLoginModel();
    inProcess = false;

    private destroy$: Subject<void> = new Subject();

    constructor(private nativeLoginService: NativeLoginService) {
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    resetPwd(event) {
        if (event === true) {
            this.inProcess = true;
            this.nativeLoginService.sendResetCode(this.signIn.email)
              .pipe(takeUntil(this.destroy$))
              .subscribe(res => {
                  this.showResultPage = true;
                  this.inProcess = false;
              }, res => {
                  this.inProcess = false;
              });
        }
    }


}
