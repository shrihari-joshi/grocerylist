import React from 'react'

const Footer = ( {length} ) => {
    const today = new Date()
  return (
    <footer>
        <h3>
            {length} List {length === 1 ? "item": "items"}<br/>
        </h3>
        
    </footer>
  )
}

export default Footer