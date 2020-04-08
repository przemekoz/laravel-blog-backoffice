import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class WrapperFilterComponent extends Component {
  @tracked
  filter = {};

  @action
  handleChange() {
   this.args.onChange(this.filter);
  }
}
