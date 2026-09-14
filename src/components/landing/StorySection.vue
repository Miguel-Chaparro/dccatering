<script setup lang="ts">
import { BRAND, PRINCIPLES, IMAGES } from '@/constants/cateringData'
</script>

<template>
  <section id="historia" class="py-20 lg:py-28 bg-parchment-100 border-b border-parchment-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs uppercase tracking-[0.3em] text-burgundy-800 font-bold block mb-2">01. Nuestra Historia</span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-editorial-heading">
          Antes de existir una empresa, existía una cocina
        </h2>
        <div class="w-20 h-0.5 bg-gold-500 mx-auto mt-4"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Chef Portrait & Badge Column -->
        <div class="lg:col-span-5 order-2 lg:order-1" data-purpose="chef-portrait">
          <div class="relative">
            <div class="relative rounded-sm overflow-hidden border border-gold-500/30 shadow-xl bg-charcoal-900">
              <img
                :alt="BRAND.role + ' ' + BRAND.chef"
                class="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                height="1688"
                width="3000"
                :src="IMAGES.chefPortrait"
                loading="lazy"
              />
              <div class="p-4 bg-charcoal-900 text-center border-t border-gold-500/20">
                <h3 class="font-serif text-lg tracking-widest text-parchment-50 uppercase font-medium">{{ BRAND.chef }}</h3>
                <p class="text-xs text-gold-400 uppercase tracking-widest">{{ BRAND.role }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Manifest Narrative Column -->
        <div class="lg:col-span-7 order-1 lg:order-2 space-y-6" data-purpose="chef-manifesto">
          <h3 class="text-xl sm:text-2xl font-serif text-olive-700 italic">
            "Comenzó en la cocina familiar, donde cocinar era una forma de compartir, aprender y estar juntos."
          </h3>
          <p class="text-charcoal-800 leading-relaxed">
            Desde niño, descubrí que detrás de cada preparación podía existir algo más que alimento: un recuerdo, una emoción o un momento irrepetible alrededor de la mesa. Con los años, aquella pasión se convirtió en profesión y en la manera de entender la gastronomía.
          </p>
          <p class="text-charcoal-800 leading-relaxed font-light">
            Así nació <strong class="font-semibold text-burgundy-800">{{ BRAND.name }}</strong>: no como una empresa dedicada simplemente a preparar y servir alimentos, sino como una propuesta gastronómica creada para llevar la cocina a diferentes espacios y transformar cada ocasión en una experiencia memorable.
          </p>

          <!-- 5 Fundamental Action Verbs -->
          <div class="pt-6">
            <h4 class="text-xs uppercase tracking-[0.25em] text-gold-600 font-bold mb-4">Nuestros Principios en Cocina</h4>
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              <div
                v-for="principle in PRINCIPLES"
                :key="principle.id"
                :class="[
                  'p-3 bg-white border border-parchment-200 rounded-sm',
                  principle.number === '05' ? 'col-span-2 sm:col-span-1' : ''
                ]"
              >
                <span class="block font-serif text-lg text-burgundy-800 font-bold">{{ principle.number }}</span>
                <span class="text-xs tracking-wider text-charcoal-900 uppercase">{{ principle.title }}</span>
              </div>
            </div>
          </div>

          <div class="pt-4 border-l-2 border-gold-500 pl-4 italic text-charcoal-800 text-sm">
            "No buscamos únicamente que recuerden lo que comieron; queremos que recuerden cómo se sintieron."
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
