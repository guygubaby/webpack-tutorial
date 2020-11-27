export const Content = () => {
  const app = document.getElementById('app')
  const content = document.createElement('div')
  content.innerText = 'this is content'
  app.appendChild(content)
}
