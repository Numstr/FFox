////////// SETTINGS

user_pref("browser.toolbars.bookmarks.visibility", newtab);

user_pref("full-screen-api.transition-duration.enter", 0 0);
user_pref("full-screen-api.transition-duration.leave", 0 0);

user_pref("browser.compactmode.show", true);

  ////////// GENERAL

  user_pref("general.smoothScroll", false);
  user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

  //////////

  ////////// PRIVACY

  user_pref("signon.generation.enabled", false);
  user_pref("signon.management.page.breach-alerts.enabled", false);

  user_pref("browser.urlbar.shortcuts.bookmarks", false);
  user_pref("browser.urlbar.shortcuts.history", false);
  user_pref("browser.urlbar.shortcuts.tabs", false);
  user_pref("browser.urlbar.suggest.topsites", false);

  // user_pref("media.autoplay.allow-extension-background-pages", false);
  // user_pref("media.autoplay.block-event.enabled", true);

  //////////

//////////

user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // [FF68+] allow userChrome/userContent
