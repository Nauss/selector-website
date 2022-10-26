import { component$, useStore } from '@builder.io/qwik'
import Logo from './logo'
import Menu from '../icons/menu'
import { Link } from '@builder.io/qwik-city'

export default component$(() => {
  const state = useStore({ menuOpen: false })
  return (
    <nav>
      <section class="flex items-center justify-between">
        <Logo />
        <Link
          href="/about"
          class="hidden sm:block text-xl hover:text-slate-700 transition duration-300"
        >
          A propos
        </Link>
        <button
          id="menu-button"
          aria-label="Menu"
          class="sm:hidden"
          onClick$={() => {
            state.menuOpen = !state.menuOpen
          }}
        >
          <Menu />
        </button>
      </section>

      <ul class={`${state.menuOpen ? 'flex' : 'hidden'}  justify-end pt-3`}>
        <li
          onClick$={() => {
            state.menuOpen = false
          }}
        >
          <Link
            href="/about"
            class="text-xl hover:text-slate-700 transition duration-300"
          >
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  )
})
