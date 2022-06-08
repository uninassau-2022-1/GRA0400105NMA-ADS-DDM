import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Candidato: number;
  procuraCandidato: string;
  candidatos = [
    {
      'name': 'Marina Silva',
      'number': '38',
    },
   
  ];

  contador = 0;
  candidato = 0;

  constructor() { }
  ngOnInit() { }
  clearSearch() {
    this.procuraCandidato = '';
  }


  setNumeroCandidato(candNumber: number) {
    this.Candidato = candNumber;
  }

  CalcularVotos() {
    
    if( this.procuraCandidato === ''|| this.procuraCandidato === null|| this.procuraCandidato === undefined) alert('Por favor, digite o número do candidato para confirmar voto');
    
    else if(this.procuraCandidato !== '38' ) alert('Numero de candidato incorreto! verifique o numero e digite novamente');
  
    else alert('Votação feita!');

  
    
    if(this.procuraCandidato === '38') this.candidato++;
  
    this.contador =  this.candidato ;
    this.clearSearch();
  }
}



