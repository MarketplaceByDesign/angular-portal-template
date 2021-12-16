import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppManageRoutingModule } from './app-manage-routing.module';
import { AppDeveloperComponent } from './app-developer/app-developer.component';
import { OcFormComponentsModule, OcPortalComponentsModule } from '@openchannel/angular-common-components';
import { SharedModule } from '@shared/shared.module';
import { AppNewComponent } from './app-new/app-new.component';
import { StripeAccountsService } from '@core/services/stripe-accounts.service';

@NgModule({
    declarations: [AppDeveloperComponent, AppNewComponent],
    imports: [CommonModule, AppManageRoutingModule, OcPortalComponentsModule, SharedModule, OcFormComponentsModule],
    providers: [StripeAccountsService],
})
export class AppManageModule {}
