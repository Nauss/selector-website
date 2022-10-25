import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <a
      href="/"
      class="flex items-center space-x-3 hover:text-slate-700 transition duration-300"
    >
      <div class="bg-background w-10 h-10 rounded-full flex items-center justify-center">
        <img src="icon.png" alt="Logo" class="w-7 h-7" />
      </div>
      <span class="text-3xl font-bold content-center">Selector</span>
    </a>
  )
})
