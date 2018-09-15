

// in my case a value of '3' breaks cPanel login
user_pref("security.tls.version.min", 1);

// disable on-line verification of SSL certificates (can cause
// sites to load slower or not at all if the service is
// down - you should typically NOT disable this)
user_pref("security.OCSP.enabled", 0);

