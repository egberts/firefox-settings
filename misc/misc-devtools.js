

// font size for the Developers Toolbox
user_pref("devtools.toolbox.zoomValue", "1.3");

// PREF: Disable WebIDE
// https://trac.torproject.org/projects/tor/ticket/16222
// https://developer.mozilla.org/docs/Tools/WebIDE
user_pref("devtools.webide.enabled",             false);
user_pref("devtools.webide.autoinstallADBHelper",        false);
user_pref("devtools.webide.autoinstallFxdtAdapters",     false);

// PREF: Disable remote debugging
//
// https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_Desktop
//
// https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox#Advanced_settings
user_pref("devtools.debugger.remote-enabled",            false);
user_pref("devtools.chrome.enabled",             false);
user_pref("devtools.debugger.force-local", true);


// Disable WebIDE
user_pref("devtools.appmanager.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.webide.enabled", false);


