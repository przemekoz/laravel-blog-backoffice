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
      value: 'created-at'
    },
    {
      label: 'created date descending',
      value: '-created-at'
    }
  ];

  @action
  remove(elementId) {
    console.log(elementId)
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const post = this.store.peekRecord('element', elementId);
      post.destroyRecord(); // => DELETE to /posts/2
    }
  }

  @action
  handleFilterChange(filter) {
    this.filter = filter;
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
    this.size = size;
    this.refreshData();
  }

  async refreshData() {
    console.log('ElementsController : refresh data',  )

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
