import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default class ElementsRoute extends Route {

  // @service http;

  async model() {

    return this.store.query('element', {}).then( results => {
      return {
        data: results,
        meta: results.meta
      };
    });
  }
}
