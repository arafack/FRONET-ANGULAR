import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-detalles',
  templateUrl: './cliente-detalles.component.html',
  styleUrls: ['./cliente-detalles.component.css']
})
export class ClienteDetallesComponent implements OnInit {

  id:number;
  cliente:Cliente;
  constructor(private route:ActivatedRoute,private clienteServicio:ClienteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cliente = new Cliente();
    this.clienteServicio.obtenerClientePorID(this.id).subscribe(dato => {
      this.cliente = dato;
      Swal.fire('Detalles del empleado ')
    });
  }
}
