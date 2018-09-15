

// PREF: Enforce Mixed Active Content Blocking
//
// https://support.mozilla.org/t5/Protect-your-privacy/Mixed-content-blocking-in-Firefox/ta-p/10990
//
// https://developer.mozilla.org/en-US/docs/Site_Compatibility_for_Firefox_23#Non-SSL_contents_on_SSL_pages_are_blocked_by_default
//
// https://blog.mozilla.org/tanvi/2013/04/10/mixed-content-blocking-enabled-in-firefox-23/
user_pref("security.mixed_content.block_active_content", true);


//
// PREF: Enforce Mixed Passive Content blocking (a.k.a. Mixed Display
// Content)
// NOTICE: Enabling Mixed Display Content blocking can prevent
// images/styles... from loading properly when connection to the website is only
// partially secured
user_pref("security.mixed_content.block_display_content", true);

// PREF: Disable JAR from opening Unsafe File Types
// http://kb.mozillazine.org/Network.jar.open-unsafe-types
// CIS Mozilla Firefox 24 ESR v1.0.0 - 3.7
user_pref("network.jar.open-unsafe-types", false);

// CIS 2.7.4 Disable Scripting of Plugins by JavaScript
// http://forums.mozillazine.org/viewtopic.php?f=7&t=153889
user_pref("security.xpconnect.plugin.unrestricted", false);


// PREF: Enable only whitelisted URL protocol handlers
// http://kb.mozillazine.org/Network.protocol-handler.external-default
// http://kb.mozillazine.org/Network.protocol-handler.warn-external-default
// http://kb.mozillazine.org/Network.protocol-handler.expose.%28protocol%29
// https://news.ycombinator.com/item?id=13047883
// https://bugzilla.mozilla.org/show_bug.cgi?id=167475
// https://github.com/pyllyukko/user.js/pull/285#issuecomment-298124005
// NOTICE: Disabling nonessential protocols breaks all interaction with
// custom protocols such as mailto:, irc:, magnet: ... and breaks opening
// third-party mail/messaging/torrent/... clients when clicking on links with
// these protocols
// TODO: Add externally-handled protocols from Windows 8.1 and Windows 10
// (currently contains protocols only from Linux and Windows 7) that might pose
// a similar threat (see e.g. https://news.ycombinator.com/item?id=13044991)
// TODO: Add externally-handled protocols from Mac OS X that might pose a
// similar threat (see e.g. https://news.ycombinator.com/item?id=13044991)
// If you want to enable a protocol, set
// network.protocol-handler.expose.(protocol) to true and
// network.protocol-handler.external.(protocol) to:
//   * true, if the protocol should be handled by an external application
//   * false, if the protocol should be handled internally by Firefox
user_pref("network.protocol-handler.warn-external-default",  true);
user_pref("network.protocol-handler.external.http",      false);
user_pref("network.protocol-handler.external.https",     false);
user_pref("network.protocol-handler.external.javascript",    false);
user_pref("network.protocol-handler.external.moz-extension", false);
user_pref("network.protocol-handler.external.ftp",       false);
user_pref("network.protocol-handler.external.file",      false);
user_pref("network.protocol-handler.external.about",     false);
user_pref("network.protocol-handler.external.chrome",        false);
user_pref("network.protocol-handler.external.blob",      false);
user_pref("network.protocol-handler.external.data",      false);
user_pref("network.protocol-handler.expose-all",     false);
user_pref("network.protocol-handler.expose.http",        true);
user_pref("network.protocol-handler.expose.https",       true);
user_pref("network.protocol-handler.expose.javascript",      true);
user_pref("network.protocol-handler.expose.moz-extension",   true);
user_pref("network.protocol-handler.expose.ftp",     true);
user_pref("network.protocol-handler.expose.file",        true);
user_pref("network.protocol-handler.expose.about",       true);
user_pref("network.protocol-handler.expose.chrome",      true);
user_pref("network.protocol-handler.expose.blob",        true);
user_pref("network.protocol-handler.expose.data", true);


// PREF: Limit the connection keep-alive timeout to 15 seconds (disabled)
// https://github.com/pyllyukko/user.js/issues/387
// http://kb.mozillazine.org/Network.http.keep-alive.timeout
// https://httpd.apache.org/docs/current/mod/core.html#keepalivetimeout
//user_pref("network.http.keep-alive.timeout",           15);

// PREF: Disable prefetching of <link rel="next"> URLs
// http://kb.mozillazine.org/Network.prefetch-next
//
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#Is_there_a_preference_to_disable_link_prefetching.3F
user_pref("network.prefetch-next",               false);

// PREF: Disable DNS prefetching
// http://kb.mozillazine.org/Network.dns.disablePrefetch
//
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
user_pref("network.dns.disablePrefetch",         true);
user_pref("network.dns.disablePrefetchFromHTTPS",        true);

// PREF: Disable the predictive service (Necko)
// https://wiki.mozilla.org/Privacy/Reviews/Necko
user_pref("network.predictor.enabled",               false);

// PREF: Reject .onion hostnames before passing the to DNS
// https://bugzilla.mozilla.org/show_bug.cgi?id=1228457
// RFC 7686
user_pref("network.dns.blockDotOnion", true);
