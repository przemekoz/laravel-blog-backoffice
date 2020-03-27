import Model, { attr, hasMany } from '@ember-data/model';

export default class ElementModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('boolean') active;
  @attr('string') image;
  @hasMany('tag') tags;
}
