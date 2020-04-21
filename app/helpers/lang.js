import { helper } from '@ember/component/helper';
import { getLangPhrase } from '../services/lang';

export default helper(function lang(params/*, hash*/) {
  return getLangPhrase(params[ 0 ]);
});
