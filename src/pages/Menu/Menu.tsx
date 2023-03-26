import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../assets/icons'
import Slider from '../../components/Slider/Slider'
import { dishes } from '../../store/content'
import MenuItem from './MenuItem'

function Menu() {
  const tabs = dishes.map(item => ({category: item.category, title: item.categoryTitle}))

  return (
    <Container>
      <Header>
        <Logo/>
        <Slider tabs={tabs}/>
      </Header>

      <Categories>
        {
          dishes.map((category, index) => {
            return (
              <React.Fragment key={`category_${index}`}>
                <Title>{category.categoryTitle}</Title>
                <Category>
                  {
                    category.dishes.map((dish, index) => {
                      return (
                        <MenuItem key={`dish_${index}`} data={dish}/>
                      )
                    })
                  }
                </Category>
              </React.Fragment>
            )
          })
        }
      </Categories>

    </Container>
  )
}

export default Menu

const Container = styled.div`
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background: var(--blackout);
  padding: 1.5rem 0;

  svg {
    margin-bottom: 1rem;
  }
`

const Categories = styled.div`
  margin-top: 14rem;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 1.5rem;
`
