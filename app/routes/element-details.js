import Route from '@ember/routing/route';

export default class ElementDetailsRoute extends Route {
  async model(param) {
    return this.store.find('element', param.id).then( results => {
      return {
        data: results,
      };
    });
  }
}
