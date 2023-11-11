const CACHE_NAME = 'v1_cache_bch_pwa';


var urlsToCache = [
    './',
    './images/R-16.jpeg',
    './images/R-32.jpeg',
    './images/R-64.jpeg',
    './images/R-96.jpeg',
    './images/R-128.jpeg',
    './images/R-192.jpeg',
    './images/R-256.jpeg',
    './images/R-384.jpeg',
    './images/R-512.jpeg',
    './images/R-1024.jpeg',
    './images/R.jpeg',
    './images/about_img.png',
    './images/about_right_cross',
    './images/banner_img.png',
    './images/loading.gif',
    './images/logo.png ',
    './images/logo1.png',
    './images/menu_icon.png',
    './images/our.png',




    './css/bootstrap-grid.css',
    './css/bootstrap-grid.css.map',
    './css/bootstrap-grid.min.css',
    './css/bootstrap-grid.min.css.map',
    './css/bootstrap-reboot.css',
    './css/bootstrap-reboot.css.map',
    './css/bootstrap-reboot.min.css',
    './css/bootstrap-reboot.min.css.map',
    './css/bootstrap.css',
    './css/bootstrap.css.map',
    './css/bootstrap.min.css ',
    './css/bootstrap.min.css.map',
    './css/cochin.css',
    './css/default-skin.css',
    './css/font-awesome.min.css',
    './css/icomoon.css',
    './css/jquery-ui.css',
    './css/jquery.fancybox.min.css',
    './css/jquery.mCustomScrollbar.min.css',
    './css/meanmenu.css',
    './css/nice-select.css',
    './css/normalize.css ',
    './css/owl.carousel.min.css',
    './css/responsive.css',
    './css/slick.css',
    './css/style.css',

    './fonts/cochin.woff',
    './fonts/cochin.woff2 ',
    './fonts/cochinbold_italic.ttf',
    './fonts/cochinbold_italic.woff',
    './fonts/cochinbold_italic.woff2',
    './fonts/fontawesome-webfont.eot',
    './fonts/fontawesome-webfont.svg',
    './fonts/fontawesome-webfont.ttf',
    './fonts/fontawesome-webfont.woff',
    './fonts/fontawesome-webfont.woff2 ',
    './fonts/FontAwesome.otf',
    './fonts/IcoMoon-Free.ttf',
    './fonts/Poppins-Black.ttf',
    './fonts/Poppins-BlackItalic.ttf',
    './fonts/Poppins-Bold.ttf',
    './fonts/Poppins-BoldItalic.ttf',
    './fonts/Poppins-ExtraBold.ttf',
    './fonts/Poppins-ExtraBoldItalic.ttf',
    './fonts/Poppins-ExtraLight.ttf',
    './fonts/Poppins-ExtraLightItalic.ttf',
    './fonts/Poppins-Italic.ttf',
    './fonts/Poppins-Light.ttf',
    './fonts/Poppins-LightItalic.ttf',
    './fonts/Poppins-Medium.ttf',
    './fonts/Poppins-MediumItalic.ttf',
    './fonts/Poppins-Regular.ttf',
    './fonts/Poppins-SemiBold.ttf',
    './fonts/Poppins-SemiBoldItalic.ttf',
    './fonts/Poppins-Thin.ttf',
    './fonts/Poppins-ThinItalic.ttf',


    './js/revolution/assets/coloredbg.png',
    './js/revolution/assets/gridtile_3x3_white.png',
    './js/revolution/assets/gridtile_3x3.png',
    './js/revolution/assets/gridtile_white.png',
    './js/revolution/assets/gridtile.png',
    './js/revolution/assets/loader.gif',

    './js/revolution/css',
    './js/revolution/css/closedhand.html',
    './js/revolution/css/layers.css',
    './js/revolution/css/navigation.css',
    './js/revolution/css/openhand.html',
    './js/revolution/css/settings.css',

    './js/revolution/js/extensions',
    './js/revolution/js/extensions/revolution.extension.actions.min.js',
    './js/revolution/js/extensions/revolution.extension.carousel.min.js',
    './js/revolution/js/extensions/revolution.extension.kenburn.min.js',
    './js/revolution/js/extensions/revolution.extension.layeranimation.min.js',
    './js/revolution/js/extensions/revolution.extension.migration.min.js',
    './js/revolution/js/extensions/revolution.extension.navigation.min.js',
    './js/revolution/js/extensions/revolution.extension.parallax.min.js',
    './js/revolution/js/extensions/revolution.extension.slideanims.min.js',
    './js/revolution/js/extensions/revolution.extension.video.min.js',
    './js/revolution/js/jquery.themepunch.revolution.min.js',
    './js/revolution/js/jquery.themepunch.tools.min.js',


    './js/revolution/js/extensions',
    './js/revolution/js/jquery.themepunch.revolution.min.js',
    './js/revolution/js/jquery.themepunch.tools.min.js',
    './js/bootstrap.bundle.js',
    './js/bootstrap.bundle.js.map',
    './js/bootstrap.bundle.min.js',
    './js/bootstrap.bundle.min.js.map',
    './js/bootstrap.js',
    './js/bootstrap.js.map',
    './js/bootstrap.min.js ',
    './js/bootstrap.min.js.map',
    './js/custom.js',
    './js/jquery-3.0.0.min.js ',
    './js/jquery.mCustomScrollbar.concat.min.js',
    './js/jquery.min.js',
    './js/jquery.validate.js',
    './js/modernizer.js',
    './js/plugin.js',
    './js/popper.min.js',
    './js/slider-setting.js'
]



self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                return self.skipWaiting();
            })
            .catch((err) => {
                console.log('No se registró el caché', err);
            })
    );
});


self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                return self.skipWaiting();
            })
            .catch((err) => {
                console.log('No se registró el caché', err);
            })
    );
});



self.addEventListener
    ('fetch', e => {
        e.respondWith(
            caches.match(e.request)
                .then(res => {
                    if (res) {
                        return res;
                    }
                    return fetch(e.request);
                })
        );
    });

