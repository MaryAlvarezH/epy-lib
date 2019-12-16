import { storiesOf } from "@storybook/angular";
import { EpyComponent } from "../../projects/epy/src/lib/epy.component";

storiesOf("Epy", module)
  .add("basic", () => ({
    component: EpyComponent,
    props: {
      text: "hello"
    }
  }))
  .add("disabled", () => ({
    component: EpyComponent,
    props: {
      text: "disabled",
      disabled: true
    }
  }));
