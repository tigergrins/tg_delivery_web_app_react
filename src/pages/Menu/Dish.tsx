import React from 'react'
import styled from 'styled-components'
import { IDish } from '../../store/content'

interface IDishProps {
  data: IDish
}

function Dish(props: IDishProps) {
  return (
    <Container>
      <ImgContainer><img src={props.data.img} alt="photo" /></ImgContainer>

      <div>{props.data.dishTitle}</div>
      <div>{props.data.weight}</div>

      <Button>{props.data.price}</Button>
    </Container>
  )
}

export default Dish

const Container = styled.div`

`

const ImgContainer = styled.div`

`

const Button = styled.div`

`
