import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-select-class',
  templateUrl: './select-class.component.html',
  styleUrls: ['./select-class.component.scss']
})
export class SelectClassComponent implements OnInit {
  model: any = 1;
  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
      this.radioGroupForm = this.formBuilder.group({
          model: 'middle'
      });
  }
}
