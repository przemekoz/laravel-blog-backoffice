import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class InputAutocompleteComponent extends Component {

  @service store;
  // @service http;

  @tracked
  phrase = '';

  @tracked
  options = [];

  constructor() {
    super(...arguments);
  }

  async request() {
    // const searchParams = new URLSearchParams();
    // searchParams.set('phrase', this.phrase);
    // return a Promise
    // return this.http.get('/api/v1/tags.json/?' + searchParams.toString());

    const response = await this.store.query(this.args.getModel, {
      phrase: this.phrase
    });
    this.options = response;
    this.show();
  }

  @action
  keyUp(phrase, event) {

    console.log(event.key)
    this.args.onPhraseUpdate(phrase);

    if (event.key === 'ArrowDown') {
      // window.$(`.dropdown-menu`).focus();
      // window.$(`.dropdown-item-${this.args.cssId}`).blur();
      // this.focusIndex++;
      // console.log(this.focusIndex)
      // window.$(`#autocomplete-input-${this.args.cssId}-${this.focusIndex}`).focus();
    }
    else if (event.key === 'ArrowUp') {
      // this.focusIndex--;
    }
    else {
      const alpha = new RegExp('^([a-zA-Z0-9 _-]{1})$');
      if (phrase.length > 2 && (alpha.test(event.key) || event.key === "Backspace")) {
        this.request();
      } else {
        this.hide();
      }
    }
  }

  @action
  show() {
    window.$(`.autocomplete-dropdown-${ this.args.cssId }`).dropdown('show');
  }

  @action
  hide() {
    window.$(`.autocomplete-dropdown-${ this.args.cssId }`).dropdown('hide');
  }
}
