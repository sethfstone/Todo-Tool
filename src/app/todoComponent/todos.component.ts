import { Component, OnInit } from '@angular/core';
// Imported ToDo model 

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo: any;
  todoItems = [];

  constructor(){}

  ngOnInit(){
    document.addEventListener("keypress", function(e) {
      if(e.shiftKey && e.key === "Enter"){
        document.getElementById("removeCompleted").click();
      }
    });
  }

  addTodoItem (){
    let taskElem = document.getElementById("todo");
    console.log(taskElem);
    let task = (<HTMLInputElement>taskElem).value;
    console.log(task);
    this.todoItems.push({todo: task, completionStatus: false});

    task = (<HTMLInputElement>taskElem).value = '';
    console.log(this.todoItems);

  }


  removeCompleted(){
    var toDelete = [];
    for(let i = 0; i < this.todoItems.length; i++){
      if(this.todoItems[i].completionStatus == true){
        toDelete.push(i);
      }
    }

    for (var i = toDelete.length -1; i >= 0; i--){
      this.todoItems.splice(toDelete[i], 1);
    }
    


    console.log(toDelete);
  }

  updateCompletionStatus (todoClicked: string){
    for(let i = 0; i < this.todoItems.length; i++){
      if(this.todoItems[i].todo == todoClicked){
        if(this.todoItems[i].completionStatus == false) { this.todoItems[i].completionStatus = true; }
        else { this.todoItems[i].completionStatus = false; }
        console.log("match - changed value");
        console.log(this.todoItems);
      }
    }
  }


  test(){
    console.log('what');
    console.log(document.getElementById("todo"));
  }
 }
