<script setup lang="ts">
const { locale } = useI18n()
const colorMode = useColorMode()
const isLenguageMenuOpen = ref(false)

onBeforeMount( () => {
  const theme = localStorage.getItem("theme") || "light"
  colorMode.preference = theme;
})

const switchColorMode = () => {
    if (colorMode.preference === "light") {
      colorMode.preference = "dark"
    }
    else if(colorMode.preference === "dark"){
      colorMode.preference = "system"
    }
    else{
        colorMode.preference = "light"
    }
    localStorage.setItem("theme", colorMode.preference)
}
</script>

<template>
  <nav class="dark:bg-slate-800 flex justify-between items-center px-4">
    <h1
      class="text-center text-2xl xl:text-4xl font-black my-3 gradient-title"
    >
      {{ $t('appTittle') }}
    </h1>
    <div class="flex">
      <SharedButton
        class="mx-[2px] lg:px-3 xl:mx-3 flex-col active:bg-blue-900 overflow-hidden"
        @click="switchColorMode"
      >
        <Transition name="slide-up">
          <button 
            v-if="colorMode.preference === 'system'"
          >
            <SunIcon />
          </button>
          <button 
            v-else-if="colorMode.preference === 'light'"
          >
            <MoonIcon />
          </button>
          <button 
            v-else-if="colorMode.preference === 'dark'"
          >
            <MonitorIcon class="hidden xl:inline-block" />
            <SmartphoneIcon class="xl:hidden" />
          </button>
        </Transition>
      </SharedButton>
      <div class="flex mx-[2px] justify-center items-center">
        <div class="relative inline-block text-left">
          <div>
            <SharedButton
              type="button"
              class="px-3"
              @click="isLenguageMenuOpen = !isLenguageMenuOpen"
            >
              <GlobeIcon />
            </SharedButton>
          </div>

          <div
            :class="{ 'hidden': !isLenguageMenuOpen }"
            class="z-10 origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div
              class="py-1"
              role="none"
            >
              <button
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900"
                role="menuitem"
                @click="() => { locale = 'en'; isLenguageMenuOpen = false }"
              >
                ENG
              </button>
              <button
                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900"
                role="menuitem"
                @click="() => { locale = 'sp'; isLenguageMenuOpen = false }"
              >
                ESP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss">
body {
    @apply min-h-screen bg-white dark:bg-gray-900 dark:text-gray-200;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: margin 0.15s ease-out, opacity .15s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  margin: 30px 0 0 0;

}

.slide-up-leave-to {
  opacity: 0;
  margin: -30px 0 0 0;
  /* transform: translateX(30px); */
}
</style>