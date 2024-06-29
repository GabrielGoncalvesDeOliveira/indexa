import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';



@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "email@gmail.com"},
    {"id": 2, "nome": "Ágata", "telefone": "38 128451235", "email": "email@gmail.com"},
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583", "email": "email@gmail.com"},
    {"id": 4, "nome": "Beatriz", "telefone": "25 854986459", "email": "email@gmail.com"},
    {"id": 5, "nome": "Carlos", "telefone": "94 543197849", "email": "email@gmail.com"},
    {"id": 6, "nome": "Cláudia", "telefone": "31 176437098", "email": "email@gmail.com"},
    {"id": 7, "nome": "Daniel", "telefone": "56 613692441", "email": "email@gmail.com"},
    {"id": 8, "nome": "Diana", "telefone": "16 670764734", "email": "email@gmail.com"},
    {"id": 9, "nome": "Eduardo", "telefone": "71 962784210", "email": "email@gmail.com"},
    {"id": 10, "nome": "Gabriel", "telefone": "23 876578152", "email": "email@gmail.com"},
    {"id": 11, "nome": "Yasmin", "telefone": "69 433926906", "email": "email@gmail.com"},
    {"id": 12, "nome": "Zacarias", "telefone": "23 296915638", "email": "email@gmail.com"},
  ];

  constructor() { 
    // obter os dados do local storage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    this.contatos = contatosLocalStorage || null;

    //salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contato) {
    this.contatos.push(contato);

    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
