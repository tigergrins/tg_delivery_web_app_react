import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import { IDish } from '../../store/content'

interface IDishProps {
  data: IDish
}

export default React.memo(function MenuItem(props: IDishProps) {
  return (
    <Container>
      <ImgContainer><img src={''} alt="photo" /></ImgContainer>

      <div className={'title'}>{props.data.dishTitle}</div>
      <div className={'weight'}>{props.data.weight} g.</div>

      <CustomButton onClick={() => {}}>+ {props.data.price}</CustomButton>
    </Container>
  )
})

const Container = styled.div`
  position: relative;
  margin: 1rem;
  padding-bottom: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .weight{
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--secondary-text);
  }
`

const ImgContainer = styled.div`
  width: 9rem;
  height: 9rem;
  background-color: var(--color-red);
  border-radius: 0.3rem;
  margin-bottom: 0.75rem;
`

const CustomButton = styled(Button)`
  max-width: 5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem 1rem;
`
