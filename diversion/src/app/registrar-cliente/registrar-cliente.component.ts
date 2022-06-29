import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  cliente : Cliente = new Cliente();
  constructor(private clienteServicio:ClienteService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarCliente(){
    this.clienteServicio.registrarCliente(this.cliente).subscribe(dato=> {
      console.log(dato);
      this.irAlaListaDeCliente();
    },error => console.log(error));
  }

  irAlaListaDeCliente(){
    this.router.navigate(['/clientes']);
  }

  onSubmit(){
    this.guardarCliente();
  }

}
