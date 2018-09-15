// `false' breaks TinyMCE editor paste (Ctrl+V) such as is used by WordPress, possibly others
user_pref("dom.event.clipboardevents.enabled", true);

// allow all default JS pop-up events
user_pref("dom.popup_allowed_events", "change click dblclick mouseup notificationclick reset submit touchend");

// unbreak coin-hive.com login, some other sites
user_pref("dom.workers.enabled", true);

