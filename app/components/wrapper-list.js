import Component from '@glimmer/component';

export default class WrapperListComponent extends Component {

  // temp
  paramValue = '';
  anotherParamValue = '';

  modelName = '';

  filterComponentName = '';

  listComponentName = '';

  constructor() {
    super(...arguments);
    this.modelName = this.args.modelName;
    this.filterComponentName = `${this.modelName}/filter`;
    this.listComponentName = `${this.modelName}/list`;
  }

  sizeOptions = [
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
    }
  ];
}
