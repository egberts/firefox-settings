


// PREF: Set Accept-Language HTTP header to en-US regardless of Firefox
// localization
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
user_pref("intl.accept_languages",               "en-US, en");


// PREF: Don't use OS values to determine locale, force using Firefox locale
// setting
// http://kb.mozillazine.org/Intl.locale.matchOS
user_pref("intl.locale.matchOS",             false);
