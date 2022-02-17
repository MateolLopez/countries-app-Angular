import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{

  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value =>{
        this.onDebounce.emit(value)
      })
  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  term: string = '';

  search(){
    this.onEnter.emit(this.term);
  }

  keyPressed(){

    this.debouncer.next(this.term);

  }

}
