
import Navigation from '@/components/Navigation'

const navItems = [
  {label: 'Home', href: '/'},
  {label: 'Blog', href: '/blog'},
  {label: 'About', href: '/about'},
]

const MyHeader = () => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  )
}

export default MyHeader