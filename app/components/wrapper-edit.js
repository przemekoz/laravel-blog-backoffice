import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class WrapperEditComponent extends Component {
  @action
  async submit() {
    if(this.args.submitAction) {
      const response = await this.args.submitAction();
      return response;
    }
  }
}
