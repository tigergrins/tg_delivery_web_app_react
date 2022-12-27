import React from 'react'
import styled from 'styled-components'
import SliderItem from './SliderItem'

export interface ITab {
  category: string
  title: string
}
interface ISliderProps {
  tabs: ITab[]
}

function Slider(props: ISliderProps) {
  return (
    <Container>
      {props.tabs.map(tab => {
        return <SliderItem key={`slider_${tab.category}`} tab={tab}/>
      })}
    </Container>
  )
}

export default Slider

const Container = styled.div`
  display: flex;
  justify-content: left;

  width: 100%;
  overflow-x: auto;
  box-sizing: border-box;
  padding-top: 1rem;
  padding-right: 1rem;

  &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
`
