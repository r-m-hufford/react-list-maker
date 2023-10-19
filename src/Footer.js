import React from 'react'

const Footer = (props) => {
  const { length } = props
  return (
    <footer>
      <p>{length} List {length === 1 ? 'item' : 'items'}</p>
    </footer>
  )
}

export default Footer