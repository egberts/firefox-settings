

// PREF: Disallow NTLMv1
// https://bugzilla.mozilla.org/show_bug.cgi?id=828183
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1",   false);

// it is still allowed through HTTPS. uncomment the following to disable it
// completely.
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1-https", false);

// PREF: Enable CSP 1.1 script-nonce directive support
// https://bugzilla.mozilla.org/show_bug.cgi?id=855326
user_pref("security.csp.experimentalEnabled",            true);

// PREF: Enable Content Security Policy (CSP)
//
// https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
user_pref("security.csp.enable",             true);

// PREF: Enable Subresource Integrity
//
// https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
// https://wiki.mozilla.org/Security/Subresource_Integrity
user_pref("security.sri.enable",             true);

// PREF: DNT HTTP header (disabled)
// https://www.mozilla.org/en-US/firefox/dnt/
// https://en.wikipedia.org/wiki/Do_not_track_header
// https://dnt-dashboard.mozilla.org
// https://github.com/pyllyukko/user.js/issues/11
// NOTICE: Do No Track must be enabled manually
user_pref("privacy.donottrackheader.enabled",      true);

// PREF: Send a referer header with the target URI as the source
// https://bugzilla.mozilla.org/show_bug.cgi?id=822869
// https://github.com/pyllyukko/user.js/issues/227
// NOTICE: Spoofing referers breaks functionality on websites relying on
// authentic referer headers
// NOTICE: Spoofing referers breaks visualisation of 3rd-party sites on the
// Lightbeam addon
// NOTICE: Spoofing referers disables CSRF protection on some login pages not
// implementing origin-header/cookie+token based CSRF protection
// TODO: https://github.com/pyllyukko/user.js/issues/94, commented-out
// XOriginPolicy/XOriginTrimmingPolicy = 2 prefs
user_pref("network.http.referer.spoofSource",            true);

// PREF: Don't send referer headers when following links across different
// domains (disabled)
// https://github.com/pyllyukko/user.js/issues/227
user_pref("network.http.referer.XOriginPolicy",       2);

// PREF: Accept Only 1st Party Cookies
// http://kb.mozillazine.org/Network.cookie.cookieBehavior#1
// NOTICE: Blocking 3rd-party cookies breaks a number of payment gateways
// CIS 2.5.1
user_pref("network.cookie.cookieBehavior",           1);
//
// PREF: Enable first-party isolation
// https://bugzilla.mozilla.org/show_bug.cgi?id=1299996
// https://bugzilla.mozilla.org/show_bug.cgi?id=1260931
// https://wiki.mozilla.org/Security/FirstPartyIsolation
user_pref("privacy.firstparty.isolate",              true);
//
// PREF: Make sure that third-party cookies (if enabled) never persist beyond
// the session.
//
// https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/
// http://kb.mozillazine.org/Network.cookie.thirdparty.sessionOnly
//
// https://developer.mozilla.org/en-US/docs/Cookies_Preferences_in_Mozilla#network.cookie.thirdparty.sessionOnly
user_pref("network.cookie.thirdparty.sessionOnly",       true);
//
// PREF: Spoof User-agent (disabled)
//user_pref("general.useragent.override",                "Mozilla/5.0 (Windows NT 6.1; rv:45.0) Gecko/20100101 Firefox/45.0");
//user_pref("general.appname.override",              "Netscape");
//user_pref("general.appversion.override",           "5.0 (Windows)");
//user_pref("general.platform.override",             "Win32");
//user_pref("general.oscpu.override",                "Windows NT 6.1");
//


// Send referer header: 0=never 1=links 2=links+images
user_pref("network.http.sendRefererHeader", 1)
