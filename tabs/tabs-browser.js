

// controls when a new window/tab should be opened -
// 1=open links that open in a new window in the current tab,
// 2=open links that open in a new window in a new window,
// 3=open links that open in a new window in a new tab in the current window
user_pref("browser.link.open_newwindow", 1);

// open links from external programs in:
// -1=default,
// 1=the current tab,
// 2=a new window,
// 3=a new tab
user_pref("browser.link.open_newwindow.override.external", 3);

// tab specific max number of pages that can be traversed
// when moving forward/backward in history - affects
// total memory consumption
user_pref("browser.sessionhistory.max_entries", 5);

// don't quit the browser when the last tab is closed
user_pref("browser.tabs.closeWindowWithLastTab", false);

// cause links opened from external programs to open in a new background tab
user_pref("browser.tabs.loadDivertedInBackground", true);

// focus new tabs instead of loading them in the background
user_pref("browser.tabs.loadInBackground", false);

