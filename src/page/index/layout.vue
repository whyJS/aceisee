<template>
  <div>
    <keep-alive>
      <router-view class="aceisee-view" v-if="$route.meta.$keepAlive" />
    </keep-alive>
    <router-view class="aceisee-view" v-if="!$route.meta.$keepAlive" />
  </div>
</template>
