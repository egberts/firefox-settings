

// PREF: Enable Auto Update (disabled)
// NOTICE: Fully automatic updates are disabled and left to package
// management systems on Linux. Windows users may want to change this setting.
// CIS 2.1.1
user_pref("app.update.auto",                   true);
//
// PREF: Enforce checking for Firefox updates
// http://kb.mozillazine.org/App.update.enabled
// NOTICE: Update check page might incorrectly report Firefox ESR as
// out-of-date
user_pref("app.update.enabled", true);
