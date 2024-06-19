import React from 'react'
import CategorySelector from '../../CategorySelector'
import PriceRange from '../../PriceRange'
import { Drawer } from 'antd'

export default function SideBar() {
  return (
    <div className='space-y-8 hidden md:block'>

        <CategorySelector />
        <PriceRange />
        <Drawer
          title="Basic Drawer"
          placement={'left'}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <CategorySelector />
          <PriceRange />
        </Drawer>
    </div>
  )
}
