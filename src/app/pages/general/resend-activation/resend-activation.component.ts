import { Component, OnDestroy } from '@angular/core';
import { NativeLoginService } from '@openchannel/angular-common-services';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ComponentsUserActivationModel } from '@openchannel/angular-common-components';

@Component({
    selector: 'app-resend-activation',
    templateUrl: './resend-activation.component.html',
    styleUrls: ['./resend-activation.component.scss'],
})
export class ResendActivationComponent implements OnDestroy {
    inProcess = false;
    activationModel = new ComponentsUserActivationModel();

    private destroy$: Subject<void> = new Subject();

    constructor(private nativeLoginService: NativeLoginService, private router: Router) {}

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    sendActivationMail(event: boolean): void {
        if (event) {
            this.inProcess = true;
            this.nativeLoginService
                .sendActivationCode(this.activationModel.email)
                .pipe(takeUntil(this.destroy$))
                .subscribe(
                    res => {
                        this.inProcess = false;
                        this.router.navigate(['login']).then();
                    },
                    error => {
                        this.inProcess = false;
                    },
                );
        }
    }
}
