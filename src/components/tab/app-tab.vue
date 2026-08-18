<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'

  const props = defineProps<{
    tabs: TabType[],
    asRoute?: boolean,
    asParam?: boolean,
    paramName?: string,
  }>()

  const route = useRoute()
  const router = useRouter()
  const selectedTab = defineModel<string>()

  const selectTab = (tab: TabType) => {
    selectedTab.value = tab.value

    if (props.asParam && props.paramName) {
      router.push({
        query: {
          ...route.query,
          [props.paramName]: tab.value,
        },
      })
    }
  }

  const initializeTab = () => {
    if (selectedTab.value !== undefined || !props.tabs.length) {
      return
    }

    if (props.asRoute) {
      const lastPath = route.path.split('/').filter(Boolean).pop()

      selectedTab.value =
        props.tabs.find(tab =>
          tab.value === route.path ||
          tab.value === `/${lastPath}`,
        )?.value ?? props.tabs[0].value

      return
    }

    if (props.asParam && props.paramName) {
      const paramValue = route.query[props.paramName]

      if (typeof paramValue === 'string') {
        selectedTab.value =
          props.tabs.find(tab => tab.value === paramValue)?.value
          ?? props.tabs[0].value
      } else {
        selectedTab.value = props.tabs[0].value
      }

      return
    }

    selectedTab.value = props.tabs[0].value
  }

  initializeTab()
</script>

<template>
  <div class="flex">
    <template
      v-for="tab in props.tabs"
      :key="tab.value">
      <slot
        name="tab"
        :tab="tab"
        :selected="selectedTab === tab.value">
        <app-tab-item
          :tab="tab"
          :active="selectedTab === tab.value"
          :to="asRoute ? tab.value : undefined"
          @click="selectTab(tab)" />
      </slot>
    </template>
  </div>
</template>
