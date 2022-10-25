import { component$ } from '@builder.io/qwik'
import Navbar from './navbar'

export default component$(() => {
  return (
    <header class="bg-primary py-5 px-3 w-full">
      <Navbar />
    </header>
  )
})
