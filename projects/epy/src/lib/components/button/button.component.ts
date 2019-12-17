import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ui-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick(e) {
    console.log("click from epy-button component");
    this.onButtonClick.emit(e);
  }
}
