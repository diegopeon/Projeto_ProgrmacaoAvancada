<script setup>
import { computed, onMounted, ref } from 'vue'
import { games } from './data/games'
import Accordion from './components/Accordion.vue'
import Pagination from './components/Pagination.vue'
import ProgressBar from './components/ProgressBar.vue'
import Tabs from './components/Tabs.vue'
import DropdownMenu from './components/DropdownMenu.vue'
import ToastNotification from './components/ToastNotification.vue'

const currentPage = ref(1)
const itemsPerPage = 3
const progress = ref(46)
const selectedMood = ref('Todos')
const toasts = ref([])

const moodOptions = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Relaxar', value: 'Relaxar' },
  { label: 'Desafio', value: 'Desafio' },
  { label: 'História', value: 'História' },
  { label: 'Cooperativo', value: 'Cooperativo' }
]

const faqItems = [
  {
    title: 'Por que a Nexus Arcade é diferente?',
    content: 'Porque a vitrine parte da intenção do jogador: relaxar, competir, explorar, cooperar ou viver uma história.'
  },
  {
    title: 'O projeto usa Vue com Vite?',
    content: 'Sim. Esta versão usa Vite como ferramenta de build e Vue em arquitetura baseada em componentes.'
  },
  {
    title: 'Os componentes são reutilizáveis?',
    content: 'Sim. Acordeão, paginação, barra de progresso, abas, dropdown e toast recebem dados via props e emitem eventos quando necessário.'
  }
]

const profileTabs = [
  {
    title: 'Perfil',
    content: 'Jogador explorador, com preferência por RPGs narrativos, indies atmosféricos e jogos cooperativos.'
  },
  {
    title: 'Conquistas',
    content: '23 conquistas raras desbloqueadas, 4 campanhas finalizadas e 2 jogos platinados.'
  },
  {
    title: 'Recomendações',
    content: 'Com base no perfil, a plataforma sugere Hollow Signal, Cozy Planet e Neon Warden.'
  }
]

const libraryTags = ['Continuar jogando', 'Indies favoritos', 'Campanhas longas', 'Coop para amigos', 'Jogos rápidos']

const filteredGames = computed(() => {
  if (selectedMood.value === 'Todos') return games
  return games.filter((game) => game.mood === selectedMood.value)
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredGames.value.length / itemsPerPage)))

const visibleGames = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredGames.value.slice(start, start + itemsPerPage)
})

function changePage(page) {
  currentPage.value = page
}

function selectMood(option) {
  selectedMood.value = option.value
  currentPage.value = 1
  showToast('info', `Filtro aplicado: ${option.label}`)
}

function advanceProgress() {
  progress.value = progress.value >= 100 ? 0 : progress.value + 14
  showToast('success', `Progresso atualizado para ${progress.value}%.`)
}

function showToast(type, message) {
  const toast = {
    id: Date.now() + Math.random(),
    type,
    message
  }

  toasts.value.push(toast)

  // Remove automaticamente a notificação para cumprir o comportamento esperado do toast.
  window.setTimeout(() => removeToast(toast.id), 3500)
}

function removeToast(id) {
  toasts.value = toasts.value.filter((toast) => toast.id !== id)
}

// Lifecycle hook exigido pela atividade: executa após o componente principal montar.
onMounted(() => {
  showToast('info', 'Aplicação Vue + Vite carregada com sucesso.')
})
</script>

<template>
  <div class="app-shell">
    <div class="orb orb-one" aria-hidden="true"></div>
    <div class="orb orb-two" aria-hidden="true"></div>

    <header class="app-header">
      <a class="brand" href="#top" aria-label="Página inicial Nexus Arcade">
        <span class="brand-mark">N</span>
        <span>Nexus Arcade</span>
      </a>

      <nav class="main-nav" aria-label="Navegação principal">
        <a href="#catalogo">Catálogo</a>
        <a href="#componentes">Componentes</a>
        <a href="#biblioteca">Biblioteca</a>
      </nav>

      <button class="ghost-button" type="button" @click="showToast('info', 'Protótipo Vue + Vite pronto para avaliação.')">
        Status
      </button>
    </header>

    <main id="top" class="page-shell">
      <section class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Vue • Vite.js • Componentes</p>
          <h1>Uma loja gamer que escolhe pelo momento do jogador.</h1>
          <p>
            A Nexus Arcade organiza jogos por intenção: relaxar, competir, explorar, jogar com amigos
            ou viver uma história marcante. Este protótipo demonstra os seis componentes exigidos na atividade.
          </p>
          <div class="hero-actions">
            <button class="primary-button" type="button" @click="advanceProgress">Simular progresso</button>
            <button class="secondary-button" type="button" @click="showToast('success', 'Jogo adicionado à lista de desejos!')">
              Adicionar à wishlist
            </button>
          </div>
        </div>

        <article class="featured-card">
          <span class="badge">Jogo em destaque</span>
          <h2>Hollow Signal</h2>
          <p>RPG narrativo sobre uma estação orbital que responde às memórias do jogador.</p>
          <div class="stats-row">
            <span>RPG</span>
            <span>18h</span>
            <span>94%</span>
          </div>
        </article>
      </section>

      <section id="catalogo" class="section-card">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Catálogo emocional</p>
            <h2>Escolha como quer jogar hoje</h2>
          </div>
          <DropdownMenu :options="moodOptions" @select="selectMood" />
        </div>

        <div class="game-grid">
          <article v-for="game in visibleGames" :key="game.id" class="game-card">
            <div class="game-cover" :style="{ background: game.gradient }">
              <span>{{ game.mood }}</span>
            </div>
            <div class="game-content">
              <h3>{{ game.title }}</h3>
              <p>{{ game.description }}</p>
              <div class="game-meta">
                <span>{{ game.genre }}</span>
                <strong>{{ game.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</strong>
              </div>
            </div>
          </article>
        </div>

        <Pagination :current-page="currentPage" :total-pages="totalPages" @page-change="changePage" />
      </section>

      <section id="componentes" class="components-layout">
        <div class="section-card">
          <p class="eyebrow">Componente 1</p>
          <h2>Acordeão</h2>
          <Accordion :items="faqItems" />
        </div>

        <div class="section-card">
          <p class="eyebrow">Componente 2</p>
          <h2>Barra de progresso</h2>
          <p class="muted-text">Progresso simulado de sincronização da biblioteca gamer.</p>
          <ProgressBar :progress="progress" />
        </div>

        <div class="section-card wide-card">
          <p class="eyebrow">Componente 3</p>
          <h2>Abas</h2>
          <Tabs :tabs="profileTabs" />
        </div>
      </section>

      <section id="biblioteca" class="section-card library-panel">
        <p class="eyebrow">Biblioteca inteligente</p>
        <h2>Organização por intenção</h2>
        <p>
          Em vez de listar jogos apenas por ordem alfabética, a Nexus Arcade sugere categorias baseadas no uso real do jogador.
        </p>
        <div class="library-tags">
          <span v-for="tag in libraryTags" :key="tag">{{ tag }}</span>
        </div>
      </section>
    </main>

    <ToastNotification :toasts="toasts" @remove="removeToast" />
  </div>
</template>
