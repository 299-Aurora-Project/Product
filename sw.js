@@ -1,15 +1,96 @@
self.addEventListener('install', (e) => {
  self.skipWaiting(); // 新しいSWをすぐに有効化
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (e) => {
  // キャッシュ戦略が必要な場合はここに記述
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
