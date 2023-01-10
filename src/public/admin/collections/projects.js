import BaseFields from './BaseFields.js'

export default {
  name: 'projects',
  label: 'Project',
  folder: 'src/projects/',
  create: true,
  slug: 'projects/{{slug}}',
  fields: [
    ...BaseFields
  ]
}