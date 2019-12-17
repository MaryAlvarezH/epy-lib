import { NgModule } from "@angular/core";
import { EpyComponent } from "./epy.component";
import { ButtonComponent } from "./components/button/button.component";
import { InputComponent } from "./components/input/input.component";

@NgModule({
  declarations: [EpyComponent, InputComponent, ButtonComponent],
  imports: [],
  exports: [EpyComponent]
})
export class EpyModule {}
