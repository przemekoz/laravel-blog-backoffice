import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';
import { getLang, setLang } from '../services/lang';

export default class LangChooserComponent extends Component {

  @tracked
  lang = '';

  constructor() {
    super(...arguments);
    this.lang = getLang();
  }

  @action
  handleChangeLang (lang) {
    this.lang = lang;
    setLang(lang);
    window.location.reload();
  }

}
