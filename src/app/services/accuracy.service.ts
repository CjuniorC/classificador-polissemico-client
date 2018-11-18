import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AccuracyService {

  response = new BehaviorSubject<string>('');
  words = new BehaviorSubject<string>('');
  sentences = new BehaviorSubject<string>('');

  constructor(
    private http:HttpClient
  ) { }

  getaccuracy(){
    this.http.get('http://localhost:5000/metrics/accuracy')
    .subscribe(result => {
      this.response.next(result as string);
    })
  }

  getWords(){
    this.http.get('http://localhost:5000/metrics/words')
    .subscribe(result => {
      this.words.next(result as string);
    })
  }

  getSentence(){
    this.http.get('http://localhost:5000/metrics/sentences')
    .subscribe(result => {
      this.sentences.next(result as string);
    })
  }
}
