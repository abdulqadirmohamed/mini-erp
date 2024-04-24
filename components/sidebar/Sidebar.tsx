"use client"
import React, { useState } from 'react'
import UserItem from '../UserItem'
import { Command, CommandGroup, CommandItem, CommandList } from '../ui/command'
import Link from 'next/link'
import { SideBarItems } from './constants'
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react'
import { Variants, motion } from "framer-motion"
import SideBarList from './SideBarList'


const Sidebar = () => {
 
    return (
        <div className='md:min-w-[250px] min-h-screen flex flex-col border-r p-4'>
            <div >
                <UserItem />
            </div>
            <div>
                {SideBarItems.map((item, index)=>(
                    <SideBarList key={index} item={item}/>
                ))}
            </div>
            <div>Setting</div>
        </div>
    )
}

export default Sidebar