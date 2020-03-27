import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class WrapperListComponent extends Component {

  pageOptions = [
    {
      label: '10',
      value: 10,
    },
    {
      label: '20',
      value: 20,
    },
    {
      label: '50',
      value: 50,
    },
  ]

  constructor() {
    super(...arguments);
  }

  @action
  handleSizeChange(event) {
    console.log(event.target.value)
  }
}
