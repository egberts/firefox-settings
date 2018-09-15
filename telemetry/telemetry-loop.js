

// PREF: Disable Firefox Hello (disabled) (Firefox < 49)
// https://wiki.mozilla.org/Loop
//
// https://support.mozilla.org/t5/Chat-and-share/Support-for-Hello-discontinued-in-Firefox-49/ta-p/37946
// NOTICE-DISABLED: Firefox Hello requires setting
// `media.peerconnection.enabled` and `media.getusermedia.screensharing.enabled`
// to true, `security.OCSP.require` to false to work.
user_pref("loop.enabled",      false);

// PREF: Disable Firefox Hello metrics collection
//
// https://groups.google.com/d/topic/mozilla.dev.platform/nyVkCx-_sFw/discussion
user_pref("loop.logDomains", false);
