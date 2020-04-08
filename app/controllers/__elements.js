import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ElementsController extends Controller {

  @tracked
  page = 1;

  @tracked
  size = 10;

  @tracked
  filter = {};

  @tracked
  sort = undefined;

  // DIFFRENT
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
    }
  ];

  @action
  remove(elementId) {
    console.log(elementId)
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      // DIFFRENT
      const post = this.store.peekRecord('element', elementId);
      post.destroyRecord(); // => DELETE to /posts/2
    }
  }

  @action
  handleFilterChange() {
    this.page = 1;
    this.refreshData();
  }

  @action
  handleSortChange(sort) {
    this.sort = sort;
    this.refreshData();
  }

  @action
  handlePageChange(page) {
    this.page = page;
    this.refreshData();
  }

  @action
  handleSizeChange(size) {
    this.page = 1;
    this.size = size;
    this.refreshData();
  }

  async refreshData() {
    // DIFFRENT
    return this.store.query('element', {
      page: {
        number: this.page,
        size: this.size
      },
      sort: this.sort,
      filter: this.filter,
      filterType:  {
        title: 'text',
        description: 'text'
      }
    }).then( results => {
      return {
        data: results,
        meta: results.meta
      };
    });
  }
}
