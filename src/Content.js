import React from 'react'
import { useState } from 'react'

import ItemList from './ItemList'

const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <main>
        {items.length ? 
        (
            <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />

            
        ) : (
            <p>Your List is empty</p>
        )}
    </main>
  )
}

export default Content