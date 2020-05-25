<template>
  <el-popover placement="bottom-start"
              popper-class="pupop-select-icon"
              transition="el-zoom-in-top"
              trigger="click"
              v-model="popoverVisible"
              :disabled="disabledSelected">
    <!-- 弹出框内容区 -->
    <el-scrollbar v-if="popoverVisible"
                  class="hide-x"
                  :native="false"
                  :noresize="false">
      <!-- 图标项 -->
      <div class="icon-item"
           v-for="item in options"
           :key="item"
           @click="onClickSelected(item)">
        <i :class="item"></i>
      </div>
    </el-scrollbar>
    <!-- 页面显示内容区 -->
    <el-input slot="reference"
              ref="input"
              v-model="value"
              clearable
              :size="size"
              :style="`width: ${width}px`"
              suffix-icon="el-icon-arrow-down"
              :placeholder="placeholder">
    </el-input>
  </el-popover>
</template>

<script>
import iconList from "@/config/iconList";
export default {
  name: 'SelectIcon',
  // 设置绑定参数
  model: {
    prop: 'value',
    event: 'selected',
  },
  props: {
    // 输入框宽度
    width: String,
    // 输入框占位符
    placeholder: {
      type: String,
      required: false,
      default: '请选择',
    },
    // 按钮大小
    size: {
      type: String,
      default: 'small'
    },
    disabled: Boolean,
    // 接收绑定参数 - 图标类名
    value: {
      type: String,
      required: true,
    },
    // 选项数据，图标类名数组
    options: {
      type: Array,
      default: () => ([...iconList[0].list, ...iconList[1].list]),
    },
  },
  computed: {
    disabledSelected () {
      if (this.disabled) return true;
      return this.$parent.form ? this.$parent.form.disabled : false;
    },
  },
  data () {
    return {
      // 弹出框显示状态
      popoverVisible: false,
    };
  },
  methods: {
    // 是否为当前已选项
    isActive (item) {
      return this.value === item;
    },
    // 选中图标
    onClickSelected (item) {
      this.$emit('selected', item);
      this.popoverVisible = false;
    },
    // 清空选项
    onClickClear () {
      this.$emit('selected', '');
    },
  },
};
</script>

<style lang="scss">
.hide-x {
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  .icon-item {
    display: inline-block;
    cursor: pointer;
    padding: 10px;
    i {
      font-size: 40px;
    }
  }
}
</style>
