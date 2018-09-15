

// Disable Pocket
user_pref("extensions.pocket.enabled", false);
/*
        TELEMETRY
*/

// Stop Firefox from sending addon metadata to Mozilla to recommend you addons
// More information: https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
// user_pref("extensions.getAddons.cache.enabled", false);

// Disable the "Get Add-ons" panel on about:addons (uses Google Analytics -- no way to disable just Google Analytics)
// user_pref("extensions.getAddons.showPane", false);
// user_pref("extensions.webservice.discoverURL", "");


// PREF: Decrease system information leakage to Mozilla blocklist update servers
// https://trac.torproject.org/projects/tor/ticket/16931
user_pref("extensions.blocklist.url", "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");
