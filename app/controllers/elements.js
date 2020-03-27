import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class ElementsController extends Controller {

  @action
  remove(elementId) {
    console.log(elementId)
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const post = this.store.peekRecord('element', elementId);
      post.destroyRecord(); // => DELETE to /posts/2
    }

  }
}
