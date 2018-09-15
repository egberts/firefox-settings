

// PREF: Don't trim HTTP off of URLs in the address bar.
// https://bugzilla.mozilla.org/show_bug.cgi?id=665580
user_pref("browser.urlbar.trimURLs",             false);
//
// PREF: Don't try to guess domain names when entering an invalid domain name
// in URL bar
// http://www-archive.mozilla.org/docs/end-user/domain-guessing.html
user_pref("browser.fixup.alternate.enabled",         false);
//
// PREF: When browser.fixup.alternate.enabled is enabled, strip password from
// 'user:password@...' URLs
// https://github.com/pyllyukko/user.js/issues/290#issuecomment-303560851
user_pref("browser.fixup.hide_user_pass", true);
