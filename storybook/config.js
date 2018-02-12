import { configure } from '@kadira/storybook'
const req = require.context('../src/components', true, /\.story\.js$/)
import '../src/css/main.css'

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)

