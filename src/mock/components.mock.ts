import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import {
    ComponentsUserActivationModel,
    ComponentsUserGridActionModel,
    ComponentsUsersGridParametersModel,
    ErrorMessageFormId,
    HeadingTag,
    ModalInviteUserModel,
    ModalUpdateUserModel,
    SocialLink,
    SortField,
    UserGridSortOrder,
    UserSortChosen,
} from '@openchannel/angular-common-components';
import { SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-management',
    template: '',
})
export class MockManagementComponent {}

@Component({
    selector: 'app-notification',
    template: '',
})
export class MockNotificationComponent {}

@Component({
    selector: 'app-page-title',
    template: '',
})
export class MockPageTitleComponent {
    @Input() pageTitle: string;
    @Input() navigateText: string;
    @Input() buttonText: string;
    @Output() readonly navigateClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() readonly buttonClick: EventEmitter<void> = new EventEmitter<void>();
}

@Component({
    selector: 'oc-activation',
    template: '',
})
export class MockOcActivationComponent {
    @Input() resendActivationUrl: any;
    @Input() signupUrl: any;
    @Input() companyLogoUrl: string = '';
    @Input() process: boolean = false;
    @Input() activationModel: ComponentsUserActivationModel;
    @Output() readonly buttonClick: EventEmitter<any> = new EventEmitter<any>();
    @Input() headingTag: HeadingTag = 'h1';
}

@Component({
    selector: 'app-loader',
    template: '',
})
export class MockAppLoaderForm {}

@Component({
    selector: 'app-company',
    template: '',
})
export class MockAppCompanyComponent {}

@Component({
    selector: 'app-payouts',
    template: '',
})
export class MockAppPayoutsComponent {}

@Component({
    selector: 'oc-profile-navbar',
    template: '',
})
export class MockOcProfileNavbar {
    @Input() username: string;
}

@Component({
    selector: 'oc-app-get-started',
    template: '',
})
export class MockAppGetStartedComponent {
    @Input() getStartedImage: string = '';
    @Input() getStartedHeader: string = 'List Your App in our App Store';
    @Input() getStartedHeadingTag: string = 'h3';
    @Input() getStartedDescription: string = '';
    @Input() getStartedButtonText: string = '';
    @Input() getStartedType: 'home' | 'search' = 'home';
    @Output() readonly getStarted: EventEmitter<void> = new EventEmitter<void>();
}

@Component({
    selector: 'oc-app-table',
    template: '',
})
export class MockAppTableComponent {
    @Input() properties: any;
    @Input() noAppMessage: string = 'You have no apps in your list';
    @Input() menuUrl: string = 'assets/angular-common-components/dots-menu.svg';
    @Input() ascendingSortIcon: string = '';
    @Input() descendingSortIcon: string = '';
    @Input() defaultAppIcon: string = '';
    @Input() activeColumns: any[] = [];
    @Input() modifyColumns: any = {};
    @Input() sortOptions: any;
    @Input() tableBottomRowTemplate: TemplateRef<any>;
    @Input() selectAppFieldByPathConfig: any;
    @Output() readonly menuClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() readonly pageScrolled: EventEmitter<number> = new EventEmitter<number>();
    @Output() readonly sortChosen: EventEmitter<any> = new EventEmitter<any>();
    @Output() readonly sortOptionsChosen: EventEmitter<any> = new EventEmitter<any>();
}

@Component({
    selector: 'oc-button',
    template: '',
})
export class MockButtonComponent {
    @Input() text: string = '';
    @Input() disabled: boolean = false;
    @Input() type: 'primary' | 'secondary' | 'link' = 'primary';
    @Input() customClass: string;
    @Input() style: string;
    @Input() process: boolean;
    @Input() customTemplate: TemplateRef<any>;
    @Output() readonly click: EventEmitter<void> = new EventEmitter<void>();
}

@Component({
    selector: 'oc-chart',
    template: '',
})
export class MockOcChartComponent {
    @Input() chartData: any;
    @Input() count: number = 0;
    @Input() countText: string = '';
    @Input() downloadUrl: SafeUrl = '';
    @Output() readonly changeChartOptions: EventEmitter<any> = new EventEmitter<any>();
}

@Component({
    selector: 'oc-error',
    template: '',
})
export class MockOcErrorComponent {
    @Input() control: any;
    @Input() modifyErrors: any;
}

@Component({
    selector: 'oc-select',
    template: '',
})
export class MockOcSelectComponent {
    @Input() labelField: string = '';
    @Input() selectValArr: any;
}

@Component({
    selector: 'app-header',
    template: '',
})
export class MockAppHeaderComponent {}

@Component({
    selector: 'app-footer',
    template: '',
})
export class MockAppFooterComponent {}

@Component({
    selector: 'oc-label',
    template: '',
})
export class MockOcLabelComponent {
    @Input() text: string = '';
    @Input() selectValArr: any;
}

@Component({
    selector: 'app-chart',
    template: '',
})
export class MockAppChartComponent {
    @Input() showAppsDropdown: boolean = true;
    @Input() appId: string = '';
}

@Component({
    selector: 'oc-edit-user-form',
    template: '',
})
export class MockEditUserFormComponent {
    @Input() formConfigs: any[];
    @Input() enableTypesDropdown = false;
    @Input() enablePasswordField = false;
    @Input() enableTermsCheckbox: any;
    @Input() defaultTypeLabelText = 'Type';
    @Input() defaultAccountData: any;
    @Input() defaultOrganizationData: any;
    @Input() defaultEmptyConfigsErrorTemplate: TemplateRef<any>;
    @Input() defaultEmptyConfigsErrorMessage: string = 'There are no forms configured';
    @Input() customTermsDescription: TemplateRef<any>;
    @Input() formId: any = 'editUser';
    @Output() readonly resultFormDataChange = new EventEmitter<any>();
    @Output() readonly createdFormGroup = new EventEmitter<any>();
}

@Component({
    selector: 'oc-forgot-password',
    template: '',
})
export class MockOcForgotPasswordComponent {
    @Input() loginUrl: any;
    @Input() signupUrl: any;
    @Input() showResultPage: any;
    @Input() forgotPasswordDoneUrl: any;
    @Input() companyLogoUrl: any;
    @Input() process: any;
    @Input() loginModel: any;
    @Output() readonly buttonClick: EventEmitter<any> = new EventEmitter<any>();
}

@Component({
    selector: 'oc-form',
    template: '',
})
export class MockFormComponent {
    @Input() formJsonData: any;
    @Input() showButton: boolean = true;
    @Input() buttonPosition: 'center' | 'left' | 'right' | 'justify' = 'left';
    @Input() successButtonText: string = 'Submit';
    @Input() labelPosition: 'top' | 'left' | 'right' = 'top';
    @Input() process: boolean = false;
    @Input() generatedForm: any;
    @Output() readonly formSubmitted: EventEmitter<any> = new EventEmitter();
    @Output() readonly cancelSubmit: EventEmitter<void> = new EventEmitter();
    @Output() readonly formDataUpdated: EventEmitter<any> = new EventEmitter();
    @Output() readonly isFormInvalid: EventEmitter<boolean> = new EventEmitter();
    @Output() readonly createdForm: EventEmitter<any> = new EventEmitter();
    @Input() displayType: any = 'page';
    @Input() additionalButton: TemplateRef<any>;
    @Input() currentStep: number = 1;
    @Input() maxStepsToShow: number = 0;
    @Input() formId: any = null;
    @Output() readonly currentStepChange = new EventEmitter<number>();
    @Input() showSubmitButton: boolean = true;
    @Input() showGroupHeading: boolean = true;
    @Input() showGroupDescription: boolean = true;
    @Input() showProgressBar: boolean = true;
    @Input() setFormErrors: boolean = false;
}

@Component({
    selector: 'oc-invite-modal',
    template: '',
})
export class MockOcInviteModalComponent {
    @Input() modalData: ModalInviteUserModel | ModalUpdateUserModel;
    @Input() formId: ErrorMessageFormId = null;
    formConfig: any = {};
    formGroup: any;
    formData: any;
    inProcess = false;
}

@Component({
    selector: 'oc-login',
    template: '',
})
export class MockOcLoginComponent {
    @Input() loginModel: any = {};
    @Input() loginButtonText: string = 'Log in';
    @Input() forgotPwdUrl: string;
    @Input() signupUrl: string;
    @Input() companyLogoUrl: string = './assets/angular-common-components/logo-company.png';
    @Input() process: boolean = false;
    @Input() incorrectEmailErrorCode: string = 'email_is_incorrect';
    @Input() incorrectEmailErrorCodeTemplate: TemplateRef<any>;
    @Input() notVerifiedEmailErrorCode: string = 'email_not_verified';
    @Input() notVerifiedEmailErrorTemplate: TemplateRef<any>;
    @Input() passwordResetRequiredErrorCode: string = 'password_reset_required';
    @Input() passwordResetRequiredErrorTemplate: TemplateRef<any>;
    @Input() headingTag: string = 'h1';
    @Output() readonly loginModelChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() readonly submit: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() readonly sendActivationLink: EventEmitter<string> = new EventEmitter<string>();
}

@Component({
    selector: 'oc-menu-user-grid',
    template: '',
})
export class MockOcMenuUserGridComponent {
    @Input() properties: ComponentsUsersGridParametersModel;
    @Input() menuUrl: string = 'assets/angular-common-components/dots-menu.svg';
    @Input() sortIcon: string;
    @Input() sortOptions: UserGridSortOrder;
    @Output() readonly menuClicked: EventEmitter<ComponentsUserGridActionModel> = new EventEmitter<ComponentsUserGridActionModel>();
    @Output() readonly pageScrolled: EventEmitter<number> = new EventEmitter<number>();
    @Output() readonly sortChosen: EventEmitter<SortField> = new EventEmitter<SortField>();
    @Output() readonly sortOptionsChosen: EventEmitter<UserSortChosen> = new EventEmitter<UserSortChosen>();
}

@Component({
    selector: 'oc-resend-activation',
    template: '',
})
export class MockResendActivation {
    @Input() activationModel: any;
    @Input() loginUrl: string;
    @Input() signupUrl: string;
    @Input() companyLogoUrl: string;
    @Input() process: boolean = false;
    @Output() readonly buttonClick = new EventEmitter<any>();
}

@Component({
    selector: 'oc-reset-password',
    template: '',
})
export class MockOcResetPasswordComponent {
    @Input() companyLogoUrl: any;
    @Input() process: any;
    @Input() loginUrl: any;
    @Input() signupUrl: any;
    @Output() readonly buttonClick: EventEmitter<any> = new EventEmitter<any>();
    @Input() resetModel: any;
}

@Component({
    selector: 'oc-signup-custom',
    template: '',
})
export class MockSignupCustom {
    @Input() loginUrl: string;
    @Input() signupUrl: string;
    @Input() activationUrl: string;
    @Input() termsUrl: string;
    @Input() policyUrl: string;
    @Input() companyLogoUrl: string;
    @Input() process: boolean = false;
    @Input() forgotPasswordDoneUrl: string;
    @Input() showSignupFeedbackPage: boolean = false;
    @Input() showLoginLink: boolean = true;
    @Input() formConfigsLoading: boolean = true;
    @Input() formConfigs: any[];
    @Input() defaultTypeLabelText = 'Type';
    @Input() customTermsDescription: TemplateRef<any>;
    @Input() headingTag: string = 'h1';
    @Input() headingInvitationText: string = 'Enter your personal details below';
    @Input() formId: any = 'signupCustom';
    @Input() customFormTemplate: TemplateRef<any>;
    @Output() readonly showSignupFeedbackPageChange = new EventEmitter<boolean>();
    @Output() readonly resultUserData = new EventEmitter<any>();
}

@Component({
    selector: 'oc-social-links',
    template: '',
})
export class MockSocialLinks {
    @Input() socialLinks: SocialLink[];
}

@Component({
    selector: 'oc-toasts',
    template: '',
})
export class MockOcToastsComponent {}

@Component({
    selector: 'mock-routing',
    template: '',
})
export class MockRoutingComponent {}

@Component({
    selector: 'ngx-loading-bar',
    template: '',
})
export class MockNgxLoadingBarComponent {
    @Input() includeSpinner: boolean = false;
}
export class MockNgbModalRef {
    result = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
    });
    resolve: any;
    reject: any;

    componentInstance: any = {};

    dismiss(): void {
        this.removeActiveModal();
        this.reject();
    }

    dismissAll(): void {
        this.removeActiveModal();
        this.reject();
    }

    close(data?: any): void {
        this.removeActiveModal();
        this.resolve(data);
    }

    private removeActiveModal(): void {
        MockNgbModal.ACTIVE_MODALS.pop();
    }
}

@Component({
    selector: 'svg-icon',
    template: '',
})
export class MockSvgIconComponent {
    @Input() src: string;
    @Input() svgClass: string;
    @Input() ngbTooltip: string;
}

export class MockNgbModal {
    static ACTIVE_MODALS: MockNgbModalRef[] = [];

    open(): any {
        const newModal = new MockNgbModalRef();
        MockNgbModal.ACTIVE_MODALS.push(newModal);
        return newModal;
    }

    dismissAll(): any {
        return true;
    }

    hasOpenModals(): any {
        return true;
    }
}

export class MockModalInviteUserModel {}
