import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

//aqui se obtiene el listado de los clientes  en el backend
  private baseURL = "http://localhost:8080/api/v1/clientes";

  constructor(private httpClient : HttpClient) { }

 //Este metodo para obtener los clientes del backend
obtenerListaDeClientes() :Observable<Cliente[]>{
  return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
}
// Metodo registro cliente
registrarCliente(cliente:Cliente):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,cliente);
}

//Este metodo se usa para actualizar los datos del cliente
  actualizarCliente(id:number,cliente:Cliente):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cliente);
  }

// Metodo para eliminar registro de un cliente
  obtenerClientePorID(id:number):Observable<Cliente>{
      return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }
// Metodo para eliminar registro de un cliente
    eliminarCliente(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
  }
