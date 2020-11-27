export const Header = () => {
  const app = document.getElementById('app')
  const header = document.createElement('div')
  header.innerText = 'this is header'
  app.appendChild(header)
}
