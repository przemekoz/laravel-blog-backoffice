import Route from '@ember/routing/route';

export default class ElementCreateRoute extends Route {
  model() {
    return {
      data: {
        title: "",
        description: ""
      }
    }
  }
}
