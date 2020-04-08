import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class InputSelectComponent extends Component {

  @action
  handleChange(event) {
    this.args.onChange(event.target.value);
  }

}
