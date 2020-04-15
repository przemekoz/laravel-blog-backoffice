import Route from '@ember/routing/route';

export default class ElementsRoute extends Route {

  async model() {
    return this.store.query('element', {}).then( results => {
      return {
        data: results,
        meta: results.meta
      };
    });
  }
}
