import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('elements');
  this.route('element-details', {path: '/element-details/:id'});
  this.route('element-edit', {path: '/element-edit/:id'});
});
