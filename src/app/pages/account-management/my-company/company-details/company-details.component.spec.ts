import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompanyDetailsComponent } from './company-details.component';

describe('CompanyComponent', () => {
    let component: CompanyDetailsComponent;
    let fixture: ComponentFixture<CompanyDetailsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [CompanyDetailsComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
