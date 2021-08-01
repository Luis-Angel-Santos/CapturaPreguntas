import { Component, OnInit } from '@angular/core';
import { preguntasService } from '../auth/services/auth.service';
import { Calificacion } from '../models/calificacion.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  resultados:any = []; 

  constructor(public preS: preguntasService) { }

  ngOnInit(): void {
    this.preS.obtenerResultados().subscribe(preguntas => {
      this.resultados = preguntas
    });
    
  }

}
