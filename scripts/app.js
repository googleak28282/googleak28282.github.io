if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });

  window.addEventListener('fetch', function(event) {
    event.respondWith(
      new Response('bad')
    );
  });
}
