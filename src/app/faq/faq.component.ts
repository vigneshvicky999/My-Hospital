import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent {
  showAnswer1: boolean = false
  showAnswer2: boolean = false
  showAnswer3: boolean = false
  showAnswer4: boolean = false
  showAnswer5: boolean = false
  showAnswer6: boolean = false
  showAnswer7: boolean = false
  showAnswer8: boolean = false
  showAnswer9: boolean = false
  showAnswer10: boolean = false

  toggleAnswer(questionNumber: Number) {
    switch (questionNumber) {
      case 1:
        this.showAnswer1 = !this.showAnswer1
        break;
      case 2:
        this.showAnswer2 = !this.showAnswer2
        break;
      case 3:
        this.showAnswer3 = !this.showAnswer3
        break;
      case 4:
        this.showAnswer4 = !this.showAnswer4
        break;
      case 5:
        this.showAnswer5 = !this.showAnswer5
        break;
      case 6:
        this.showAnswer6 = !this.showAnswer6
        break;
      case 7:
        this.showAnswer7 = !this.showAnswer7
        break;
      case 8:
        this.showAnswer8 = !this.showAnswer8
        break;
      case 9:
        this.showAnswer9 = !this.showAnswer9
        break;
      case 10:
        this.showAnswer10 = !this.showAnswer10
    }

  }
}
