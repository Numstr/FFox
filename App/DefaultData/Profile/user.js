////////// SETTINGS

user_pref("browser.aboutConfig.showWarning", false);

user_pref("browser.toolbars.bookmarks.visibility", newtab);

user_pref("full-screen-api.transition-duration.enter", 0 0);
user_pref("full-screen-api.transition-duration.leave", 0 0);

user_pref("browser.compactmode.show", true);

  ////////// GENERAL

  user_pref("browser.shell.checkDefaultBrowser", false);

  user_pref("browser.link.open_newwindow", 3);

  user_pref("privacy.userContext.enabled", true);
  user_pref("privacy.userContext.ui.enabled", true);

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

  user_pref("browser.startup.homepage", "about:blank");

  user_pref("browser.newtabpage.enabled", false);
  user_pref("browser.newtab.preload", false);

  user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
  user_pref("browser.newtabpage.activity-stream.telemetry", false);
  user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT: false]
  user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
  user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
  user_pref("browser.newtabpage.activity-stream.showSponsored", false);
  user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]
  user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+]
  user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

  //////////

  ////////// PRIVACY

  user_pref("signon.generation.enabled", false);
  user_pref("signon.management.page.breach-alerts.enabled", false);

  user_pref("browser.urlbar.shortcuts.bookmarks", false);
  user_pref("browser.urlbar.shortcuts.history", false);
  user_pref("browser.urlbar.shortcuts.tabs", false);
  user_pref("browser.urlbar.suggest.topsites", false);

  //////////

//////////

user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // [FF68+] allow userChrome/userContent
