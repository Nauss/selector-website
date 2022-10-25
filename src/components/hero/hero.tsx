import { component$, useStore } from '@builder.io/qwik'

export default component$(() => {
  const state = useStore({ index: 0 })

  return (
    <div class="relative my-8 mx-auto max-w-7xl">
      <div class="relative h-96 md:h-160 overflow-hidden">
        <div
          class={`
          ${state.index === 0 ? 'opacity-100' : 'opacity-0'}
           block duration-700 ease-in-out`}
        >
          <img
            src="selector-1.jpg"
            class={`hero absolute block w-full h-full object-scale-down md:object-contain`}
            alt="3 Selector en noir et blanc"
          />
        </div>
        <div
          class={`
          ${state.index === 1 ? 'opacity-100' : 'opacity-0'}
           block duration-700 ease-in-out`}
        >
          <img
            src="selector-2.jpg"
            class={`absolute block w-full h-full object-scale-down md:object-contain`}
            alt="3 Selector en couleurs"
          />
        </div>
        <div
          class={`
          ${state.index === 2 ? 'opacity-100' : 'opacity-0'}
           block duration-700 ease-in-out`}
        >
          <img
            src="selector-3.jpg"
            class={`absolute block w-full h-full object-scale-down md:object-contain`}
            alt="3 Selector en couleurs pop"
          />
        </div>
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick$={() => {
            state.index = (state.index - 1 + 3) % 3
          }}
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-slate-200 group-hover:bg-slate-300">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-primary sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick$={() => {
            state.index = (state.index + 1 + 3) % 3
          }}
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-slate-200 group-hover:bg-slate-300">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-primary sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  )
})
