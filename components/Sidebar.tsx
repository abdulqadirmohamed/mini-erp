"use client"
import React, { useState } from 'react'
import UserItem from './UserItem'
import { Command, CommandGroup, CommandItem, CommandList } from './ui/command'
import Link from 'next/link'
import { SideBarItems } from './constants'
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react'
import { Variants, motion } from "framer-motion"

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const Sidebar = () => {
    const pathname = usePathname();

    const [subMenuOpen, setSubMenuOpen] = useState(null)

    const toggleSubMenu = (menuName: any) => {
        setSubMenuOpen((prevMenu) => (prevMenu === menuName ? null : menuName));
        console.log(subMenuOpen


        )
    };


    return (
        <div className='md:min-w-[300px] min-h-screen flex flex-col border-r p-4'>
            <div >
                <UserItem />
            </div>
            <div className='grow h-full'>
                <Command style={{ overflow: 'visible' }} className=''>
                    <CommandList style={{ overflow: 'visible' }}>
                        {SideBarItems.map((item, index) => (
                            <CommandGroup key={index} >
                                {/* {menu.items.map((item: any, itemKey: number) => ( */}
                                <div key={index} className='grid grid-cols-1 text-sm font-medium'>
                                    <motion.button onClick={() => toggleSubMenu(item.path)}
                                        className={` w-full py-2 px-2 flex justify-between gap-3 group hover:bg-[#6E62E5] rounded-md`}
                                        >
                                        <div className='flex gap-3 items-center'>
                                            <span className='text-[#6E62E5] group-hover:text-white'>{item.icon}</span>
                                            <span className='group-hover:text-white'>{item.title}</span>
                                        </div>
                                        <div className={``}>
                                            {item.subMenu && (<ChevronDown size={15} />)}
                                        </div>
                                    </motion.button>
                                    <div></div>
                                    {subMenuOpen === item.path && (
                                        <div className={` flex flex-col  transition-all duration-500 ease-in`}>
                                            <div className='flex items-center  ml-12 relative'>
                                                <div className='h-full w-[1px] bg-gray-300'>
                                                </div>
                                                <div className='ml-3'>
                                                    {item.subMenuItems?.map((option: any) => (
                                                        <div className="flex items-center gap-4 my-2 hover:font-medium transition ease-in-out delay-150">
                                                            <div className='h-[1px] bg-gray-300 w-4 absolute left-0'></div>
                                                            <Link href={option.path} className='ml-2'>{option.title}</Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    )}
                                </div>
                                {/* ))} */}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </Command>

            </div>
            <div>Setting</div>
        </div>
    )
}

export default Sidebar