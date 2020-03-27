import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ElementsRoute extends Route {

  @service http;

  async model() {

    console.log(this.store)

    // return a Promise
    // return this.http.get('/api/v1/elements.json');

    return this.store.query('element', {}).then( results => {
      return {
        data: results,
        meta: results.meta
      };
    });
  }
}
