import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ElementsController extends Controller {

  @service lang;

  filterType = {
    title: 'text',
    description: 'text'
  }

  sortOptions = [
    {
      label: ` - ${this.lang.get('Choose sort option')} - `,
      value: ''
    },
    {
      label: this.lang.get('Title: from A to Z'),
      value: 'title'
    },
    {
      label: this.lang.get('Title: from Z to A'),
      value: '-title'
    },
    {
      label: this.lang.get('Created date: from oldest'),
      value: 'created_at'
    },
    {
      label: this.lang.get('Created date: from newest'),
      value: '-created_at'
    },
    {
      label: this.lang.get('Updated date: from oldest'),
      value: 'updated_at'
    },
    {
      label: this.lang.get('Updated date: from newest'),
      value: '-updated_at'
    }
  ];
}
