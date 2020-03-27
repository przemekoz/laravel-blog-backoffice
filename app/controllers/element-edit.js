import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ElementEditController extends Controller {

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
  ]


  @action
  async submit() {


    // console.log('11111', this.model.data)

    // create

    const post = this.store.createRecord('element', this.model.data);

    return post.save(); // -> request
    // edit

    // store.findRecord('element', 1).then(element => {
    //   element.title; // => "Rails is Omakase"

    //   element.title = 'A new element';

    //   element.save(); // => PATCH to '/posts/1'
    // });

  }

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

    this.store.findRecord('person', this.model.data.id).then(element => {
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
