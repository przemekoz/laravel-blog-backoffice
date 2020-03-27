import { helper } from '@ember/component/helper';

export default helper(function equal(values) {
  return values && values.length === 2 && values[0] === values[1];
});
