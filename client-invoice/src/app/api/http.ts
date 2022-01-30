import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {Clients} from "../types/client"
import {Invoices} from "../types/invoice"

const SUPABASE_URL_CLIENT = 'https://figekdnzmcimnijvqluj.supabase.co/rest/v1/customers';
const SUPABASE_URL_INVOICES = 'https://figekdnzmcimnijvqluj.supabase.co/rest/v1/invoices';
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQyMDQ2MiwiZXhwIjoxOTU4OTk2NDYyfQ.Abw0iJfl2NfF0YQxBrLGElm1ROI6XhUQbnelD1caPAc";

@Injectable()
export class ApiComponent
{

    constructor(private http: HttpClient){}

    findAllClients(): Observable<Clients> {
        return this.http.get<Clients>(SUPABASE_URL_CLIENT, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

    findClientById(id:number):Observable<Clients>{
        return this.http.get<Clients>(SUPABASE_URL_CLIENT+ '?id=eq.' + id,
        {
            headers:{
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

    getInvoicesOfClient(idClient:number): Observable<Invoices>{
        return this.http.get<Invoices>(SUPABASE_URL_INVOICES+ '?idClient=eq.' + idClient,{
            headers:{
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
            })
    }

    createClient(fullname:string,mail:string):Observable<Clients>
    {
        return this.http.post<Clients>(SUPABASE_URL_CLIENT,{
            fullName : fullname,
            email : mail
        },
        {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });

    }


    createinvoice(idClient:number,amount:number,status:string):Observable<Invoices>
    {
        return this.http.post<Invoices>(SUPABASE_URL_INVOICES,{
            idClient : idClient,
            amount : amount,
            status : status
        },
        {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }


}
