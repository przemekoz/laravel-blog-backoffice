import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class WrapperEditComponent extends Component {

  @action
  async submit() {

    console.log(this.args.model)


    // const post = this.store.createRecord(this.args.modelName, this.model.data);

    // return post.save(); // -> request
    // edit

    // store.findRecord(this.args.modelName, 1).then(element => {
    //   element.title; // => "Rails is Omakase"

    //   element.title = 'A new element';

    //   element.save(); // => PATCH to '/posts/1'
    // });

  }
}
