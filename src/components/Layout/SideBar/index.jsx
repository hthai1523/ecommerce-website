import React from 'react'
import CategorySelector from '../../CategorySelector'
import PriceRange from '../../PriceRange'

export default function SideBar() {
  return (
    <div className='space-y-8'>
        <CategorySelector />
        <PriceRange />
    </div>
  )
}
