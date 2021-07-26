import marked from 'marked'
import hljs from 'highlight.js'
export const markdown = marked.setOptions({
  headerIds: false,
  highlight: (code, lang) => hljs.highlight(code, {language: lang || 'text'}).value,
})
