import {translations as element} from '../components/element/lang/lang-pl';

const translations = new Map();
translations.set('edit',        'Edytuj');
translations.set('save',        'Zapisz');
translations.set('clear',       'Wyczyść');
translations.set('search',      'Szukaj');
translations.set('remove',      'Usuń');
translations.set('back',        'Wstecz');
translations.set('actions',     'Akcje');
translations.set('active',      'Aktywny');
translations.set('inactive',    'Nieaktywny');
translations.set('yes',         'Tak');
translations.set('no',          'Nie');
translations.set('add',         'Dodaj');
translations.set('elements',    'Elementy');
translations.set('title',       'Nazwa');
translations.set('page',        'Strona');
translations.set('of',          'z');
translations.set('per-page',    'na stronie');
translations.set('all-items',   'Wszystkich');
translations.set('description', 'Opis');
translations.set('tags',        'Tagi');
translations.set('profile',     'Profil');
translations.set('logout',      'Wyloguj się');
translations.set('back-to-list','Wróć do listy');

translations.set('title:-from-a-to-z',  'Nazwa: od A do Z');
translations.set('title:-from-z-to-a',  'Nazwa: od Z do A');
translations.set('choose-sort-option',  'Wybierz opcję sortowania');
translations.set('created-date:-from-oldest',  'Utworzenie: od najstarszych');
translations.set('created-date:-from-newest',  'Utworzenie: od najnowszych');
translations.set('updated-date:-from-oldest',  'Modyfikacja: od najstarszych');
translations.set('updated-date:-from-newest',  'Modyfikacja: od najnowszych');

translations.set('are-you-sure-you-want-to-delete?', 'Czy na pewno chcesz usunąć?');

export const translationsPL = new Map([
  ...translations,
  ...element
])
