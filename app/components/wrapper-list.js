import Component from '@glimmer/component';

export default class WrapperListComponent extends Component {

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
