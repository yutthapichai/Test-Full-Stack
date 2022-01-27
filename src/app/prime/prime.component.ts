import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.scss']
})
export class PrimeComponent implements OnInit {

  amount = 0
  selected = 'isPrime'
  col3 = 'false';

  constructor() { }

  ngOnInit(): void {
  }

  number(event: any) {


    this.amount = event ? event.target.value : this.amount;

    console.log(this.amount, 'amount')

    if (+this.amount < 1) {
      this.amount = 1
    }

    this.amount = Math.round(this.amount);

    if (this.selected === 'isPrime') {
      this.col3 = this.IsPrime(this.amount).toString();
      console.log(this.col3, 'IsPrime')
    } else {
      this.col3 = this.IsFibanacci(this.amount).toString();
      console.log(this.col3, 'IsFibanacci')
    }
  }

  calculateWhether() {
    this.number(false)
  }


  IsPrime(num: number): boolean {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {

        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
    return false;
  }

  IsFibanacci(num: number) {
    if (this.isSquare(5 * (num * num) - 4) || this.isSquare(5 * (num * num) + 4)) {
      return true;
    } else {
      return false;
    }
  }

  isSquare(x: number) {
    const s = Math.sqrt(x);

    if (Number.isInteger(s)) {
      return ((s * s) === x);
    } else {
      return false
    }

  }
}
