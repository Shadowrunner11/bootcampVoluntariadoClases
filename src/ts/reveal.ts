import 'reveal.js/plugin/highlight/monokai.css'

import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight'

export const deck = new Reveal({
  plugins: [ Markdown]
})

deck.initialize({
  plugins: [RevealHighlight]
})
