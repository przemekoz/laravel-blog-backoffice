import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class WrapperFilterComponent extends Component {

  @action
  submit() {
    this.args.onSubmit();
  }
}
