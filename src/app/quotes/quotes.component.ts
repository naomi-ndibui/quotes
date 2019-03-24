import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
      new Quote(1, 'Nelson Mandela', 'There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.', 'admin', new Date(1990, 5, 10)),
      new Quote(2, 'Mohandas Gandhi', 'Strength does not come from physical capacity. It comes from an indomitable will.', 'admin', new Date(1950, 3, 23)),
      new Quote(3, 'Rick Flores', 'We have to come for them before they come for us, it is that simple', 'admin', new Date(2012, 8, 17)),

    ]

  showDescription= false;

    addNewQuote(quote) {
      let quoteLength = this.quotes.length;
      quote.id = quoteLength + 1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }

      deleteQuote(isComplete, index) {
      if (isComplete) {
        let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)

        if (toDelete) { this.quotes.splice(index, 1) }
      }
    }

    toggleQuote() {
      this.showDescription = !this.showDescription;
    }



  ngOnInit() {
  }

  }
