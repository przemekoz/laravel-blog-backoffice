import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class WrapperEditComponent extends Component {

  @service store;

  @action
  async submit() {

    const mode = this.args.mode;
    const modelName = this.args.modelName;

    console.log( this.args.model.id, this.args.model.title, modelName)

    if (mode === 'edit') {
      this.store.findRecord(modelName, this.args.model.id).then(element => {
        element.title = this.args.model.title;
        element.save(); // => PATCH to '/posts/1'
      });

    }

    if (mode === 'create') {
      const post = this.store.createRecord(modelName, this.model);
      return post.save(); // -> request
    }

  }
}
