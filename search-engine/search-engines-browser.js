

// sanitize Yahoo
user_pref("browser.search.param.yahoo-fr", "");

// ^
user_pref("browser.search.param.yahoo-fr-ja", "");


// PREF: Disable GeoIP lookup on your address to set default search engine
// region
// https://trac.torproject.org/projects/tor/ticket/16254
//
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine
user_pref("browser.search.countryCode",              "US");
user_pref("browser.search.region",               "US");
user_pref("browser.search.geoip.url", "");


// // PREF: Don't use Mozilla-provided location-specific search engines
user_pref("browser.search.geoSpecificDefaults", false);

// PREF: Disable search suggestions in the search bar
// http://kb.mozillazine.org/Browser.search.suggest.enabled
user_pref("browser.search.suggest.enabled",          false);
//
// PREF: Disable "Show search suggestions in location bar results"
// user_pref("browser.urlbar.suggest.searches",         false);
// PREF: When using the location bar, don't suggest URLs from browsing
// history
user_pref("browser.urlbar.suggest.history",          false);
//
// PREF: Disable SSDP
// https://bugzilla.mozilla.org/show_bug.cgi?id=1111967
user_pref("browser.casting.enabled", false);
