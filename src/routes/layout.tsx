import { component$, Slot } from '@builder.io/qwik'
import Header from '../components/header/header'

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer class="text-center text-primary w-full">
        <a
          href="https://github.com/Nauss/selector"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fait avec ♡ par Nauss
        </a>
      </footer>
    </>
  )
})
