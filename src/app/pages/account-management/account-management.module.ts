import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountManagementRoutingModule } from './account-management-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ChangePasswordComponent } from './my-profile/change-password/change-password.component';
import { GeneralProfileComponent } from './my-profile/general/general-profile.component';
import { SharedModule } from '@shared/shared.module';
import { ManagementComponent } from './my-company/management/management.component';
import { MyCompanyComponent } from './my-company/my-company.component';
import { CompanyDetailsComponent } from './my-company/company-details/company-details.component';
import { OcFormComponentsModule, OcManagementComponentsModule, OcAuthComponentsModule } from '@openchannel/angular-common-components';

@NgModule({
    declarations: [
        MyProfileComponent,
        ChangePasswordComponent,
        GeneralProfileComponent,
        ManagementComponent,
        MyCompanyComponent,
        CompanyDetailsComponent,
    ],
    imports: [
        CommonModule,
        AccountManagementRoutingModule,
        SharedModule,
        OcManagementComponentsModule,
        OcFormComponentsModule,
        OcAuthComponentsModule,
    ],
})
export class AccountManagementModule {}
