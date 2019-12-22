import { Component, OnInit, Input } from '@angular/core';
import { question } from 'src/models/question';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input('question') question:question;
  constructor(public data:DataService) { }

  ngOnInit() {
  }
  removeQuestion(question)
  {
    this.data.removeQuestion(question);
  }

}
