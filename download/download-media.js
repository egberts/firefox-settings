

// PREF: Disable automatic downloading of OpenH264 codec
//
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_media-capabilities
// https://andreasgal.com/2014/10/14/openh264-now-in-firefox/
user_pref("media.gmp-gmpopenh264.enabled",           false);
user_pref("media.gmp-manager.url",               "");
