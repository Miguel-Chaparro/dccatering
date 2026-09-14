<script setup lang="ts">
import { PROCESS_STEPS } from '@/constants/cateringData'
</script>

<template>
  <section id="proceso" class="py-20 lg:py-28 bg-parchment-100 border-b border-parchment-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs uppercase tracking-[0.3em] text-burgundy-800 font-bold block mb-2">08. Metodología de Excelencia</span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-editorial-heading">
          Nuestro Proceso
        </h2>
        <p class="mt-4 text-charcoal-800 font-light leading-relaxed">
          De la primera conversación al último detalle, estamos presentes en cada etapa para garantizar un servicio sin fisuras.
        </p>
        <div class="w-20 h-0.5 bg-gold-500 mx-auto mt-4"></div>
      </div>

      <!-- 5 Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4" data-purpose="process-flow-steps">
        <div
          v-for="step in PROCESS_STEPS"
          :key="step.step"
          :class="[
            'bg-white p-6 rounded-sm border-t-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow',
            step.borderColorClass
          ]"
        >
          <div>
            <span :class="['font-serif text-4xl font-bold block mb-3', step.accentColorClass]">
              {{ step.step }}
            </span>
            <h3 class="font-serif text-xl font-bold text-charcoal-900 mb-2">
              {{ step.title }}
            </h3>
            <p class="text-xs text-charcoal-800 leading-relaxed font-light">
              {{ step.description }}
            </p>
          </div>
          <span :class="['text-[10px] uppercase tracking-wider mt-6 font-semibold block', step.accentColorClass]">
            {{ step.phase }}
          </span>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="font-serif italic text-lg text-charcoal-800 tracking-wide">
          "Tu idea marca el comienzo. Nosotros nos encargamos de llevarla hasta la mesa."
        </p>
      </div>
    </div>
  </section>
</template>
