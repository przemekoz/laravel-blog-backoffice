import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class SharedPaginationNavComponent extends Component {
  get isPrevDisabled() {
    return this.args.currentPage === 1;
  }

  get isNextDisabled() {
    return this.args.totalPages < 2 || this.args.currentPage === this.args.totalPages - 1;
  }

  @action
  handleChangePage(pageOffset) {
    switch (pageOffset) {
      case 'first':
        this.args.onChangePage(1);
        break;
      case 'prev':
        this.args.onChangePage(this.args.currentPage - 1);
        break;
      case 'next':
        this.args.onChangePage(this.args.currentPage + 1);
        break;
      case 'last':
        this.args.onChangePage(this.args.totalPages - 1);
        break;
      default:
        // no action
        break;
    }
  }
}
