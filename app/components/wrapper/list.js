import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class WrapperListComponent extends Component {

  @service store;

  @tracked
  data = [];

  @tracked
  meta = {};

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
    this.meta = this.args.meta;
    this.data = this.args.data;
    this.modelName = this.args.modelName;
    this.filterComponentName = `${this.modelName}/filter`;
    this.listComponentName = `${this.modelName}/list`;
  }

  @action
  handleDelete(itemId) {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const post = this.store.peekRecord('element', itemId);
      post.destroyRecord();
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
      this.isMoreThanViewElements = results.length >= 20 && this.size > 10;
      this.data = results;
      this.meta = results.meta;
    });
  }
}
