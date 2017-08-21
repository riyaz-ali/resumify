//- routes

function component(name){
  return require(`@/templates/${name}`).default
}
export default [
  { path:'/', name: 'Default', component: component('default') }
]
