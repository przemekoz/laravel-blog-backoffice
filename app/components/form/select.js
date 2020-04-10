import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class FormSelectComponent extends Component {
  @action
  handleChange(event) {
    this.args.onChange(event.target.value);
  }
}
