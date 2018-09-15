


// 'true' breaks functionality of apparently several
// add-ons that deal with deleting cookies, local
// and indexDB storage
user_pref("privacy.firstparty.isolate", false);

// keep history on shutdown
user_pref("privacy.clearOnShutdown.history", false);

// keep form data on shutdown
user_pref("privacy.clearOnShutdown.formdata", false);

// don't select form data when clearing history manually
user_pref("privacy.cpd.formdata", false);

// don't select history item when clearing history manually
user_pref("privacy.cpd.history", false);

