import Logo from './Logo'
import Menu from './Menu'

function Header () {
  return (
    <header className="header wrapper max-header">
      <Logo />
      <Menu />
    </header>
  )
}

export default Header