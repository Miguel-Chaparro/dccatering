<script setup lang="ts">
import { ref, reactive } from 'vue'
import { BRAND } from '@/constants/cateringData'
import type { QuoteFormState } from '@/types/catering'

const initialForm: QuoteFormState = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  tipo_evento: '',
  invitados: null,
  fecha: '',
  detalles: '',
}

const form = reactive<QuoteFormState>({ ...initialForm })
const isSubmitted = ref(false)
const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simular envío o integración con API/Azure Function
  await new Promise((resolve) => setTimeout(resolve, 800))
  
  isSubmitting.value = false
  isSubmitted.value = true
  
  // Reset form
  Object.assign(form, initialForm)

  // Auto-ocultar mensaje después de 6 segundos
  setTimeout(() => {
    isSubmitted.value = false
  }, 6000)
}
</script>

<template>
  <section id="cotizar" class="py-20 lg:py-28 bg-charcoal-900 text-parchment-50 relative overflow-hidden">
    <!-- Background subtle illumination -->
    <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-burgundy-900/40 rounded-full filter blur-3xl pointer-events-none"></div>
    <div class="absolute top-10 left-10 w-72 h-72 bg-gold-500/10 rounded-full filter blur-2xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- Contact Direct Info -->
        <div class="lg:col-span-5 space-y-8" data-purpose="contact-information">
          <span class="text-xs uppercase tracking-[0.3em] text-gold-400 font-bold block">10. Cierre y Contacto</span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-parchment-50 font-editorial-heading">
            Todo encuentro comienza con una idea.
          </h2>
          <p class="text-parchment-200 font-light leading-relaxed">
            Permítenos diseñar la propuesta gastronómica que se adapte con exactitud a los objetivos de tu empresa o a la magnitud de tu celebración.
          </p>

          <div class="space-y-6 pt-4 border-t border-charcoal-800">
            <a
              :href="BRAND.quoteWhatsAppUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 group p-2.5 -ml-2.5 rounded-sm hover:bg-charcoal-800 transition-all border border-transparent hover:border-gold-500/20"
            >
              <div class="h-12 w-12 rounded-sm bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform flex-shrink-0">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs uppercase tracking-widest text-parchment-200 flex items-center gap-2">
                  Línea Directa / WhatsApp
                  <span class="text-[9px] bg-[#25D366]/20 text-[#25D366] px-1.5 py-0.5 rounded-full font-semibold">Chatear</span>
                </p>
                <p class="font-serif text-lg text-parchment-50 font-medium group-hover:text-gold-400 transition-colors">{{ BRAND.phone }}</p>
              </div>
            </a>

            <div class="flex items-center gap-4 p-2.5 -ml-2.5">
              <div class="h-12 w-12 rounded-sm bg-burgundy-900/60 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
              </div>
              <div>
                <p class="text-xs uppercase tracking-widest text-parchment-200">Cotizaciones &amp; Propuestas</p>
                <p class="font-serif text-lg text-parchment-50 font-medium">{{ BRAND.email }}</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="h-12 w-12 rounded-sm bg-burgundy-900/60 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                </svg>
              </div>
              <div>
                <p class="text-xs uppercase tracking-widest text-parchment-200">Cobertura</p>
                <p class="font-serif text-base text-parchment-50 font-medium">{{ BRAND.coverage }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Quote Form -->
        <div class="lg:col-span-7 bg-white text-charcoal-900 p-8 sm:p-10 rounded-sm shadow-2xl border border-gold-500/30" data-purpose="quote-form-container">
          <h3 class="font-serif text-2xl sm:text-3xl text-burgundy-800 font-editorial-heading mb-2">
            Solicitar Propuesta Gastronómica
          </h3>
          <p class="text-xs text-charcoal-800 uppercase tracking-widest mb-6 font-medium">
            Completa los datos y te enviaremos una propuesta formal en menos de 24 horas.
          </p>

          <form id="catering-quote-form" class="space-y-4" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1" for="nombre">Nombre Completo *</label>
                <input
                  id="nombre"
                  v-model="form.nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Ej. Camila Morales"
                  class="w-full text-sm border border-parchment-200 focus:border-burgundy-800 focus:ring-1 focus:ring-burgundy-800 rounded-sm bg-parchment-50 p-2.5 text-charcoal-900 outline-none"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1" for="empresa">Empresa / Organización (Opcional)</label>
                <input
                  id="empresa"
                  v-model="form.empresa"
                  name="empresa"
                  type="text"
                  placeholder="Ej. Grupo Andino"
                  class="w-full text-sm border border-parchment-200 focus:border-burgundy-800 focus:ring-1 focus:ring-burgundy-800 rounded-sm bg-parchment-50 p-2.5 text-charcoal-900 outline-none"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1" for="email">Correo Electrónico *</label>
                <input
                  id="email"
                  v-model="form.email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@empresa.com"
                  class="w-full text-sm border border-parchment-200 focus:border-burgundy-800 focus:ring-1 focus:ring-burgundy-800 rounded-sm bg-parchment-50 p-2.5 text-charcoal-900 outline-none"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1" for="telefono">Teléfono Móvil *</label>
                <input
                  id="telefono"
                  v-model="form.telefono"
                  name="telefono"
                  type="tel"
                  required
                  placeholder="+57 313 407 5240"
                  class="w-full text-sm border border-parchment-200 focus:border-burgundy-800 focus:ring-1 focus:ring-burgundy-800 rounded-sm bg-parchment-50 p-2.5 text-charcoal-900 outline-none"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1" for="tipo_evento">Tipo de Evento *</label>
                <select
                  id="tipo_evento"
                  v-model="form.tipo_evento"
                  name="tipo_evento"
                  required
                  class="w-full text-sm border border-parchment-200 focus:border-burgundy-800 focus:ring-1 focus:ring-burgundy-800 rounded-sm bg-parchment-50 p-2.5 text-charcoal-900 outline-none"
                >
                  <option value="">Selecciona...</option>
                  <option value="corporativo">Catering Empresarial</option>
                  <option value="social">Boda / Social</option>
                  <option value="parrillada">Parrillada al Carbón</option>
                  <option value="privado">Chef a Domicilio / Intimo</option>
                  <option value="togo">Bocados To-Go &amp; Tablas</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1" for="invitados">Nº Invitados aprox. *</label>
                <input
                  id="invitados"
                  v-model.number="form.invitados"
                  name="invitados"
                  type="number"
                  min="5"
                  required
                  placeholder="Ej. 60"
                  class="w-full text-sm border border-parchment-200 focus:border-burgundy-800 focus:ring-1 focus:ring-burgundy-800 rounded-sm bg-parchment-50 p-2.5 text-charcoal-900 outline-none"
                />
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1" for="fecha">Fecha Estimada *</label>
                <input
                  id="fecha"
                  v-model="form.fecha"
                  name="fecha"
                  type="date"
                  required
                  class="w-full text-sm border border-parchment-200 focus:border-burgundy-800 focus:ring-1 focus:ring-burgundy-800 rounded-sm bg-parchment-50 p-2.5 text-charcoal-900 outline-none"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1" for="detalles">Detalles del Evento o Requerimientos de Menú</label>
              <textarea
                id="detalles"
                v-model="form.detalles"
                name="detalles"
                rows="3"
                placeholder="Lugar previsto, preferencias vegetarianas, estilo de montaje deseado..."
                class="w-full text-sm border border-parchment-200 focus:border-burgundy-800 focus:ring-1 focus:ring-burgundy-800 rounded-sm bg-parchment-50 p-2.5 text-charcoal-900 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-3.5 px-6 rounded-sm bg-burgundy-800 hover:bg-burgundy-700 disabled:opacity-75 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg border border-gold-500/40 cursor-pointer"
            >
              <span v-if="!isSubmitting">Solicitar Propuesta Personalizada</span>
              <span v-else>Enviando solicitud...</span>
            </button>
          </form>

          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 transform -translate-y-2"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="isSubmitted"
              id="form-success-msg"
              class="mt-4 p-3 bg-olive-700 text-white text-xs text-center rounded-sm font-medium"
            >
              ¡Gracias por contactarnos! El Chef {{ BRAND.chef }} y su equipo responderán tu solicitud a la brevedad.
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
