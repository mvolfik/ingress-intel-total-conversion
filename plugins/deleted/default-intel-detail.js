// @author         jonatkins
// @name           Default intel detail level
// @category       Tweaks
// @version        0.2.0
// @description    Use the portal level detail levels from the standard intel site. By default, IITC shows less detail when zoomed out, as this is enough for general use, is more friendly to the niantic servers, and loads much faster. This plugin restores the default zoom level to portal level mapping. Note: using this plugin causes a larger number of requests to the intel server, and at high resolutions can cause excessive requests to be made (yes: the default intel site also has this problem!), so it is not recommended except for low resolution screens.


// use own namespace for plugin
window.plugin.defaultIntelDetail = function() {};

window.plugin.defaultIntelDetail.setup  = function() {

// NOTE: the logic required is closely tied to the IITC+stock map detail level code - so the logic is moved there now
// and just enabled by this flag
  window.CONFIG_ZOOM_DEFAULT_DETAIL_LEVEL=true;

};

var setup =  window.plugin.defaultIntelDetail.setup;
