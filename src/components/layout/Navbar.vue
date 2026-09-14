<script setup lang="ts">
import { ref } from 'vue'
import { BRAND, NAV_ITEMS } from '@/constants/cateringData'

const isMobileOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
}

const closeMobileMenu = () => {
  isMobileOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 glass-nav bg-charcoal-900/95 border-b border-gold-500/20 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo Brand -->
        <a class="flex items-center gap-3 group" data-purpose="brand-logo" href="#">
          <div class="h-14 w-14 rounded-full overflow-hidden border border-gold-400/40 p-1 bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img
              :alt="BRAND.name + ' Logo'"
              class="h-full w-full object-contain"
              height="150"
              width="150"
              :src="BRAND.logoUrl"
              loading="eager"
            />
          </div>
          <div class="flex flex-col">
            <span class="font-serif text-xl tracking-wider text-parchment-50 uppercase font-semibold">{{ BRAND.shortName }}</span>
            <span class="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-medium">{{ BRAND.chef }}</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-parchment-200" data-purpose="primary-navigation">
          <a
            v-for="item in NAV_ITEMS"
            :key="item.href"
            :href="item.href"
            class="hover:text-gold-400 transition-colors duration-200 py-1 border-b border-transparent hover:border-gold-400"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- CTA Buttons -->
        <div class="hidden sm:flex items-center gap-3">
          <a
            :href="BRAND.quoteWhatsAppUrl"
            target="_blank"
            rel="noopener noreferrer"
            title="Chatear con un asesor por WhatsApp (+57 313 407 5240)"
            class="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-sm bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-emerald-500/20"
            aria-label="Hablar con asesor por WhatsApp"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
          <a
            class="inline-flex items-center justify-center px-6 py-2.5 rounded-sm bg-burgundy-800 hover:bg-burgundy-700 text-parchment-50 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-gold-500/20 border border-gold-500/40"
            href="#cotizar"
          >
            Cotizar mi Evento
          </a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex md:hidden">
          <button
            aria-label="Abrir menú"
            :aria-expanded="isMobileOpen"
            class="text-parchment-200 hover:text-gold-400 p-2 focus:outline-none"
            data-purpose="mobile-nav-toggle"
            type="button"
            @click="toggleMobileMenu"
          >
            <svg v-if="!isMobileOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Dropdown -->
    <div
      v-show="isMobileOpen"
      class="md:hidden bg-charcoal-900 border-t border-charcoal-800 px-4 pt-3 pb-6 space-y-3 transition-all duration-200"
    >
      <a
        v-for="item in NAV_ITEMS"
        :key="'mobile-' + item.href"
        :href="item.href"
        class="block text-parchment-200 text-sm tracking-wider uppercase py-2 hover:text-gold-400"
        @click="closeMobileMenu"
      >
        {{ item.label }}
      </a>
      <div class="pt-2 space-y-2">
        <a
          :href="BRAND.quoteWhatsAppUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 w-full text-center py-3 bg-[#25D366] text-white font-semibold tracking-wider text-xs uppercase rounded-sm"
          @click="closeMobileMenu"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          Hablar con Asesor
        </a>
        <a
          class="block w-full text-center py-3 bg-burgundy-800 text-parchment-50 font-semibold tracking-wider text-xs uppercase rounded-sm border border-gold-500/40"
          href="#cotizar"
          @click="closeMobileMenu"
        >
          Cotizar mi Evento
        </a>
      </div>
    </div>
  </header>
</template>
