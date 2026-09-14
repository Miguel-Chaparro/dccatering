<script setup lang="ts">
import { BRAND } from '@/constants/cateringData'
</script>

<template>
  <section id="redes" class="py-20 lg:py-28 bg-parchment-200/60 border-b border-parchment-200 relative overflow-hidden">
    <!-- Subtle luxury background glow -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full filter blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs uppercase tracking-[0.3em] text-burgundy-800 font-bold block mb-2">
          09. Comunidad Digital
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-editorial-heading">
          Síguenos en Redes Sociales
        </h2>
        <p class="mt-4 text-charcoal-800 font-light leading-relaxed">
          Descubre en tiempo real nuestras puestas en escena, técnicas culinarias de autor y el ambiente que creamos en cada celebración.
        </p>
        <div class="w-20 h-0.5 bg-gold-500 mx-auto mt-4"></div>
      </div>

      <!-- Highlighted Social Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-purpose="social-networks-showcase">
        <!-- Instagram Card -->
        <a
          href="https://www.instagram.com/diegoccatering/"
          target="_blank"
          rel="noopener noreferrer"
          class="group bg-white p-7 rounded-sm border border-parchment-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
        >
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"></div>
          <div>
            <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md mb-5 group-hover:scale-110 transition-transform">
              <!-- Instagram SVG -->
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span class="text-[11px] uppercase tracking-widest text-burgundy-800 font-bold block">Instagram</span>
            <p class="font-serif text-xl font-bold text-charcoal-900 mt-0.5">/diegoccatering/</p>
            <p class="text-xs text-charcoal-800 leading-relaxed mt-2 font-light">
              Nuestras creaciones culinarias, reels de emplatado de autor y montajes nupciales.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-parchment-200 flex items-center justify-between text-xs font-semibold text-burgundy-800 group-hover:text-gold-600 transition-colors">
            <span>Ver perfil</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </a>

        <!-- TikTok Card -->
        <a
          href="https://www.tiktok.com/@diegoccatering/"
          target="_blank"
          rel="noopener noreferrer"
          class="group bg-white p-7 rounded-sm border border-parchment-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
        >
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#fe0979]"></div>
          <div>
            <div class="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shadow-md mb-5 group-hover:scale-110 transition-transform">
              <!-- TikTok SVG -->
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
            <span class="text-[11px] uppercase tracking-widest text-olive-700 font-bold block">TikTok</span>
            <p class="font-serif text-xl font-bold text-charcoal-900 mt-0.5">/diegoccatering/</p>
            <p class="text-xs text-charcoal-800 leading-relaxed mt-2 font-light">
              Técnicas en parrilla de brasas, tips de cocina del chef y detrás de escena con ritmo.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-parchment-200 flex items-center justify-between text-xs font-semibold text-olive-700 group-hover:text-gold-600 transition-colors">
            <span>Seguir en TikTok</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </a>

        <!-- Facebook Card -->
        <a
          href="https://www.facebook.com/diegoccatering/"
          target="_blank"
          rel="noopener noreferrer"
          class="group bg-white p-7 rounded-sm border border-parchment-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
        >
          <div class="absolute top-0 left-0 w-full h-1 bg-[#1877F2]"></div>
          <div>
            <div class="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md mb-5 group-hover:scale-110 transition-transform">
              <!-- Facebook SVG -->
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <span class="text-[11px] uppercase tracking-widest text-[#1877F2] font-bold block">Facebook</span>
            <p class="font-serif text-xl font-bold text-charcoal-900 mt-0.5">/diegoccatering/</p>
            <p class="text-xs text-charcoal-800 leading-relaxed mt-2 font-light">
              Eventos corporativos completos, álbumes de boda, opiniones y comunidad.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-parchment-200 flex items-center justify-between text-xs font-semibold text-[#1877F2] group-hover:text-gold-600 transition-colors">
            <span>Visitar página</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </a>

        <!-- YouTube Card -->
        <a
          href="https://www.youtube.com/@diegoccatering/"
          target="_blank"
          rel="noopener noreferrer"
          class="group bg-white p-7 rounded-sm border border-parchment-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
        >
          <div class="absolute top-0 left-0 w-full h-1 bg-[#FF0000]"></div>
          <div>
            <div class="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-md mb-5 group-hover:scale-110 transition-transform">
              <!-- YouTube SVG -->
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <span class="text-[11px] uppercase tracking-widest text-[#FF0000] font-bold block">YouTube</span>
            <p class="font-serif text-xl font-bold text-charcoal-900 mt-0.5">/diegoccatering/</p>
            <p class="text-xs text-charcoal-800 leading-relaxed mt-2 font-light">
              Reportajes de eventos de gran escala, masterclasses y entrevistas gastronómicas.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-parchment-200 flex items-center justify-between text-xs font-semibold text-[#FF0000] group-hover:text-gold-600 transition-colors">
            <span>Suscribirse</span>
            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </a>
      </div>

      <!-- Quick WhatsApp Consultation Banner in Social Section -->
      <div class="mt-14 p-8 bg-charcoal-900 text-parchment-50 rounded-sm border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div class="space-y-2 text-center md:text-left">
          <span class="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">Atención Personalizada Inmediata</span>
          <h3 class="font-serif text-2xl sm:text-3xl text-parchment-50 font-editorial-heading">
            ¿Deseas una respuesta rápida para tu evento?
          </h3>
          <p class="text-xs sm:text-sm text-parchment-200 font-light max-w-xl">
            Comunícate directamente con nuestro equipo de asesores gastronómicos vía WhatsApp al 
            <strong class="font-semibold text-gold-400">{{ BRAND.phone }}</strong>.
          </p>
        </div>
        <a
          :href="BRAND.quoteWhatsAppUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 px-7 py-3.5 rounded-sm bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Chatear con un Asesor</span>
        </a>
      </div>
    </div>
  </section>
</template>
