


// PREF: Disable Displaying Javascript in History URLs
// http://kb.mozillazine.org/Browser.urlbar.filter.javascript
// CIS 2.3.6
user_pref("browser.urlbar.filter.javascript", true);

// PREF: Enable blocking reported web forgeries
// https://wiki.mozilla.org/Security/Safe_Browsing
// http://kb.mozillazine.org/Safe_browsing
//
// https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work
//
// http://forums.mozillazine.org/viewtopic.php?f=39&t=2711237&p=12896849#p12896849
// CIS 2.3.4
user_pref("browser.safebrowsing.enabled",            true); // Firefox < 50
user_pref("browser.safebrowsing.phishing.enabled", true); // firefox >= 50

// PREF: Enable blocking reported attack sites
// http://kb.mozillazine.org/Browser.safebrowsing.malware.enabled
// CIS 2.3.5
user_pref("browser.safebrowsing.malware.enabled", true);

// PREF: Disable Pocket
// https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox
// https://github.com/pyllyukko/user.js/issues/143
user_pref("browser.pocket.enabled",              false);
user_pref("extensions.pocket.enabled", false);

// PREF: Disable SHIELD
// https://support.mozilla.org/en-US/kb/shield
// https://bugzilla.mozilla.org/show_bug.cgi?id=1370801
user_pref("extensions.shield-recipe-client.enabled",     false);
user_pref("app.shield.optoutstudies.enabled",            false);
//
// PREF: Disable "Recommended by Pocket" in Firefox Quantum
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
