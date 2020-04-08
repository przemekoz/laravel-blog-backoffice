import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ElementFilterComponent extends Component {
  @tracked
  filter = {};

  @action
  handleReset() {
    this.filter = {};
  }

  @action
  handleSubmit() {
    this.args.onSubmit( this.filter );
  }

}
