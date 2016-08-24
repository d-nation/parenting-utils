import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button/button';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list/grid-list';


@Component({
  selector: 'app-turn',
  templateUrl: 'turn.component.html',
  styleUrls: ['turn.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, NgClass, NgFor]
})
export class TurnComponent implements OnInit {
  public choices: Array<any>;
  public selected: string;

  constructor() {}

  ngOnInit() {
    this.choices = [
      {name: 'Mallory', selected: false},
      {name: 'Ellsy', selected: false}
    ];

    let lastSelected = localStorage.getItem('bedtime');
    let selected = this.choices.filter(choice => {
      return choice.name === lastSelected;
    });

    if(selected.length) {
      selected[0].selected = true;
    }
  }

  public toggleChoice(index) {
    this.choices[index].selected = !this.choices[index].selected;
    this.deselectOthers(index);

    if(this.choices[index].selected) {
      localStorage.setItem('bedtime', this.choices[index].name);
    } else {
      localStorage.removeItem('bedtime');
    }
  }

  private deselectOthers(index) {
    
    for(let i=0; i<this.choices.length; i++) {
      
      if (i !== index) {
        this.choices[i].selected = false;
      }
    }
  }

}
