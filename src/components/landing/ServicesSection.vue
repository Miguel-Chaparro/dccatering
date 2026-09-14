<script setup lang="ts">
import { IMAGES } from '@/constants/cateringData'
</script>

<template>
  <section id="servicios" class="py-20 lg:py-28 bg-parchment-50 border-b border-parchment-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-20">
        <span class="text-xs uppercase tracking-[0.3em] text-burgundy-800 font-bold block mb-2">Propuestas a la Medida</span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-editorial-heading">
          Portafolio de Servicios Gastronómicos
        </h2>
        <p class="mt-4 text-charcoal-800 font-light leading-relaxed">
          Formatos flexibles y sofisticados pensados para conectar y deleitar en cualquier contexto.
        </p>
        <div class="w-20 h-0.5 bg-gold-500 mx-auto mt-4"></div>
      </div>

      <!-- Service Item 1: Catering Empresarial -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 pb-16 border-b border-parchment-200" data-purpose="service-corporate">
        <div class="lg:col-span-6 space-y-6">
          <span class="text-xs tracking-[0.25em] text-gold-600 font-semibold uppercase">03. Línea Corporativa</span>
          <h3 class="font-serif text-3xl sm:text-4xl text-burgundy-800 font-editorial-heading">
            Catering Empresarial
          </h3>
          <p class="text-charcoal-800 leading-relaxed font-light">
            Diseñamos soluciones gastronómicas para acompañar cada momento de la vida corporativa, combinando cocina elaborada con un servicio profesional, eficiente y sumamente atento.
          </p>
          <div class="space-y-3 pt-2">
            <div class="flex items-start gap-3">
              <span class="h-5 w-5 rounded-full bg-olive-700/10 text-olive-700 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <p class="text-sm text-charcoal-800"><strong class="font-medium text-charcoal-900">Almuerzos Servidos en Mesa:</strong> Presentación impecable para juntas directivas y encuentros ejecutivos.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="h-5 w-5 rounded-full bg-olive-700/10 text-olive-700 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <p class="text-sm text-charcoal-800"><strong class="font-medium text-charcoal-900">Box Lunch &amp; Pokes:</strong> Alternativas saludables y prácticas para jornadas de capacitación o trabajo dinámico.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="h-5 w-5 rounded-full bg-olive-700/10 text-olive-700 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <p class="text-sm text-charcoal-800"><strong class="font-medium text-charcoal-900">Buffets Corporativos:</strong> Variedad con estaciones dispuestas para libre elección en congresos y convenciones.</p>
            </div>
          </div>
          <div class="pt-4">
            <a class="inline-flex items-center text-xs tracking-widest uppercase font-semibold text-burgundy-800 hover:text-gold-600 transition-colors gap-2" href="#cotizar">
              Solicitar Menú Corporativo <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div class="lg:col-span-6">
          <div class="rounded-sm overflow-hidden border border-gold-500/20 shadow-lg">
            <img
              alt="Almuerzos Empresariales: Brochetas y Bowls"
              class="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              height="1688"
              width="3000"
              :src="IMAGES.serviceCorporate"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Service Item 2: Catering Social & Bodas -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 pb-16 border-b border-parchment-200" data-purpose="service-social">
        <div class="lg:col-span-6 order-2 lg:order-1">
          <div class="rounded-sm overflow-hidden border border-gold-500/20 shadow-lg">
            <img
              alt="Catering Social y Mesas de Postres para Bodas"
              class="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              height="1688"
              width="3000"
              :src="IMAGES.serviceSocial"
              loading="lazy"
            />
          </div>
        </div>
        <div class="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <span class="text-xs tracking-[0.25em] text-gold-600 font-semibold uppercase">04. Celebraciones Memorables</span>
          <h3 class="font-serif text-3xl sm:text-4xl text-olive-700 font-editorial-heading">
            Catering Social &amp; Bodas
          </h3>
          <p class="text-charcoal-800 leading-relaxed font-light">
            Celebraciones que merecen algo más que buena comida. En Diego Chaparro Catering creamos atmósferas gastronómicas personalizadas para acompañar bodas, aniversarios, cumpleaños y reuniones de familia.
          </p>
          <div class="space-y-3 pt-2">
            <div class="flex items-start gap-3">
              <span class="h-5 w-5 rounded-full bg-burgundy-700/10 text-burgundy-800 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <p class="text-sm text-charcoal-800"><strong class="font-medium text-charcoal-900">Banquetes de Boda:</strong> Tiempos diseñados a partir de los gustos y esencia de los novios.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="h-5 w-5 rounded-full bg-burgundy-700/10 text-burgundy-800 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <p class="text-sm text-charcoal-800"><strong class="font-medium text-charcoal-900">Mesa Dulce &amp; Pastelería Fina:</strong> Postres artesanales y montaje nupcial fotogénico.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="h-5 w-5 rounded-full bg-burgundy-700/10 text-burgundy-800 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <p class="text-sm text-charcoal-800"><strong class="font-medium text-charcoal-900">Eventos de Pequeño y Gran Formato:</strong> Cuidado de cada plato sin importar el aforo.</p>
            </div>
          </div>
          <div class="pt-4">
            <a class="inline-flex items-center text-xs tracking-widest uppercase font-semibold text-olive-700 hover:text-gold-600 transition-colors gap-2" href="#cotizar">
              Planear Mi Boda o Evento Social <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Service Item 3: Parrilladas & Experiencias Especiales -->
      <div id="experiencias" class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 pb-16 border-b border-parchment-200" data-purpose="service-special-experiences">
        <div class="lg:col-span-6 space-y-6">
          <span class="text-xs tracking-[0.25em] text-gold-600 font-semibold uppercase">05. Fuego Vivo &amp; Tertulias</span>
          <h3 class="font-serif text-3xl sm:text-4xl text-burgundy-800 font-editorial-heading">
            Parrilladas &amp; Servicios Especiales
          </h3>
          <p class="text-charcoal-800 leading-relaxed font-light">
            El fuego como punto de encuentro. Hay ocasiones en las que la gastronomía deja de ser parte del evento para convertirse en el centro del encuentro.
          </p>
          <p class="text-charcoal-800 text-sm leading-relaxed">
            Seleccionamos cortes premium, vegetales al carbón y cocciones lentas donde el aroma de las brasas y la calidez del cocinero en vivo brindan un espectáculo que une a las personas.
          </p>
          <ul class="space-y-2 text-sm text-charcoal-800">
            <li class="flex items-center gap-2"><span class="text-gold-500">◆</span> Estaciones de Parrilla de Autor en jardines o fincas</li>
            <li class="flex items-center gap-2"><span class="text-gold-500">◆</span> Servicio exclusivo de Chef a Domicilio</li>
            <li class="flex items-center gap-2"><span class="text-gold-500">◆</span> Tertulias y cenas maridaje guiadas</li>
          </ul>
          <div class="pt-4">
            <a class="inline-flex items-center text-xs tracking-widest uppercase font-semibold text-burgundy-800 hover:text-gold-600 transition-colors gap-2" href="#cotizar">
              Consultar Disponibilidad de Parrilla <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="rounded-sm overflow-hidden border border-gold-500/20 shadow-md">
            <img
              alt="Parrillada al carbón Diego Chaparro Catering"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              height="1688"
              width="3000"
              :src="IMAGES.serviceGrill"
              loading="lazy"
            />
          </div>
          <div class="rounded-sm overflow-hidden border border-gold-500/20 shadow-md">
            <img
              alt="Experiencias culinarias especiales con pasta artesanal"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              height="1688"
              width="3000"
              :src="IMAGES.servicePasta"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Service Item 4: Complementarios & To Go -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" data-purpose="service-complementary">
        <div class="lg:col-span-6 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="rounded-sm overflow-hidden border border-gold-500/20 shadow-md">
            <img
              alt="Tablas de quesos y jamones curados"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              height="1688"
              width="3000"
              :src="IMAGES.servicePlatters"
              loading="lazy"
            />
          </div>
          <div class="rounded-sm overflow-hidden border border-gold-500/20 shadow-md">
            <img
              alt="Estaciones de Café, canapés y bocados to-go"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              height="1688"
              width="3000"
              :src="IMAGES.serviceCoffeeToGo"
              loading="lazy"
            />
          </div>
        </div>
        <div class="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <span class="text-xs tracking-[0.25em] text-gold-600 font-semibold uppercase">06 &amp; 07. Formatos Prácticos</span>
          <h3 class="font-serif text-3xl sm:text-4xl text-charcoal-900 font-editorial-heading">
            Tablas Gourmet, Canapés &amp; Empacados al Vacío
          </h3>
          <p class="text-charcoal-800 leading-relaxed font-light">
            Soluciones diseñadas para compartir en espacios sin necesidad de cocina completa, o para abastecer fines de semana y reuniones con calidad de restaurante.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="p-4 bg-white border border-parchment-200 rounded-sm">
              <h4 class="font-serif text-lg text-burgundy-800 font-semibold">Tablas &amp; Jamones</h4>
              <p class="text-xs text-charcoal-800 mt-1 leading-normal">Charcutería selecta, quesos madurados y frutos para abrir una buena charla.</p>
            </div>
            <div class="p-4 bg-white border border-parchment-200 rounded-sm">
              <h4 class="font-serif text-lg text-burgundy-800 font-semibold">Estaciones de Café</h4>
              <p class="text-xs text-charcoal-800 mt-1 leading-normal">Café de origen, infusiones y repostería para recargar la jornada.</p>
            </div>
            <div class="p-4 bg-white border border-parchment-200 rounded-sm">
              <h4 class="font-serif text-lg text-burgundy-800 font-semibold">Canapés To Go</h4>
              <p class="text-xs text-charcoal-800 mt-1 leading-normal">Bocados dulces y salados presentados en cajas listas para repartir.</p>
            </div>
            <div class="p-4 bg-white border border-parchment-200 rounded-sm">
              <h4 class="font-serif text-lg text-burgundy-800 font-semibold">Empacados al Vacío</h4>
              <p class="text-xs text-charcoal-800 mt-1 leading-normal">Proteínas y guarniciones conservadas al vacío para calentar y disfrutar en casa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
