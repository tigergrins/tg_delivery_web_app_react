import React from 'react'
import styled from 'styled-components'
import Slider from '../../components/Slider/Slider'
import { dishes } from '../../store/content'
import Dish from './Dish'

function Menu() {
  return (
    <Container>
      <Slider />

      <Categories>
        {
          dishes.map(category => {
            return (
              <>
                <Title>{category.categoryTitle}</Title>
                <Category>
                  {
                    category.dishes.map(dish => {
                      return (
                        <Dish data={dish}/>
                      )
                    })
                  }
                </Category>
              </>
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

const Categories = styled.div`

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
