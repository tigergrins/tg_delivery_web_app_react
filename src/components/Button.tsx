import React from 'react'
import styled from 'styled-components'

interface IButtonProps {
  children?: React.ReactNode | Array<React.ReactNode>
  className?: string
  onClick(): void
}

export default React.memo(function Button(props: IButtonProps) {
  return (
    <Container className={props.className} onClick={props.onClick}>
      {props.children}
    </Container>
  )
})

const Container = styled.div`
  background-color: var(--color-red);
  padding: 0.5rem;
  border-radius: 2rem;
  cursor: pointer;
  position: relative;
  outline: none;
  box-sizing: border-box;
  text-align: center;
`
