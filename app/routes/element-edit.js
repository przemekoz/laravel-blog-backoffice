import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default class ElementEditRoute extends Route {

  @service http;

  async model(param) {
    // return a Promise
    // return this.http.get('/api/v1/element-details.json');
    return this.store.find('element', param.id).then(results => {
      return {
        data: results,
      };
    });
  }

}
