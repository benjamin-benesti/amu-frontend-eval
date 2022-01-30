// src/app/tests/todo-list.component.spec.ts

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import {ListClientComponent} from '../pages/page.client-list'

describe('ListClientComponent', () => {

    let fixture: ComponentFixture<ListClientComponent>;


    let component: ListClientComponent;

    beforeEach(async () => {
      await TestBed.configureTestingModule({

          declarations:[ListClientComponent],
          imports:[HttpClientTestingModule,RouterTestingModule]
      }).compileComponents();

      fixture = TestBed.createComponent(ListClientComponent);

      component = fixture.componentInstance;
      component.ngOnInit();
  });

    it('should display print each tasks given in input on the screen', () => {

        let MOCK_CLIENT= [
            { id: 1, fullName: "Utilisateur1", email: "mail1@mail.com" },
            { id: 2, fullName: "Utilisateur2", email: "mail2@mail.com" },
        ]

        component.clients = MOCK_CLIENT;
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('tr th')).length).toBe(2);
    });

  });
