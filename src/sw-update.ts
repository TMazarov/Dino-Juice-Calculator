// src/sw-update.ts
// This will auto-refresh the app when a new service worker is available

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });
}
