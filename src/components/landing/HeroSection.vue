<script setup lang="ts">
import { BRAND, IMAGES } from '@/constants/cateringData'
</script>

<template>
  <section class="relative bg-parchment-50 overflow-hidden py-16 lg:py-24 border-b border-parchment-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Hero Text Content -->
        <div class="lg:col-span-6 space-y-8" data-purpose="hero-narrative">
          <div class="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-parchment-200 border border-gold-500/30">
            <span class="h-2 w-2 rounded-full bg-olive-700 animate-pulse"></span>
            <span class="text-xs font-semibold tracking-widest text-olive-700 uppercase">Catering &amp; Banquetería de Autor</span>
          </div>
          
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-[1.1] font-editorial-heading">
            {{ BRAND.tagline }}. <br />
            <span class="italic font-normal text-burgundy-800">Gastronomía creada</span> para experiencias extraordinarias.
          </h1>
          
          <p class="text-base sm:text-lg text-charcoal-800 font-light leading-relaxed max-w-xl">
            Convertimos cada ocasión en una propuesta culinaria a la medida donde la técnica refinada, la pasión y el cuidado riguroso por el detalle van mucho más allá del plato.
          </p>
          
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              class="inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-burgundy-800 hover:bg-burgundy-700 text-parchment-50 text-xs font-semibold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 border border-burgundy-700 text-center"
              href="#servicios"
            >
              Explorar Servicios
            </a>
            <a
              class="inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-transparent hover:bg-parchment-200 text-charcoal-900 text-xs font-semibold uppercase tracking-widest border border-charcoal-800 transition-all duration-300 text-center"
              href="#cotizar"
            >
              Agendar Consulta con el Chef
            </a>
          </div>

          <!-- Trust Badge -->
          <div class="pt-6 border-t border-parchment-200 flex items-center gap-6">
            <div>
              <p class="font-serif text-2xl font-bold text-burgundy-800">+10 Años</p>
              <p class="text-xs text-charcoal-800 uppercase tracking-wider">Creando memorias gastronómicas</p>
            </div>
            <div class="h-10 w-px bg-parchment-200"></div>
            <div>
              <p class="font-serif text-2xl font-bold text-olive-700">100%</p>
              <p class="text-xs text-charcoal-800 uppercase tracking-wider">Servicio &amp; Menús a Medida</p>
            </div>
          </div>
        </div>

        <!-- Hero Image Showcase -->
        <div class="lg:col-span-6 relative" data-purpose="hero-media">
          <div class="relative mx-auto max-w-lg lg:max-w-none">
            <div class="absolute -top-4 -left-4 w-72 h-72 bg-gold-400/10 rounded-full filter blur-3xl pointer-events-none"></div>
            
            <!-- Food Plating Presentation -->
            <div class="relative rounded-sm overflow-hidden hero-mask border-2 border-gold-500/20 bg-white">
              <img
                :alt="'Platillo de autor por ' + BRAND.name"
                class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                height="1688"
                width="3000"
                :src="IMAGES.heroPlate"
                fetchpriority="high"
              />
            </div>

            <!-- Editorial Float Badge -->
            <div class="absolute -bottom-6 -left-4 sm:left-6 bg-charcoal-900 text-parchment-50 p-5 rounded-sm shadow-2xl border-l-4 border-gold-400 max-w-xs">
              <p class="font-serif text-sm tracking-wide italic text-parchment-200">
                "Porque en cada encuentro, una buena experiencia culinaria también comunica."
              </p>
              <span class="block mt-2 text-[10px] uppercase tracking-widest text-gold-400">
                — {{ BRAND.chef }}, {{ BRAND.role.split('&')[0].trim() }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
