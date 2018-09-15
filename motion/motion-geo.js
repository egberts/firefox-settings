


// PREF: Disable Location-Aware Browsing (geolocation)
// https://www.mozilla.org/en-US/firefox/geolocation/
user_pref("geo.enabled", false);

// PREF: When geolocation is enabled, use Mozilla geolocation service instead of
// Google
// https://bugzilla.mozilla.org/show_bug.cgi?id=689252
user_pref("geo.wifi.uri", "");

// "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
//
// PREF: When geolocation is enabled, don't log geolocation requests to the
// console
user_pref("geo.wifi.logging.enabled", false);

// Disable geolocation
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoip.url", "");
