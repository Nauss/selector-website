import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Hero from '~/components/hero/hero'

export default component$(() => {
  return (
    <div>
      <Hero />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Selector - Bientôt disponible !',
}
