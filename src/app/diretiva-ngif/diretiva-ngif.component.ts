import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["angular"];

  mostraCursos: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos(){
    this.mostraCursos = !this.mostraCursos;
}

}
