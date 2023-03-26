import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  const pages = [{}]

  return (
    <Container>
      <div>Menu</div>
      <div>Order</div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  position: fixed;
  bottom: -3px;
  padding: 1rem;
  background: var(--blackout);
  font-size: 1rem;
  font-weight: 700;
`
