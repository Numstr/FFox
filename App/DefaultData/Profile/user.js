////////// SETTINGS

user_pref("browser.aboutConfig.showWarning", false);

user_pref("browser.toolbars.bookmarks.visibility", newtab);

user_pref("full-screen-api.transition-duration.enter", 0 0);
user_pref("full-screen-api.transition-duration.leave", 0 0);

user_pref("browser.compactmode.show", true);

user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // [FF68+] allow userChrome/userContent

  ////////// GENERAL

    ////////// STARTUP

    user_pref("browser.startup.page", 0);
    user_pref("browser.shell.checkDefaultBrowser", false);

    //////////

    ////////// TABS

    user_pref("browser.link.open_newwindow", 3);
    user_pref("browser.tabs.warnOnClose", false);
    user_pref("privacy.userContext.enabled", true);
    user_pref("privacy.userContext.ui.enabled", true);

    //////////

    ////////// LANGUAGE

    user_pref("layout.spellcheckDefault", 0);

    //////////

    ////////// DOWNLOADS

    user_pref("browser.download.folderList", 0);
    user_pref("browser.download.useDownloadDir", false);
    user_pref("browser.download.always_ask_before_handling_new_types", true);

    //////////

    ////////// DRM

    user_pref("media.eme.enabled", false);

    //////////

    ////////// BROWSING

    user_pref("general.autoScroll", false);
    user_pref("general.smoothScroll", false);
    user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
    user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
    user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

    //////////

  ////////// HOME

    ////////// HOME CONTENT

    user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
    user_pref("browser.newtabpage.activity-stream.telemetry", false);
    user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
    user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
    user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
    user_pref("browser.newtabpage.activity-stream.showSponsored", false);
    user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
    user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
    user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

    //////////

  //////////

  ////////// SEARCH

    ////////// SUGGESTIONS

    user_pref("browser.search.suggest.enabled", true);
    user_pref("browser.urlbar.suggest.searches", true);
    user_pref("browser.urlbar.speculativeConnect.enabled", false);
    user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
    user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

    ////////// SHORTCUTS

    user_pref("browser.urlbar.shortcuts.bookmarks", false);
    user_pref("browser.urlbar.shortcuts.history", false);
    user_pref("browser.urlbar.shortcuts.tabs", false);
    user_pref("browser.urlbar.suggest.topsites", false);

    //////////

  //////////

  ////////// PRIVACY

    ///////// ENHANCED TRACKING PROTECTION

    user_pref("browser.contentblocking.category", "custom");

    user_pref("network.cookie.cookieBehavior", 1);
    user_pref("privacy.trackingprotection.enabled", true);
    user_pref("privacy.trackingprotection.socialtracking.enabled", true);
    user_pref("privacy.trackingprotection.cryptomining.enabled", true);
    user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

    /////////

    ///////// COOKIES AND SITE DATA

    user_pref("network.cookie.lifetimePolicy", 2);

    //////////

    ////////// LOGINS AND PASSWORDS

    user_pref("signon.rememberSignons", false);
    user_pref("signon.autofillForms", false);
    user_pref("signon.generation.enabled", false);
    user_pref("signon.management.page.breach-alerts.enabled", false);
    user_pref("network.http.windows-sso.enabled", false);
    user_pref("extensions.formautofill.addresses.enabled", false);
    user_pref("extensions.formautofill.available", "off");
    user_pref("extensions.formautofill.creditCards.available", false);
    user_pref("extensions.formautofill.creditCards.enabled", false);
    user_pref("extensions.formautofill.heuristics.enabled", false);

    //////////

    ////////// HISTORY

    user_pref("browser.formfill.enable", false);
    user_pref("privacy.sanitize.sanitizeOnShutdown", true);
    user_pref("privacy.sanitize.timeSpan", 0);

    user_pref("privacy.clearOnShutdown.cache", true);
    user_pref("privacy.clearOnShutdown.downloads", false);
    user_pref("privacy.clearOnShutdown.formdata", true);
    user_pref("privacy.clearOnShutdown.history", false);
    user_pref("privacy.clearOnShutdown.sessions", false);
    user_pref("privacy.clearOnShutdown.offlineApps", false);
    user_pref("privacy.clearOnShutdown.cookies", false);

    //////////

    ////////// ADDRESS BAR

    user_pref("browser.urlbar.suggest.history", true);
    user_pref("browser.urlbar.suggest.bookmark", true);
    user_pref("browser.urlbar.suggest.openpage", true);
    user_pref("browser.urlbar.suggest.topsites", false);
    user_pref("browser.urlbar.suggest.engines", false);

    //////////

    ////////// PERMISSIONS

    user_pref("permissions.default.geo", 2);
    user_pref("permissions.default.camera", 2);
    user_pref("permissions.default.microphone", 2);
    user_pref("permissions.default.desktop-notification", 2);
    user_pref("media.autoplay.default", 5);
    user_pref("media.autoplay.blocking_policy", 2);
    user_pref("permissions.default.xr", 2);
    user_pref("dom.disable_open_during_load", true);

    //////////

    ////////// DATA COLLECTION

    user_pref("datareporting.healthreport.uploadEnabled", false);
    user_pref("browser.discovery.enabled", false);
    user_pref("app.shield.optoutstudies.enabled", false);
    user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

    //////////

    ////////// SECURITY

    user_pref("browser.safebrowsing.malware.enabled", false);
    user_pref("browser.safebrowsing.phishing.enabled", false);
    user_pref("browser.safebrowsing.downloads.enabled", false);
    user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
    user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

    //////////

    ////////// CERTIFICATES

    user_pref("security.OCSP.enabled", 0);
    user_pref("security.OCSP.require", true);

    //////////

    ////////// HTTPS-ONLY MODE

    user_pref("dom.security.https_only_mode", true);

    //////////

  //////////

//////////


/*** arkenfox/user.js ***/
/*** https://raw.githubusercontent.com/arkenfox/user.js/master/user.js ***/

/* 0320: disable recommendation pane in about:addons (uses Google Analytics) ***/
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]

/* 0321: disable recommendations in about:addons' Extensions and Themes panes [FF68+] ***/
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

/* 4501: enable privacy.resistFingerprinting [FF41+]
 * [SETUP-WEB] RFP can cause some website breakage: mainly canvas, use a site exception via the urlbar
 * RFP also has a few side effects: mainly timezone is UTC0, and websites will prefer light theme
 * [1] https://bugzilla.mozilla.org/418986 ***/
user_pref("privacy.resistFingerprinting", true);

/* 4507: disable showing about:blank as soon as possible during startup [FF60+]
 * When default true this no longer masks the RFP chrome resizing activity
 * [1] https://bugzilla.mozilla.org/1448423 ***/
user_pref("browser.startup.blankWindow", false);

/* 4520: disable WebGL (Web Graphics Library)
 * [SETUP-WEB] If you need it then override it. RFP still randomizes canvas for naive scripts ***/
user_pref("webgl.disabled", true);

/* 7014: disable System Add-on updates
 * [WHY] It can compromise security. System addons ship with prefs, use those ***/
user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
user_pref("extensions.systemAddon.update.url", ""); // [FF44+]

user_pref("browser.search.update", false); // disable search engine updates (e.g. OpenSearch)
user_pref("extensions.update.enabled", false); // disable extension and theme update checks
user_pref("extensions.update.autoUpdateDefault", false); // disable installing extension and theme updates
