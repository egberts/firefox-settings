// Disable WebRTC -- not necessary if you toggle "Prevent WebRTC from leaking local IP addresses" to on in uBlock Origin's settings. May break some web apps
// More information: https://www.privacytools.io/#webrtc

// PREF: Disable WebRTC entirely to prevent leaking internal IP addresses
// (Firefox < 42)
// NOTICE: Disabling WebRTC breaks peer-to-peer file sharing tools (reep.io
// ...)
user_pref("media.peerconnection.enabled", false);


// PREF: Don't reveal your internal IP when WebRTC is enabled (Firefox >= 42)
// https://wiki.mozilla.org/Media/WebRTC/Privacy
// https://github.com/beefproject/beef/wiki/Module%3A-Get-Internal-IP-WebRTC
user_pref("media.peerconnection.ice.default_address_only",   true); // Firefox 42-51
user_pref("media.peerconnection.ice.no_host", true); // Firefox >= 52

// user_pref("media.peerconnection.use_document_iceservers", false);
// user_pref("media.peerconnection.video.enabled", false);
// user_pref("media.peerconnection.identity.enabled", false);
// user_pref("media.peerconnection.identity.timeout", 1);
// user_pref("media.peerconnection.turn.disable", true);
// user_pref("media.peerconnection.ice.tcp", false);


// PREF: Disable WebRTC getUserMedia, screen sharing, audio capture, video
// capture
// https://wiki.mozilla.org/Media/getUserMedia
//
https://blog.mozilla.org/futurereleases/2013/01/12/capture-local-camera-and-microphone-streams-with-getusermedia-now-enabled-in-firefox/
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator
user_pref("media.navigator.enabled",             false);
user_pref("media.navigator.video.enabled",           false);
user_pref("media.getusermedia.screensharing.enabled",        false);
user_pref("media.getusermedia.audiocapture.enabled", false);
// Disable WebRTC
user_pref("media.getusermedia.screensharing.allowed_domains", "");

