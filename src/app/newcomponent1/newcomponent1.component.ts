import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomponent1',
  template:
    '<button (click)="onclick()" >greet</button>{{greet}}<h2 class="textsucces">hello{{name}}</h2><h2><input [disabled]=isdisable type="text" value="ram"></h2> <h2>{{url}}</h2><h2>{{greetuser()}}</h2> <h2>{{name.length}}</h2>',
  styles: ['.textsucces{color:red; }']

})
export class Newcomponent1Component implements OnInit {
  public name = "abhishek"
  public url = window.location.href;
  public isdisable = false;
  public greet ="";
  public suc = "textsucces";
  constructor() { }

  ngOnInit() {
  }
    onclick()
    {
      console.log("welcome");
      this.greet='welcome';
    }
  
  greetuser() {
    return "hello name" + this.name;
  }
}
