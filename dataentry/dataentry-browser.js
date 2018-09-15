
// Disable URL bar making speculative connections
user_pref("browser.urlbar.speculativeConnect.enabled", false);

/*
           POTENTIAL BREAKAGE
*/

// Restricts cookies, cache, etc. to the domain level. May break third party logins
// More information: https://www.bleepingcomputer.com/news/software/another-tor-browser-feature-makes-it-into-firefox-first-party-isolation/
// user_pref("privacy.firstparty.isolate", true);

// Stop websites from reading or modifying clipboard contents. May break some websites with text editors
// user_pref("dom.event.clipboardevents.enabled", false);

// Disable WebRTC -- not necessary if you toggle "Prevent WebRTC from leaking local IP addresses" to on in uBlock Origin's settings. May break some web apps
// More information: https://www.privacytools.io/#webrtc

// Disable WebGL. May break some web games
// More information: https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern
// user_pref("webgl.disabled" = true);


/*
        TELEMETRY
*/

// Stop Firefox from sending addon metadata to Mozilla to recommend you addons
// More information: https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
// user_pref("extensions.getAddons.cache.enabled", false);

// Disable the "Get Add-ons" panel on about:addons (uses Google Analytics -- no way to disable just Google Analytics)
// user_pref("extensions.getAddons.showPane", false);
// user_pref("extensions.webservice.discoverURL", "");

// Disable Mozilla Normandy and Shield Studies
// More information: https://github.com/mozilla/normandy
// user_pref("app.normandy.api_url", "");
// user_pref("app.normandy.enabled", false);
// user_pref("app.shield.optoutstudies.enabled", false);

// Disable crash reports. Crash reports may contain sensitive data, but Firefox ALWAYS ASKS if you want to send a crash report.
// user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
// user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
// user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
// user_pref("browser.tabs.crashReporting.sendReport", false);

