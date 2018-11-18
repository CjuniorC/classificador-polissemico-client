import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import * as chart from 'chart.js';
import { AccuracyService } from 'src/app/services/accuracy.service';

@Component({
  selector: 'app-metrics-view',
  templateUrl: './metrics-view.component.html',
  styleUrls: ['./metrics-view.component.scss']
})
export class MetricsViewComponent implements OnInit {

  @ViewChild('canvas1') el;
  @ViewChild('canvas2') el2;
  @ViewChild('canvas3') el3;

  accuracy = 0;
  words = 0;
  sentences = 0;

  constructor(
    private accuracyService: AccuracyService
  ) { }

  ngOnInit() {
    
    this.accuracyService.getaccuracy();
    this.accuracyService.getWords();
    this.accuracyService.getSentence();

    this.accuracy = parseFloat(this.accuracyService.response.getValue())*100;
    this.words = parseInt(this.accuracyService.words.getValue());
    this.sentences = parseInt(this.accuracyService.sentences.getValue());
    
    const ctx = this.el.nativeElement.getContext('2d');
    const ctx2 = this.el2.nativeElement.getContext('2d');
    const ctx3 = this.el3.nativeElement.getContext('2d');

    const months = ['Novembro', 'Dezembro'];
    
    chart.defaults.global.defaultFontColor = 'white';

    const newChart = new chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Novembro"],
        datasets: [{
          label: 'Novembro',
          data: [this.accuracy, 100],
          backgroundColor: [
            'rgba(10, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(10, 162, 235, 1)',
          ],
          borderWidth: 1,
        }]
      },

      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      
    });
    const newChart2 = new chart(ctx2, {
      type: 'bar',
      data: {
        labels: ["Novembro"],
        datasets: [{
          label: 'Novembro',
          data: [this.words, 100],
          backgroundColor: [
            'rgba(54, 100, 235, 0.2)',
          ],
          borderColor: [
            'rgba(54, 100, 235, 1)',
          ],
          borderWidth: 1,
        }]
      },

      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      
    });
    const newChart3 = new chart(ctx3, {
      type: 'bar',
      data: {
        labels: ["Novembro"],
        datasets: [{
          label: 'Novembro',
          data: [this.sentences, 100],
          backgroundColor: [
            'rgba(54, 162, 100, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 100, 1)',
          ],
          borderWidth: 1,
        }]
      },

      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      
    });
  }

}
