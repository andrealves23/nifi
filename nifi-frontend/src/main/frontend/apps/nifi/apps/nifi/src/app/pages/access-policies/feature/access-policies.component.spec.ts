/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AccessPolicies } from './access-policies.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Navigation } from '../../../ui/common/navigation/navigation.component';
import { MockComponent } from 'ng-mocks';
<<<<<<<< HEAD:nifi-frontend/src/main/frontend/apps/nifi/apps/nifi/src/app/pages/access-policies/feature/access-policies.component.spec.ts
========
import { BannerText } from '../../../ui/common/banner-text/banner-text.component';
>>>>>>>> b6d3a4987a (Trigger CI pipeline):nifi-frontend/src/main/frontend/apps/nifi/src/app/pages/access-policies/feature/access-policies.component.spec.ts

describe('AccessPolicies', () => {
    let component: AccessPolicies;
    let fixture: ComponentFixture<AccessPolicies>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AccessPolicies],
<<<<<<<< HEAD:nifi-frontend/src/main/frontend/apps/nifi/apps/nifi/src/app/pages/access-policies/feature/access-policies.component.spec.ts
            imports: [RouterModule, RouterTestingModule, MockComponent(Navigation)]
========
            imports: [RouterModule, RouterTestingModule, MockComponent(BannerText), MockComponent(Navigation)]
>>>>>>>> b6d3a4987a (Trigger CI pipeline):nifi-frontend/src/main/frontend/apps/nifi/src/app/pages/access-policies/feature/access-policies.component.spec.ts
        });
        fixture = TestBed.createComponent(AccessPolicies);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
