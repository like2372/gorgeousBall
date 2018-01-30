/**
 * 小球类
 */
class Ball {

	constructor(ctx, x, y, color) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.color = color;
		this.r = 40;
	}

	/**
	 * 绘制小球
	 */
	draw() {

		this.ctx.save();

		this.ctx.beginPath();

		this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);

		this.ctx.fillStyle = this.color;

		this.ctx.fill();

		this.ctx.restore();

	}

}

/**
 * 移动球类继承球
 */
class MoveBall extends Ball {

	constructor(ctx, x, y, color) {
		super(ctx, x, y, color);

		this.dx = random(-5, 5);
		this.dy = random(-5, 5);
		this.dr = random(3, 5);

	}

	//改变小球的x,y,r使小球动起来
	update() {

		this.x += this.dx;
		this.y += this.dy;
		this.r -= this.dr;

		if(this.r < 0) {
			this.r = 0;
		}

	}

}

/**
 * 根据start和end生成随机数
 */
const random = (start, end) => Math.floor(Math.random() * (end - start) + start);

export default {

	getBall(ctx, x, y, color) {

		let moveBall = new MoveBall(ctx, x, y, color);

		return moveBall;
	}

}