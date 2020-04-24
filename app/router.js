import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('customer', function() {
    this.route('create');
    this.route('list');
    this.route('edit', {path: 'edit/:id'});
    this.route('details', {path: 'details/:id'});
  });

  this.route('element', function() {
    this.route('create');
    this.route('list');
    this.route('edit', {path: 'edit/:id'});
    this.route('details', {path: 'details/:id'});
  });
  this.route('login');
  this.route('logout');
});
