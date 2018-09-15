

// PREF: Disable webGL
// https://en.wikipedia.org/wiki/WebGL
//
// https://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
user_pref("webgl.disabled",                  true);

// PREF: When webGL is enabled, use the minimum capability mode
user_pref("webgl.min_capability_mode",               true);

// PREF: When webGL is enabled, disable webGL extensions
//
// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API#WebGL_debugging_and_testing
user_pref("webgl.disable-extensions",                true);

// PREF: When webGL is enabled, force enabling it even when layer
// acceleration is not supported
// https://trac.torproject.org/projects/tor/ticket/18603
user_pref("webgl.disable-fail-if-major-performance-caveat",  true);

// PREF: When webGL is enabled, do not expose information about the graphics
// driver
// https://bugzilla.mozilla.org/show_bug.cgi?id=1171228
// https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_renderer_info
// user_pref("webgl.enable-debug-renderer-info",            false);
// somewhat related...
user_pref("pdfjs.enableWebGL",                 false);
