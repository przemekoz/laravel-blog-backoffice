import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class TagsManagmentComponent extends Component {

  @tracked
  autocompleteValue = '';

  @action
  onPhraseUpdate(phrase) {
    console.log('.', phrase)
    this.autocompleteValue = phrase;
  }

}
