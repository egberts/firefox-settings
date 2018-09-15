
// Disable gamepad API to prevent USB device enumeration
user_pref("dom.gamepad.enabled", false);

// Stop websites from reading or modifying clipboard contents. May break some websites with text editors
// user_pref("dom.event.clipboardevents.enabled", false);

// PREF: Disable IndexedDB (disabled)
// https://developer.mozilla.org/en-US/docs/IndexedDB
// https://en.wikipedia.org/wiki/Indexed_Database_API
//
// https://wiki.mozilla.org/Security/Reviews/Firefox4/IndexedDB_Security_Review
// http://forums.mozillazine.org/viewtopic.php?p=13842047
// https://github.com/pyllyukko/user.js/issues/8
// NOTICE-DISABLED: IndexedDB could be used for tracking purposes, but is
// required for some add-ons to work (notably uBlock), so is left enabled
user_pref("dom.indexedDB.enabled",     false);
