(function() {
    'use strict';

    var newUserAgent = "Mozilla/5.0 (Linux; Android 14; SM-S928B Build/UP1A.231005.007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36";

    Object.defineProperty(navigator, 'userAgent', {
        get: function() { return newUserAgent; }
    });

    Object.defineProperty(navigator, 'platform', {
        get: function() { return 'Linux armv8l'; }
    });

    Object.defineProperty(navigator, 'vendor', {
        get: function() { return 'Samsung'; }
    });
})();
