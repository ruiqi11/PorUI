<template>
  <canvas ref="wCanvas" @click="press" class="por-canvas"></canvas>
</template>
<script>
export default {
  name: "por-canvas",
  props: {
    drawed: {
      type: Boolean,
      default: false
    },
    globalListen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      clickedEvent: "",
      clickedParentElement: "",
      insideRadius: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.drawed && this.$refs.wCanvas) {
        const canvas = this.$refs.wCanvas;
        const context = canvas.getContext("2d");
        context.fillStyle = canvas.parentElement.dataset.color;
        context.beginPath();
        context.arc(
          0,
          0,
          this.getTheBevel(
            canvas.parentElement.offsetWidth,
            canvas.parentElement.offsetHeight
          ),
          0,
          2 * Math.PI,
          false
        );
        context.fill();
      }
    });
  },
  destroyed() {
    if (this.$refs.wCanvas && this.globalListen) {
      document.removeEventListener("click", this.onClickDocument);
    }
  },
  methods: {
    // 平均值
    getTheBevel(x, y) {
      return Math.sqrt(x * x + y * y);
    },
    // 点击网页其他位置
    onClickDocument(e) {
      if (
        this.$refs.wCanvas &&
        (this.$refs.wCanvas === e.target ||
          this.$refs.wCanvas.contains(e.target))
      ) {
        return;
      }
      this.clearRect();
      document.removeEventListener("click", this.onClickDocument);
    },
    // 点击canvas
    press(event) {
      // 获取参数
      this.insideRadius = 0;
      this.clickedEvent = event;
      this.clickedParentElement = event.target.parentElement;
      // 调用绘制函数
      this.draw();
      if (this.globalListen) {
        this.$nextTick(() => {
          // document全局监听点击事件
          // true - 事件句柄在捕获阶段执行
          // false- 默认。事件句柄在冒泡阶段执行
          document.addEventListener("click", this.onClickDocument, true);
        });
      }
    },
    // 清空像素
    clearRect() {
      const canvass = document.getElementsByClassName("por-canvas");
      for (let i = 0; i < canvass.length; i++) {
        const context = canvass[i].getContext("2d");
        if (context.fillStyle !== "#000000") { //fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。
          context.fillStyle = "#000000";
          context.clearRect(0, 0, canvass[i].width, canvass[i].height);// 清空给定矩形内的指定像素
        }
      }
    },
    // 绘制像素
    draw() {
      this.clearRect();
      const context = this.clickedEvent.target.getContext("2d");
      context.beginPath();
      context.arc(
        this.clickedEvent.layerX || this.clickedEvent.offsetX,
        this.clickedEvent.layerY || this.clickedEvent.offsetY,
        this.insideRadius,
        0,
        2 * Math.PI,
        false
      );
      context.fillStyle = this.clickedParentElement.dataset.color;// dataset.color=data-color(自定义属性)
      context.fill();
      this.insideRadius += 5;
      if (
        this.insideRadius <
        this.getTheBevel(
          this.clickedParentElement.offsetWidth,
          this.clickedParentElement.offsetHeight
        )
      ) {
        window.requestAnimationFrame(this.draw);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.por-canvas {
  cursor: pointer;
  opacity: 0.25;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
