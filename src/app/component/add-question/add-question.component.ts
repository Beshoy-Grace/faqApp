import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { question } from 'src/models/question';



@Component({
  selector: 'add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  text:string;
  answer:string;
  @Output() questionAdd = new EventEmitter<question>();
  constructor() { }

  ngOnInit() {
  }

  AddQuestion()
  {
    this.questionAdd.emit({text:this.text, answer:this.answer,hide:true});
    this.answer =' ';
    this.text = ' ';
  }

}
