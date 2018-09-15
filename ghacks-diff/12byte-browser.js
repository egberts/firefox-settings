
//  Severe-impact privacy
//
// i don't mind keeping a few extra backups of my bookmarks
user_pref("browser.bookmarks.max_backups", 5);

// '0' breaks the display of uBlock and uMatrix on Linux
user_pref("browser.display.use_document_fonts", 1);

// allow the `open with` option when downloading a file
user_pref("browser.download.forbid_open_with", false);

// remember form and search history
user_pref("browser.formfill.enable", true);

// essentially disable session store (restore session after
// browser crash) to reduce disk writes
user_pref("browser.sessionstore.interval", 15000000);

// allow to restore closed tabs
user_pref("browser.sessionstore.max_tabs_undo", 3);

// allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.autoFill", true);

// allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.autoFill.typed", true);

// allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.suggest.bookmark", true);

// allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.suggest.history", true);

