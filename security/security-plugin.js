

user_pref("plugin.default.state", 0);

// NOTE: egbert.net disables this for usage of other plugins
//user_pref("plugin.disable", true);

// PREF: Disable Flash Player NPAPI plugin
// http://kb.mozillazine.org/Flash_plugin
user_pref("plugin.state.flash",                  0);
//
// PREF: Disable Java NPAPI plugin
user_pref("plugin.state.java", 0);

// PREF: Disable sending Flash Player crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled",  false);
//
// PREF: When Flash crash reports are enabled, don't send the visited URL in
// the crash report
user_pref("dom.ipc.plugins.reportCrashURL",          false);

// PREF: Disable Shumway (Mozilla Flash renderer)
// https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Shumway
user_pref("shumway.disabled", true);

// PREF: Disable Gnome Shell Integration NPAPI plugin
// user_pref("plugin.state.libgnome-shell-browser-plugin",      0);
//
// PREF: Disable the bundled OpenH264 video codec (disabled)
//
// http://forums.mozillazine.org/viewtopic.php?p=13845077&sid=28af2622e8bd8497b9113851676846b1#p13845077
user_pref("media.gmp-provider.enabled",        false);

// PREF: Enable plugins click-to-play
// https://wiki.mozilla.org/Firefox/Click_To_Play
//
// https://blog.mozilla.org/security/2012/10/11/click-to-play-plugins-blocklist-style/
user_pref("plugins.click_to_play", true);

user_pref("plugins.enumerable_names", "");
user_pref("security.xpconnect.plugin.unrestricted", false);
