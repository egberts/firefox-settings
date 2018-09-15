

// PREF: Disable asm.js
// http://asmjs.org/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
// https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712
user_pref("javascript.options.asmjs", false);

// Disable JavaScript
//user_pref("javascript.enabled", false);

// Disable JavaScript Just-In-Time compiler
//user_pref("javascript.options.baselinejit", false);
//user_pref("javascript.options.ion", false);
