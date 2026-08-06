<script setup lang="ts">
  import { computed } from 'vue'
  import type { RouteLocationRaw } from 'vue-router'

  type Variant = 'none' | 'primary' | 'success' | 'secondary' | 'danger' | 'info'
  type ButtonType = 'button' | 'submit' | 'icon'

  interface Props {
    to?: RouteLocationRaw,
    loading?: boolean,
    disabled?: boolean,
    variant?: Variant,
    type?: ButtonType,
  }

  const props = withDefaults(defineProps<Props>(), {
    to: undefined,
    class: undefined,
    variant: 'primary',
    type: 'button',
  })

  const htmlType = computed(() => props.type === 'submit' ? 'submit' : 'button')

  const buttonClass = computed(() => {
    if (props.variant === 'none') {
      return []
    }

    const classes = [`btn-${props.variant}`]
    if (props.type === 'icon') {
      classes.push('btn-icon')
    } else {
      classes.push('btn')
    }
    return classes
  })
</script>

<template>
  <component
    :is="to && !(disabled || loading) ? 'router-link' : 'button'"
    :to="to"
    :type="htmlType"
    :class="buttonClass"
    :disabled="disabled || loading">
    <slot></slot>
    <app-animated-dot v-if="loading" />
  </component>
</template>
