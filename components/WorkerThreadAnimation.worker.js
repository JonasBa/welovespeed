const CX = 300;

class CircleAnimatorWorker  {
  constructor(canvas){
    this.canvas = canvas
    this.context = this.canvas.getContext("2d");
    this.scale = 2;

    this.circles = Array.from(Array(10).keys()).map((n,i) => new Circle(this.context, i))
  }

  clear = (context) => {
    context.clearRect(0,0, 300 * this.scale, 300 * this.scale)
    requestAnimationFrame(() => this.clear(context || this.context))
  }

  showCircles = () => {
    this.circles.forEach((c,i) => {
      c.draw()
      setTimeout(() => {
        c.show(performance.now())
      }, i * 200)
    })
  }

  animateCircles = () => {
    if(!this.circles) return

    this.circles.map(c => c.die())
    this.circles = Array.from(Array(10).keys()).map((n,i) => {
      const c = new Circle(this.context, i)
      c.draw()
      setTimeout(() => {
        c.show(performance.now())
      }, i * 70)
      return c
    })
    
    setTimeout(() => this.animateCircles(), 1200)
  }

  onStart = () => {
    this.clear(this.context)
    this.showCircles()
    setTimeout(this.animateCircles, 2800)
  }

  onClick = ( ) => {
    this.circles.map(c => c.die())
    this.circles = undefined;
  }
}

onmessage = (event) => {
  const circleAnimator = new CircleAnimatorWorker(event.data.canvas)
  circleAnimator.onStart()
}

///////////////////////////////////////////////////////////////////////// 
////// Boilerplate
/////////////////////////////////////////////////////////////////////////

const clamp = (v, min, max) => v < min ? 0 : v > max ? max : v
const easings = {
  easeOutQuart: function (t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
  easeInBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
}

class Circle {
  constructor(context, step){
    this.context = context
    this.step = step
    this.dead = false
    this.color = Math.random() > .5 ? [88, 188, 197] : [211, 213, 231]
    this.cx = 1
    this.scaleFactor = 2
    this.isDashed = Math.random() > .5
  }
  
  die = () => this.dead = true
  
  draw = () => {
    this.context.beginPath();
    this.context.strokeStyle = `rgba(${[...this.color, this.scaleFactor].join(',')})`
    this.context.setLineDash(this.isDashed ? [15 * this.scaleFactor, 30 * this.scaleFactor] : [0,0]);
    this.context.arc(this.cx, this.cx, this.step * 40 + 80 * this.scaleFactor , 0, 2 * Math.PI);
    this.context.stroke();
    !this.dead && requestAnimationFrame(this.draw)
  }
  
  show = start => {
    const show = now => {
      const elapsed = now - start
      this.context.globalAlpha = easings.easeOutBack(elapsed, .4, .6, 800)
      this.scaleFactor = clamp(easings.easeOutBack(elapsed, .4, .6, 800), 0, 300)
      elapsed < 800 ? requestAnimationFrame(show) : null
    }
    requestAnimationFrame(show)
  }
}