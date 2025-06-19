import {Component, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {AutoComplete, AutoCompleteModule} from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-main-bus',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, FormsModule,
    MatFormFieldModule,
    MatInputModule, AutoCompleteModule,],
  templateUrl: './main-bus.component.html',
  styleUrls: ['./main-bus.component.css']
})
export class MainBusComponent  {
  items: any[] | undefined;

  value: any;

  search(event: AutoCompleteCompleteEvent) {
    let _items = [...Array(10).keys()];

    this.items = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
  }

}
