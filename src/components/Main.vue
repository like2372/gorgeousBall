<template>
	<div class="canvasDiv">
		<canvas id="myCanvas">当前浏览器不支持canvas</canvas>
	</div>
</template>

<script>
	import ball from "@/util/Ball.js"

	export default {
		name: 'main',
		data() {
			return {
				ballArray: [],
				ctx: "",
				canvasWidth: 1000,
				canvasHeight: 600,
				colorArray: ["red", "blue", "green", "purple", "pink", "yellow"],
			}
		},
		mounted() {
			let myCanvasEle = document.getElementById("myCanvas");
			this.ctx = myCanvasEle.getContext("2d");
			myCanvasEle.width = this.canvasWidth;
			myCanvasEle.height = this.canvasHeight;
			myCanvasEle.style.background = "black";

			//增加移动事件
			myCanvasEle.addEventListener("mousemove", (e) => {
				this.ballArray.push(ball.getBall(this.ctx, e.offsetX, e.offsetY, this.colorArray[Math.floor(Math.random() * (this.colorArray.length))]));
			});

			//定时器
			setInterval(() => {
				this.clear();
				this.draw();
			}, 50);
		},
		methods: {
			clear() {
				//清屏
				this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
			},
			draw() {
				//绘制
				for(let i = 0; i < this.ballArray.length; i++) {
					this.ballArray[i].draw();
					this.ballArray[i].update();
				}

			}
		}

	

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.canvasDiv {
		margin: 100px auto;
	}
	
	#myCanvas {
		box-shadow: 0 0 10px #000;
	}
</style>