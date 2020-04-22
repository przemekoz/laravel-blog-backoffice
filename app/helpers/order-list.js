import { helper } from '@ember/component/helper';

export default helper(function orderList(params/*, hash*/) {
  return parseInt(params, 10) + 1;
});
