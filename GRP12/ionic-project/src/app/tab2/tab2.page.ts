import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  popoverCadidateOpen: number;
  searchCandidates: string;
  candidates = [
    {
      'name': 'Leandro Felíx',
      'number': '70',
    },
    {
      'name': 'Matheus Gonçalves',
      'number': '15',
    },
    {
      'name': 'Gabriel Menino',
      'number': '85',
    },

  ];


  count = 0;
  candidate1 = 0;
  candidate2 = 0;
  candidate3 = 0;
  blank = 0;

  constructor() { }
  ngOnInit() { }
  clearSearch() {
    this.searchCandidates = '';
  }

  inputBlank() {
    this.searchCandidates = '0';
    this.calculateVotes();
  }

  setCandidateNumber(candNumber: number) {
    this.popoverCadidateOpen = candNumber;
  }

  calculateVotes() {
    // eslint-disable-next-line max-len
    if( this.searchCandidates === ''|| this.searchCandidates === null|| this.searchCandidates === undefined) alert('Por favor, digite o número do candidato.');
    // eslint-disable-next-line max-len
    else if(this.searchCandidates !== '0' && this.searchCandidates !== '70' && this.searchCandidates !== '15' && this.searchCandidates !== '85') alert('Esse candidato não existe! Insira o número correto.');
    // eslint-disable-next-line curly
    else alert('Votação feita!');

    // TODO Switch case
    if(this.searchCandidates === '0') this.blank++;
    if(this.searchCandidates === '70') this.candidate1++;
    if(this.searchCandidates === '15') this.candidate2++;
    if(this.searchCandidates === '85') this.candidate3++;

    this.count =  this.candidate1 + this.candidate2 + this.candidate3 + this.blank;
    this.clearSearch();
  }
}
