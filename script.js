console.log('Hola');
self.addEventListener('install', e => {


  const cacheStatic = caches.open( STATIC_CACHE ).then(cache => 
      cache.addAll( APP_SHELL ));

  const cacheInmutable = caches.open( INMUTABLE_CACHE ).then(cache => 
      cache.addAll( APP_SHELL_INMUTABLE ));



  e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ])  );

});
