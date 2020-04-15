import Controller from '@ember/controller';

export default class ElementsController extends Controller {

  filterType = {
    title: 'text',
    description: 'text'
  }

  sortOptions = [
    {
      label: ' - choose sort option - ',
      value: ''
    },
    {
      label: 'title ascending',
      value: 'title'
    },
    {
      label: 'title descending',
      value: '-title'
    },
    {
      label: 'created date ascending',
      value: 'created_at'
    },
    {
      label: 'created date descending',
      value: '-created_at'
    },
    {
      label: 'updated date ascending',
      value: 'updated_at'
    },
    {
      label: 'updated date descending',
      value: '-updated_at'
    }
  ];
}
