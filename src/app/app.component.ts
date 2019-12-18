import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model=new Model ();

  getName() {
   return this.model.user;
 }
 getTodoItens() {
   return this.model.itens.filter(item => !item.done);
 }
 getTodoItensRealizados() {
   return this.model.itens.filter(item => item.done);
 }
 addItem(newItem, prioridade, dataRealizacao) {
   let j=false;
   for(let i = 0;i<this.model.itens.length;i++){
     if(newItem==this.model.itens[i].action){
       j=true;
     }
   }
   if (newItem != "") {
     if(dataRealizacao!= ""){
      if(!j){
        this.model.itens.push(new TodoItem(newItem, false, prioridade, dataRealizacao));
      }
     }
    }
 }
 removerItem(z){
   let x;
   for(let i = 0;i<this.model.itens.length;i++){
    if(z==this.model.itens[i].action){
      x=i;
    }
    this.model.itens.splice(x,1)
 }

 }
}