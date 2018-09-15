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

export const CX = 300;

export default class Circle {
  constructor(context, step){
    this.context = context
    this.step = step
    this.dead = false
    this.color = Math.random() > .5 ? [88, 188, 197] : [58, 65, 111]
    this.cx = CX
    this.scaleFactor = 0
    this.isDashed = Math.random() > .5
  }
  
  die = () => this.dead = true
  
  draw = () => {
    this.context.beginPath();
    this.context.strokeStyle = `rgba(${[...this.color, this.scaleFactor].join(',')})`
    this.context.setLineDash(this.isDashed ? [15 * this.scaleFactor, 30 * this.scaleFactor] : [0,0]);
    this.context.arc(this.cx, this.cx, this.step * 40 + 80 * this.scaleFactor , 0, 2 * Math.PI);
    this.context.stroke();
    !this.dead && window.requestAnimationFrame(this.draw)
  }
  
  show = start => {
    const show = now => {
      const elapsed = now - start
      this.context.globalAlpha = easings.easeOutBack(elapsed, .4, .6, 800)
      this.scaleFactor = clamp(easings.easeOutBack(elapsed, .4, .6, 800), 0, CX)
      elapsed < 800 ? window.requestAnimationFrame(show) : null
    }
    window.requestAnimationFrame(show)
  }
}