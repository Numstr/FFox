////////// SETTINGS

user_pref("browser.aboutConfig.showWarning", false);

user_pref("browser.toolbars.bookmarks.visibility", newtab);

user_pref("full-screen-api.transition-duration.enter", 0 0);
user_pref("full-screen-api.transition-duration.leave", 0 0);

user_pref("browser.compactmode.show", true);

  ////////// GENERAL

  user_pref("browser.startup.page", 0);
  user_pref("browser.shell.checkDefaultBrowser", false);

  user_pref("browser.link.open_newwindow", 3);

  user_pref("privacy.userContext.enabled", true);
  user_pref("privacy.userContext.ui.enabled", true);

  user_pref("layout.spellcheckDefault", 0);

  user_pref("browser.download.folderList", 0);

  user_pref("browser.download.useDownloadDir", false);

  user_pref("browser.download.always_ask_before_handling_new_types", true);

  user_pref("media.eme.enabled", true);

  user_pref("general.autoScroll", false);
  user_pref("general.smoothScroll", false);
  user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
  user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
  user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

  ////////// HOME

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

  ////////// SEARCH

  user_pref("browser.search.suggest.enabled", true);
  user_pref("browser.urlbar.suggest.searches", true);
  user_pref("browser.urlbar.speculativeConnect.enabled", false);
  user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
  user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

  user_pref("browser.urlbar.shortcuts.bookmarks", false);
  user_pref("browser.urlbar.shortcuts.history", false);
  user_pref("browser.urlbar.shortcuts.tabs", false);
  user_pref("browser.urlbar.suggest.topsites", false);

  //////////

  ////////// PRIVACY

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

  user_pref("browser.urlbar.suggest.history", true);
  user_pref("browser.urlbar.suggest.bookmark", true);
  user_pref("browser.urlbar.suggest.openpage", true);
  user_pref("browser.urlbar.suggest.topsites", false);
  user_pref("browser.urlbar.suggest.engines", false);

  user_pref("permissions.default.geo", 2);
  user_pref("permissions.default.camera", 2);
  user_pref("permissions.default.microphone", 2);
  user_pref("permissions.default.desktop-notification", 2);
  user_pref("media.autoplay.default", 5);
  user_pref("media.autoplay.blocking_policy", 2);
  user_pref("permissions.default.xr", 2);
  user_pref("dom.disable_open_during_load", true);

  user_pref("datareporting.healthreport.uploadEnabled", false);
  user_pref("browser.discovery.enabled", false);
  user_pref("app.shield.optoutstudies.enabled", false);
  user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

  user_pref("browser.safebrowsing.malware.enabled", false);
  user_pref("browser.safebrowsing.phishing.enabled", false);
  user_pref("browser.safebrowsing.downloads.enabled", false);
  user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
  user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

  user_pref("security.OCSP.enabled", 0);
  user_pref("security.OCSP.require", true);

  user_pref("dom.security.https_only_mode", true);

  //////////

//////////

user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // [FF68+] allow userChrome/userContent
