import { storiesOf, moduleMetadata } from "@storybook/angular";
import { ButtonComponent } from "../../projects/epy/src/lib/components/button/button.component";
import { action } from "@storybook/addon-actions";

export const actions = {
  onButtonClick: action("onButtonClick")
};
storiesOf("Button", module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent]
    })
  )
  .add("red", () => {
    return {
      template: `<ui-button [text]="'Im a red class'" [type]="'red'" (onButtonClick)="onButtonClick($event)"></ui-button>`,
      props: {
        onButtonClick: actions.onButtonClick
      }
    };
  })
  .add("red-outline", () => ({
    component: ButtonComponent,
    props: {
      text: "I'm a red-outline class",
      type: "red-outline"
    }
  }))
  .add("green", () => ({
    component: ButtonComponent,
    props: {
      text: "I'm a green class",
      type: "green"
    }
  }))
  .add("green-outline", () => ({
    component: ButtonComponent,
    props: {
      text: "I'm a green-outline class",
      type: "green-outline"
    }
  }))
  .add("gray", () => ({
    component: ButtonComponent,
    props: {
      text: "I'm a gray class",
      type: "gray"
    }
  }))
  .add("gray-outline", () => ({
    component: ButtonComponent,
    props: {
      text: "I'm a gray-outline class",
      type: "gray-outline"
    }
  }));

// export default {
//   title: "Button"
// };

// export const text = () => ({
//   component: Button,
//   props: {
//     text: "Hello Button"
//   }
// });

// export const emoji = () => ({
//   component: Button,
//   props: {
//     text: "😀 😎 👍 💯"
//   }
// });

// emoji.story = {
//   parameters: { notes: "My notes on a button with emojis" }
// };

// export const withSomeEmojiAndAction = () => ({
//   component: Button,
//   props: {
//     text: "😀 😎 👍 💯",
//     onClick: action("This was clicked OMG")
//   }
// });

// withSomeEmojiAndAction.story = {
//   name: "with some emoji and action",
//   parameters: { notes: "My notes on a button with emojis" }
// };

// export const buttonWithLinkToAnotherStory = () => ({
//   component: Button,
//   props: {
//     text: "Go to Welcome Story",
//     onClick: linkTo("Welcome")
//   }
// });

// buttonWithLinkToAnotherStory.story = {
//   name: "button with link to another story"
// };
