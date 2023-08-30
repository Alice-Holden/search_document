<script setup>
import {defineProps, defineEmits} from "vue";

//передать props в компонент text
defineProps({
  text: {
    type: String,
    default: 'Скачать'
  },
  type: {
    type: String,
    default: 'primary'
  },
  width: {
    type: String,
    default: '100%'
  },
  disabled: {
    type: Boolean,
    default: false
  },
})
const emit = defineEmits(['click'])

</script>

<template>
    <div
        class="basic-button"
        :class="{'basic-button--secondary': type === 'secondary', 'basic-button__primary': type === 'primary', 'basic-button--disabled': disabled}"
        :style="{width: width}"
        @click="emit('click')"
    >
      {{text}}
    </div>
</template>

<style scoped lang="scss">
.basic-button{
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  &__primary{
    border: 1px solid rgb(13, 110, 253);
    color: rgb(13, 110, 253);
  }
  &--secondary{
    border:  1px solid rgba(220, 53, 69);
    color: rgba(220, 53, 69);
  }
  &--disabled{
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
  }

}

</style>