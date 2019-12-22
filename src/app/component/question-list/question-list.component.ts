import { Component, OnInit } from '@angular/core';
import { question } from 'src/models/question';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:question[];
  constructor(public data:DataService) 
  {
    
   }

  ngOnInit() {
    this.questions =this.data.getdata();
    
  }
  addQuestion(question:question){
    this.data.addquestion(question);

  }

}
