import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ElementEditFormComponent extends Component {
  @tracked
  listOfTags = [
    {
      id: 1,
      title: "first tag"
    },
    {
      id: 2,
      title: "second tag"
    },
    {
      id: 3,
      title: "third tag"
    },
  ];

  @action
  onPickTag(tag) {
    console.log('elementEditController - onPickTag', tag)
  }

  @action
  onAddTag(autocompleteValue) {
    const tag = this.store.createRecord('tag', {
      id: 123,
      title: autocompleteValue,
    }).then(response => {
      console.log(response)
      // connect to element

    });

    this.store.findRecord('tag', this.model.data.id).then(element => {
      // ...after the record has loaded
      element.tags = [ ...element.tags, { id: 123, type: "tag" } ];
    });

    console.log('elementEditController - onAddTag', autocompleteValue);

    tag.save();
  }

  @action
  onRemoveTag(tag) {
    console.log('elementEditController - onRemoveTag', tag)
  }
}
