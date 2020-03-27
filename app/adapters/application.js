import JSONAPIAdapter from '@ember-data/adapter/json-api';
// import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api/v1';

  // @service http;

  // @service session;
  // @tracked session.authToken;
  // get headers() {
  //   return {
  //     'API_KEY': this.session.authToken,
  //     'ANOTHER_HEADER': 'Some header value'
  //   };
  // }

  // findAll(store, type, snapshot) {
    // const request = await this.http.get('/api/v1/elements/elements.json');
    // return this.http.get('/api/v1/elements/elements.json');;
  // }

  // createRecord(store, type, snapshot) {

  //   return this.http.post(this.buildURL(type.modelName), {title: "kaka", description: "akak"});
  // }
}
