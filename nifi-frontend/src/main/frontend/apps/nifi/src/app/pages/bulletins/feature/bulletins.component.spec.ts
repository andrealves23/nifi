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

import { Bulletins } from './bulletins.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BulletinBoard } from '../ui/bulletin-board/bulletin-board.component';
import { Navigation } from '../../../ui/common/navigation/navigation.component';
import { MockComponent } from 'ng-mocks';
<<<<<<<< HEAD:nifi-frontend/src/main/frontend/apps/nifi/apps/nifi/src/app/pages/bulletins/feature/bulletins.component.spec.ts
========
import { BannerText } from '../../../ui/common/banner-text/banner-text.component';
>>>>>>>> b6d3a4987a (Trigger CI pipeline):nifi-frontend/src/main/frontend/apps/nifi/src/app/pages/bulletins/feature/bulletins.component.spec.ts

describe('Bulletins', () => {
    let component: Bulletins;
    let fixture: ComponentFixture<Bulletins>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Bulletins],
<<<<<<<< HEAD:nifi-frontend/src/main/frontend/apps/nifi/apps/nifi/src/app/pages/bulletins/feature/bulletins.component.spec.ts
            imports: [RouterModule, RouterTestingModule, MockComponent(Navigation), MockComponent(BulletinBoard)]
========
            imports: [
                RouterModule,
                RouterTestingModule,
                MockComponent(BannerText),
                MockComponent(Navigation),
                MockComponent(BulletinBoard)
            ]
>>>>>>>> b6d3a4987a (Trigger CI pipeline):nifi-frontend/src/main/frontend/apps/nifi/src/app/pages/bulletins/feature/bulletins.component.spec.ts
        });
        fixture = TestBed.createComponent(Bulletins);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
