

// PREF: Disable battery API (Firefox < 52)
// https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
// https://bugzilla.mozilla.org/show_bug.cgi?id=1313580
user_pref("dom.battery.enabled", false);

// PREF: Disable telephony API
// https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.telephony.enabled", false);

// PREF: Disable clipboard event detection (onCut/onCopy/onPaste) via Javascript
// NOTICE: Disabling clipboard events breaks Ctrl+C/X/V copy/cut/paste
// functionaility in JS-based web applications (Google Docs...)
//
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/dom.event.clipboardevents.enabled
user_pref("dom.event.clipboardevents.enabled", false);

// PREF: Disable "copy to clipboard" functionality via Javascript (Firefox >=
// 41)
// NOTICE: Disabling clipboard operations will break legitimate JS-based
// "copy to clipboard" functionality
// https://hg.mozilla.org/mozilla-central/rev/2f9f8ea4b9c3
user_pref("dom.allow_cut_copy", false);

// PREF: Spoof dual-core CPU
// https://trac.torproject.org/projects/tor/ticket/21675
// https://bugzilla.mozilla.org/show_bug.cgi?id=1360039
user_pref("dom.maxHardwareConcurrency", 2);



// PREF: Disable gamepad API to prevent USB device enumeration
// https://www.w3.org/TR/gamepad/
// https://trac.torproject.org/projects/tor/ticket/13023
user_pref("dom.gamepad.enabled", false);

// PREF: Disable virtual reality devices APIs
//
// https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
// https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API
user_pref("dom.vr.enabled", false);

// PREF: Disable vibrator API
user_pref("dom.vibrator.enabled", false);

// PREF: Disable resource timing API
// https://www.w3.org/TR/resource-timing/#privacy-security
user_pref("dom.enable_resource_timing", false);

// PREF: Disable Archive API (Firefox < 54)
// https://wiki.mozilla.org/WebAPI/ArchiveAPI
// https://bugzilla.mozilla.org/show_bug.cgi?id=1342361
user_pref("dom.archivereader.enabled", false);

// PREF: Disable FlyWeb (discovery of LAN/proximity IoT devices that expose a
// Web interface)
// https://wiki.mozilla.org/FlyWeb
// https://wiki.mozilla.org/FlyWeb/Security_scenarios
//
// https://docs.google.com/document/d/1eqLb6cGjDL9XooSYEEo7mE-zKQ-o-AuDTcEyNhfBMBM/edit
// http://www.ghacks.net/2016/07/26/firefox-flyweb
user_pref("dom.flyweb.enabled", false);
