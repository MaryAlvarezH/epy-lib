import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "epy-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
  @Input() field: string;
  @Input() legend: string;
  @Input() placeholder: string;
  @Input() selectedValue: any;
  @Input() type: string;
  @Input() items: Array<any>;
  @Output() onSelectChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChange() {
    console.log("epy-select", this.selectedValue);
    this.onSelectChange.emit(this.selectedValue);
  }
}
