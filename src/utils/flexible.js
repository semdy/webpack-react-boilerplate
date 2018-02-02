;(function (win, lib) {
  let
    doc = win.document,
    docEl = doc.documentElement,
    dpr = 0,
    scale = 0,
    tid,
    flexible = lib.flexible || (lib.flexible = {}),
    isIPhone = win.navigator.appVersion.match(/iphone/gi),
    devicePixelRatio = win.devicePixelRatio;
  
  if (isIPhone) {
    // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
    if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
      dpr = 3;
    } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
      dpr = 2;
    } else {
      dpr = 1;
    }
  } else {
    // 其他设备下，仍旧使用1倍的方案
    dpr = 1;
  }

  scale = 1 / dpr;

  docEl.setAttribute('data-dpr', dpr);

  function refreshRem() {
    let width = docEl.getBoundingClientRect().width;
    if (width / dpr > 540) {
      width = 540 * dpr;
    }
    let rem = width / 10;
    docEl.style.fontSize = rem + 'px';
    flexible.rem = win.rem = rem;
  }

  win.addEventListener('resize', function () {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);

  refreshRem();

  flexible.dpr = win.dpr = dpr;
  flexible.refreshRem = refreshRem;
  flexible.rem2px = function (d) {
    let val = parseFloat(d) * this.rem / scale;
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px';
    }
    return val;
  };

  flexible.px2rem = function (d) {
    let val = parseFloat(d) / this.rem * scale;
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem';
    }
    return val;
  }

})(window, window['lib'] || (window['lib'] = {}));
