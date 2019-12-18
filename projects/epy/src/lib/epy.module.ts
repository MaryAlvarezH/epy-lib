import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EpyComponent } from "./epy.component";
import { ButtonComponent } from "./components/button/button.component";
import { InputComponent } from "./components/input/input.component";
import { SelectComponent } from "./components/select/select.component";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";

@NgModule({
  declarations: [
    EpyComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent
  ],
  imports: [FormsModule, BrowserDynamicTestingModule],
  exports: [EpyComponent, InputComponent, ButtonComponent, SelectComponent]
})
export class EpyModule {}
