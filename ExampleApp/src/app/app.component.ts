import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExampleApp';
  fruit=["banana", "apple", "Pear", "strawberry"]

  addNew (){
  this.fruit.push("lemon")
  }

  delete(fruits){
   let index = this.fruit.indexOf(fruits)
   this.fruit.splice(index,1)
  }
  

}
