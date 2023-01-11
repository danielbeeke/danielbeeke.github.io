import Metalsmith from 'metalsmith'
import collections from '@metalsmith/collections'
import layouts from 'metalsmith-layouts'
import markdown from 'metalsmith-markdown'
import permalinks from '@metalsmith/permalinks'
import serve from 'metalsmith-serve'
import sass from 'metalsmith-dart-sass'
import discoverPartials from 'metalsmith-discover-partials'
import assets from 'metalsmith-assets'
import dateFormatter from 'metalsmith-date-formatter'
import Handlebars from 'handlebars'
import HandlebarsLayouts from 'handlebars-layouts'
import browserSync from 'metalsmith-browser-sync'
import { report } from 'metalsmith-debug-ui'
import { skip } from './metalsmith/skip.js'

Handlebars.registerHelper(HandlebarsLayouts(Handlebars))

Handlebars.registerHelper('page', function(pagePath, options) {
  const page = options.data.root.pages.find(page => page.path === pagePath)
  return options.fn(page)
})

Handlebars.registerHelper('limit', function (arr, offset, limit) {
    if (!Array.isArray(arr)) { return []; }
  return arr.slice(offset, offset + limit)
});


const build = process.argv[2] === '--prod'


Metalsmith('./')
.source('./src')
.destination(build ? './docs' : './build')
.use(build ? () => null : serve({
  port: 5000
}))
.use(collections({
  pages: { pattern: 'pages/*.md' },
  projects: { 
    pattern: 'projects/*.md',
    sortBy: 'index'
  },
  blogs: { 
    pattern: 'blogs/*.md',
    sortBy: 'date'
  }
}))
.use(assets({
  source: './src/public',
  destination: './'
}))
.use(dateFormatter({
  dates: [
    { key: 'date',format: 'DD-MM-YYYY' }
  ]
}))
.metadata({
  sitename: 'Daniël Beeke',
  siteurl: 'https://danielbeeke.nl'
})
.use(discoverPartials({
  directory: 'src/partials',
}))
.use(sass())

.use(markdown())
.use(permalinks({
  pattern: ':title',
  relative: false,

  // Defines the paths for the collections.
  linksets: [
    {
      match: { collection: 'projects' },
      pattern: 'projects/:title',
    },
    {
      match: { collection: 'blogs' },
      pattern: 'blogs/:title',
    },
    {
      match: { collection: 'pages' },
      pattern: ':title'
    }
  ]
}))
.use(layouts({
  engine: 'handlebars',
  directory: 'src/layouts',
  pattern: "**/*.html"
}))
.use(skip())
.use(build ? () => null : browserSync({
  server : 'build',
  files  : [
    'src/js/*', 
    'src/**/*.md', 
    'src/**/*.hbs', 
    'src/scss/**/*.scss', 
    'src/scss/*.scss'
  ]
}))
.use(build ? () => null : report('stage 1'))
.clean(true)
.build()