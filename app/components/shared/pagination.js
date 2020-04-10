import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class SharedPaginationComponent extends Component {
  @action
  handleChangeSize(size) {
    this.args.onChangeSize(parseInt(size, 10));
  }
}
