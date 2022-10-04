import { Component, OnInit } from '@angular/core';
import {ErrorService} from "../../services/error.service";

@Component({
  selector: 'app-common-error',
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.scss']
})
export class CommonErrorComponent {

  constructor(public errorService: ErrorService) { }

}
