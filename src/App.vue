<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import LandingView from '@/views/LandingView.vue'
import Footer from '@/components/layout/Footer.vue'
import WhatsAppFloatingButton from '@/components/common/WhatsAppFloatingButton.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-parchment-100 text-charcoal-900 font-sans relative">
    <Navbar />
    <LandingView class="flex-grow" />
    <Footer />
    <WhatsAppFloatingButton />
  </div>
</template>

