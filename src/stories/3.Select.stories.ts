import { SelectComponent } from "../../projects/epy/src/lib/components/select/select.component";
import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";

export const actions = {
  onSelectChange: action("onSelectChange")
};
storiesOf("Select", module)
  .addDecorator(
    moduleMetadata({
      declarations: [SelectComponent]
    })
  )
  .add("default", () => {
    return {
      template: `<epy-select [items]="[1,2,3]" [selectedValue]="2" [field]="'Adwords Account'" [legend]="'(in which your campaign will run)'"></epy-select>`,
      props: {
        onSelectChange: actions.onSelectChange
      }
    };
  });
