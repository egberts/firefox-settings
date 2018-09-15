
// `true` will break some sites including Google Earth Street
// View on Google Maps - WenGL appears to be dependant upon
// JS being enabled (which should be disabled globally by
// default) so if you trust a site enough to enable JS,
// you may as well enable WebGL as well since the security
// risks with WebGL appear to be far less of a problem than JS
user_pref("webgl.disabled", false);

// 'true' breaks Google Earth Street View on Google Maps
user_pref("webgl.disable-extensions", false);

// 'true' breaks Google Earth Street View on Google Maps
user_pref("webgl.min_capability_mode", false);

