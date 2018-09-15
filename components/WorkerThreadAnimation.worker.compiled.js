"use strict";

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CX = 300;

var CircleAnimatorWorker = function CircleAnimatorWorker(canvas) {
  var _this = this;

  _classCallCheck(this, CircleAnimatorWorker);

  this.clear = function(context) {
    context.clearRect(0, 0, 300 * _this.scale, 300 * _this.scale);
    requestAnimationFrame(function() {
      return _this.clear(context || _this.context);
    });
  };

  this.showCircles = function() {
    _this.circles.forEach(function(c, i) {
      c.draw();
      setTimeout(function() {
        c.show(self.performance.now());
      }, i * 200);
    });
  };

  this.animateCircles = function() {
    if (!_this.circles) return;

    _this.circles.map(function(c) {
      return c.die();
    });
    _this.circles = Array.from(Array(10).keys()).map(function(n, i) {
      var c = new Circle(_this.context, i);
      c.draw();
      setTimeout(function() {
        c.show(self.performance.now());
      }, i * 70);
      return c;
    });

    setTimeout(function() {
      return _this.animateCircles();
    }, 1200);
  };

  this.onStart = function() {
    _this.clear(_this.context);
    _this.showCircles();
    setTimeout(_this.animateCircles, 2800);
  };

  this.onClick = function() {
    _this.circles.map(function(c) {
      return c.die();
    });
    _this.circles = undefined;
  };

  this.canvas = canvas;
  this.context = this.canvas.getContext("2d");
  this.scale = 2;

  this.circles = Array.from(Array(10).keys()).map(function(n, i) {
    return new Circle(_this.context, i);
  });
};

onmessage = function onmessage(event) {
  var circleAnimator = new CircleAnimatorWorker(event.data.canvas);
  circleAnimator.onStart();
};

/////////////////////////////////////////////////////////////////////////
////// Boilerplate
/////////////////////////////////////////////////////////////////////////

var clamp = function clamp(v, min, max) {
  return v < min ? 0 : v > max ? max : v;
};
var easings = {
  easeOutQuart: function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInBack: function easeInBack(t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function easeOutBack(t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }
};

var Circle = function Circle(context, step) {
  var _this2 = this;

  _classCallCheck(this, Circle);

  this.die = function() {
    return (_this2.dead = true);
  };

  this.draw = function() {
    _this2.context.beginPath();
    _this2.context.strokeStyle =
      "rgba(" +
      []
        .concat(_toConsumableArray(_this2.color), [_this2.scaleFactor])
        .join(",") +
      ")";
    _this2.context.setLineDash(
      _this2.isDashed
        ? [15 * _this2.scaleFactor, 30 * _this2.scaleFactor]
        : [0, 0]
    );
    _this2.context.arc(
      _this2.cx,
      _this2.cx,
      _this2.step * 40 + 80 * _this2.scaleFactor,
      0,
      2 * Math.PI
    );
    _this2.context.stroke();
    !_this2.dead && requestAnimationFrame(_this2.draw);
  };

  this.show = function(start) {
    var show = function show() {
      var elapsed = performance.now() - start;
      _this2.context.globalAlpha = easings.easeOutBack(elapsed, 0.4, 0.6, 800);
      _this2.scaleFactor = clamp(
        easings.easeOutBack(elapsed, 0.4, 0.6, 800),
        0,
        300
      );
      elapsed < 800 ? requestAnimationFrame(show) : null;
    };
    requestAnimationFrame(show);
  };

  this.context = context;
  this.step = step;
  this.dead = false;
  this.color = Math.random() > .5 ? [88, 188, 197] : [58, 65, 111]
  this.cx = 300;
  this.scaleFactor = 2;
  this.isDashed = Math.random() > 0.5;
};
