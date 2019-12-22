import { Injectable } from '@angular/core';

import { question } from 'src/models/question';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  questions:question[];
  constructor() 
  {
    /*
    this.questions= [
      {
        text:'waht is your name ?',
        answer: "my name is beshoy",
        hide: true
      },
      {
        text:'waht is your favourite color ?',
        answer: "my favourite color is red ",
        hide: true
      },
      {
        text:'waht is your favourite language ?',
        answer: "my favourite language is angular",
        hide: true
      },
    ];
*/
   
   }
   getdata()
   {
    if(localStorage.getItem('questions') === null)
    {
      this.questions =[];
    }
    else {
      this.questions =JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
   }

   addquestion(question:question)
   {
      this.questions.unshift(question);

      let questions;
      if(localStorage.getItem('questions') === null)
    {
      questions =[];
      questions.unshift(question);
      localStorage.setItem('question',JSON.stringify(questions));

    }
    else {
      questions =JSON.parse(localStorage.getItem('questions'));

      questions.unshift(question);
      localStorage.setItem('question',JSON.stringify(questions));    }
      
      

   }
   removeQuestion(question)
   {
     for(let i =0; i <this.questions.length;i++)
     {
       if (question == this.questions[i])
       {
         this.questions.splice(i,1);
       }
     }
   }
}
