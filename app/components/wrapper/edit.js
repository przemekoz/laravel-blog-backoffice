import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class WrapperEditComponent extends Component {

  @action
  async submit() {

    const mode = this.args.mode;

    console.log( mode, this.args.model.title)

    if (mode === 'edit') {
      // store.findRecord(this.args.modelName, 1).then(element => {
      //   element.title; // => "Rails is Omakase"
      //   element.title = 'A new element';
      //   element.save(); // => PATCH to '/posts/1'
      // });

    }

    if (mode === 'create') {
      // const post = this.store.createRecord(this.args.modelName, this.model.data);
      // return post.save(); // -> request
    }

  }
}
