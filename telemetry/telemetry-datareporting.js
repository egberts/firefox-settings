


// PREF: Disable collection/sending of the health report (healthreport.sqlite*)
//
// https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
//
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("datareporting.healthreport.uploadEnabled",        false);
user_pref("datareporting.healthreport.service.enabled",      false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
