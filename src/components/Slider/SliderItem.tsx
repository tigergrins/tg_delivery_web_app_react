import React from 'react'
import styled from 'styled-components'
import { ITab } from './Slider'

interface ISliderItemProps {
  tab: ITab
}

function SliderItem(props: ISliderItemProps) {
  return (
    <Container>
      <span>{props.tab.title}</span>
    </Container>
  )
}

export default SliderItem

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;

  min-width: 5rem;
  min-height: 5rem;
  background-color: var(--color-red);
  margin: 0 0.5rem;
  text-align: center;

  span {
    padding-bottom: 0.5rem;
  }
`
