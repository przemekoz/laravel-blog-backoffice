import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class ElementListComponent extends Component {
  @action
  handleDelete(id) {
    this.args.onDelete(id);
  }
}
