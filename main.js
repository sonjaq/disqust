/**
 * Blocks disqus threads from rendering on pages.
 *
 * @author sonjaqleaf@gmail.com
 */

var el = document.getElementById('disqus_thread');

if (el) {
  el.addEventListener("DOMNodeInserted", function() {
    el.style.setProperty('display', 'none');
  })
}