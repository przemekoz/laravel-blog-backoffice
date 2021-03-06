import Model, { attr, hasMany } from '@ember-data/model';

export default class TagModel extends Model {
  @attr('string') title;
  @hasMany('element') elements;
}
