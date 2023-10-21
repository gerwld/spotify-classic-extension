//   - This file is part of SpoPlus Extension
//  <https://github.com/gerwld/SpoPlus-extension/blob/main/README.md>,
//   - Copyright (C) 2023-present SpoPlus Extension
//   -
//   - SpoPlus Extension is a software: you can redistribute it, but you are not allowed to modify it under the terms of the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License.
//   -
//   - SpoPlus Extension is distributed in the hope that it will be useful,
//   - but WITHOUT ANY WARRANTY; without even the implied warranty of
//   - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   - Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License for more details.
//   -
//   - You should have received a copy of the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License
//   - along with SpoPlus Extension.  If not, see <https://creativecommons.org/licenses/by-nc-nd/4.0/>.


// Note: Spotify is a registered trademark of Spotify AB. This extension is not affiliated with or endorsed by Spotify AB.
(()=>{"use strict";{let s,t,a;const n=["roboto","poppins","caprasimo","playfair","merriweather","noto_sans","nunito","montserrat","pixelify","gabarito","roboto_condensed","inter"],d=["light_green","purple_dark","kittens"];function o(e,s,o){fetch(chrome.runtime.getURL(e)).then(e=>e.text()).then(e=>{var t=document.getElementById(o),a=document.createElement("style");a.textContent=e,a.setAttribute("id",o),s&&!t?document.head.appendChild(a):!s&&t instanceof Node&&document.head.removeChild(t)}).catch(e=>{})}function r(e,a,t){o(e,a,"now_play_disable"),a?s=setInterval(function(){t.forEach(e=>{var t=localStorage.getItem(e);a&&0!=t&&localStorage.setItem(e,0)})},700):clearInterval(s)}function c(e,a){o(e,a,"static_aside"),a?t=setInterval(function(){var e=localStorage.getItem("182yfcl2wcrumva06hlhooydu:ylx-default-state-nav-bar-width"),t=localStorage.getItem("182yfcl2wcrumva06hlhooydu:ylx-sidebar-state");(e<400||1==t)&&a&&(localStorage.setItem("182yfcl2wcrumva06hlhooydu:library-row-mode",1),localStorage.setItem("182yfcl2wcrumva06hlhooydu:ylx-sidebar-state",0),localStorage.setItem("182yfcl2wcrumva06hlhooydu:ylx-default-state-nav-bar-width",400),window.location.reload())},700):clearInterval(t)}function l(e,t){o(e,t,"focus_mode"),t?a=setInterval(function(){0==localStorage.getItem("182yfcl2wcrumva06hlhooydu:library-row-mode")&&t&&(localStorage.setItem("182yfcl2wcrumva06hlhooydu:library-row-mode",1),window.location.reload())},200):clearInterval(a)}function e(){chrome.storage.local.get("formState",e=>{var t,a,e=e.formState.disabled?{disabled:!0}:e.formState;o("/assets/graphs/header_btns.css",e.header_btns,"header_btns"),o("/assets/graphs/rect_avatars.css",e.rect_avatars,"rect_avatars"),o("/assets/graphs/block_images.css",e.block_images,"block_images"),o("/assets/graphs/block_videos.css",e.block_videos,"block_videos"),o("/assets/graphs/bigger_navbar.css",e.bigger_navbar,"bigger_navbar"),r("/assets/graphs/now_play_disable.css",e.now_play_disable,["182yfcl2wcrumva06hlhooydu:ui-panel-state","182yfcl2wcrumva06hlhooydu:ylx-sidebar-state"]),c("/assets/graphs/static_aside.css",e.static_aside),l("/assets/graphs/focus_mode.css",e.focus_mode),o("/assets/graphs/square_shaped.css",e.square_shaped,"square_shaped"),t=e.theme,-1!==d.indexOf(t)&&o(`/assets/graphs/themes/${t}.css`,!0,t),d.filter(e=>e!==t).forEach(e=>document.getElementById(e)?.remove()),a=e.font,-1!==n.indexOf(a)&&o(`/assets/graphs/fonts/${a}.css`,!0,a),n.filter(e=>e!==a).forEach(e=>document.getElementById(e)?.remove())})}chrome.storage.onChanged.addListener(function(){e()}),document.addEventListener("DOMContentLoaded",e,!1)}})();