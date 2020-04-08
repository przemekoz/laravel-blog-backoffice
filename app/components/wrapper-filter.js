import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class WrapperFilterComponent extends Component {

  @action
  reset() {
    this.args.onReset();
  }

  @action
  submit() {
    this.args.onSubmit();
  }
}
