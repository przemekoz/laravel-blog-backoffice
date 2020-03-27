import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ElementDetailsRoute extends Route {

  @service http;

  async model(param) {
    // @TODO readt param.id to real request
    // return a Promise
    // return this.http.get('/api/v1/element-details.json');

    return this.store.find('element', param.id);
  }
}
