import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class WrapperEditComponent extends Component {

  @service store;
  @service router;

  @action
  async submit() {

    const mode = this.args.mode;
    const modelName = this.args.modelName;
    const backRoute = this.args.backRoute;

    if (mode === 'edit') {
      this.store.findRecord(modelName, this.args.model.id).then(entity => {
        // requst PATCH
        return entity.save().then(() => {
          this.router.transitionTo(backRoute);
        });
      });
    }

    if (mode === 'create') {
      const post = this.store.createRecord(modelName, this.args.model);
      // requst POST
      return post.save().then(() => {
        this.router.transitionTo(backRoute);
      });
    }

  }
}
