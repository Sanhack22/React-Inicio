import { DescriptionProfile } from '../../DescriptionProfile/DescriptionProfile'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { Logo } from '../../Logo/Logo'
import { Navbar } from '../../Navbar/Navbar'
import { PictureProfile } from '../../PictureProfile/PictureProfile'
import { Item } from '../../item/item'



export const Home = () => {
  return (
    <>
    <Header>
      <Logo />
      <Navbar>
          <Item content = 'Inicio' />
          <Item content = 'Acerca de mi' />
          <Item content = 'Proyectos' />          
      </Navbar>
    </Header>
    <Main>
    <PictureProfile/>

    <DescriptionProfile/>
    </Main>
    </>
    

  )
}