

// PREF: Disable Service Workers
// https://developer.mozilla.org/en-US/docs/Web/API/Worker
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
// https://wiki.mozilla.org/Firefox/Push_Notifications#Service_Workers
// NOTICE: Disabling ServiceWorkers breaks functionality on some sites
// (Google Street View...)
// Unknown security implications
// CVE-2016-5259, CVE-2016-2812, CVE-2016-1949, CVE-2016-5287 (fixed)
user_pref("dom.serviceWorkers.enabled", false);


// PREF: Disable Web Workers
//
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
// https://www.w3schools.com/html/html5_webworkers.asp
// NOTICE: Disabling Web Workers breaks "Download as ZIP" functionality on
// https://mega.nz/, WhatsApp Web, upload on https://www.virustotal.com/,  and
// probably others
user_pref("dom.workers.enabled",                 false);
//
// PREF: Disable web notifications
// https://support.mozilla.org/en-US/questions/1140439
user_pref("dom.webnotifications.enabled", false);

// PREF: Disable DOM timing API
// https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
// https://www.w3.org/TR/navigation-timing/#privacy
user_pref("dom.enable_performance",              false);
//
// PREF: Make sure the User Timing API does not provide a new high resolution
// timestamp
// https://trac.torproject.org/projects/tor/ticket/16336
// https://www.w3.org/TR/2013/REC-user-timing-20131212/#privacy-security
user_pref("dom.enable_user_timing",              false);
//
// PREF: Disable Web Audio API
// https://bugzilla.mozilla.org/show_bug.cgi?id=1288359
user_pref("dom.webaudio.enabled", false);

// PREF: Disable raw TCP socket support (mozTCPSocket)
// https://trac.torproject.org/projects/tor/ticket/18863
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-97/
// https://developer.mozilla.org/docs/Mozilla/B2G_OS/API/TCPSocket
user_pref("dom.mozTCPSocket.enabled", false);


// PREF: Disable DOM storage (disabled)
// http://kb.mozillazine.org/Dom.storage.enabled
// https://html.spec.whatwg.org/multipage/webstorage.html
// NOTICE-DISABLED: Disabling DOM storage is known to cause`TypeError:
// localStorage is null` errors
user_pref("dom.storage.enabled",       false);

// PREF: Disable leaking network/browser connection information via Javascript
// Network Information API provides general information about the system's
// connection type (WiFi, cellular, etc.)
// https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
// https://wicg.github.io/netinfo/#privacy-considerations
// https://bugzilla.mozilla.org/show_bug.cgi?id=960426
user_pref("dom.netinfo.enabled", false);


// PREF: Disable network API (Firefox < 32)
// https://developer.mozilla.org/en-US/docs/Web/API/Connection/onchange
//
// https://www.torproject.org/projects/torbrowser/design/#fingerprinting-defenses
user_pref("dom.network.enabled", false);
