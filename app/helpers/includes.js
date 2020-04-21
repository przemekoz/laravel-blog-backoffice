import { helper } from '@ember/component/helper';

export default helper(function includes(params) {
  return params && params.length === 2 && params[1].split('|').includes(params[0]);
});
