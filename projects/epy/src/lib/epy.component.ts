import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ui-epy",
  template: `
    <button [disabled]="disabled">{{ text }}</button>
  `,
  styles: []
})
export class EpyComponent implements OnInit {
  @Input() text: string;
  @Input() disabled: boolean;
  constructor() {}

  ngOnInit() {}
}
