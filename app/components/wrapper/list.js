import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class WrapperListComponent extends Component {

  @service store;

  @tracked
  page = 1;

  @tracked
  size = 10;

  @tracked
  filter = {};

  @tracked
  sort = undefined;

  @tracked
  isMoreThanViewElements = false;

  sizeOptions = [
    {
      label: '10 items per page',
      value: 10,
    },
    {
      label: '20 items per page',
      value: 20,
    },
    {
      label: '50 items per page',
      value: 50,
    }
  ];

  modelName = '';

  filterComponentName = '';

  listComponentName = '';

  constructor() {
    super(...arguments);
    this.modelName = this.args.modelName;
    this.filterComponentName = `${this.modelName}/filter`;
    this.listComponentName = `${this.modelName}/list`;
  }

  @action
  handleDelete(itemId) {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      console.log('remove', itemId)
      const post = this.store.peekRecord('element', itemId);
      post.destroyRecord(); // => DELETE to /posts/2
    }
  }

  @action
  handleFilterChange(filter) {
    this.page = 1;
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
    this.page = 1;
    this.size = size;
    this.refreshData();
  }

  async refreshData() {
    return this.store.query(this.modelName, {
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
      this.isMoreThanViewElements = results.lenght >= 20 && this.size > 10;
    });
  }
}
