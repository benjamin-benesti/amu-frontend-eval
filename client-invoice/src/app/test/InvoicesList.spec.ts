// src/app/tests/todo-list.component.spec.ts

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ApiComponent } from "../api/http";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import {ClientDetailsComponent} from '../pages/page.client-detail';

describe('ClientDetailsComponent', () => {

    let fixture: ComponentFixture<ClientDetailsComponent>;


    let component: ClientDetailsComponent;


    beforeEach(async () => {

        await TestBed.configureTestingModule({

            declarations: [ClientDetailsComponent],
            imports: [HttpClientTestingModule,RouterTestingModule],
            providers : []
        }).compileComponents();


        fixture = TestBed.createComponent(ClientDetailsComponent);
        component = fixture.componentInstance;
    });

    it('should display print each tasks given in input on the screen', () => {

        let MOCK_INVOICES= [
            { id: 1, idClient: 1, amount:1000,status:"Envoyée" },
            { id: 2, idClient: 1, amount:2200,status:"Payée" },
        ]

        component.invoices = MOCK_INVOICES;
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('table tr')).length).toBe(2);
    });

  });
