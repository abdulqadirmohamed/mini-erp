"use client"
import React, { useState } from 'react'
import UserItem from './UserItem'

import { Command, CommandGroup, CommandItem, CommandList } from './ui/command'
import { BadgeCentIcon, CookieIcon, Gauge, Landmark, MessageSquare, Settings, ShoppingBag, User, Users } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import {usePathname} from 'next/navigation'

const Sidebar = () => {
    const [show, setShow] = useState(false)

    const router = useRouter();
    const pathname = usePathname()

    const isActive = (path:any) => {
        return router.pathname === path;
    };

    const menuList = [
        {
            group: 'General',
            items: [
                {
                    link: "/",
                    title: "Dashboard",
                    icon: <Gauge size={20} />,
                },
                {
                    title: "Sale",
                    link: "/sale",
                    icon: <BadgeCentIcon size={20} />,
                    options: [
                        {
                            url: "/new-sale",
                            title: "New Sale",
                        },
                        {
                            url: "/manage-sale",
                            title: "Manage Sale",
                        },
                        {
                            url: "/sales-terms-list",
                            title: "Sales Terms List",
                        },
                    ]
                },
                {
                    title: "Customer",
                    link: "/customer",
                    icon: <Users size={20} />,
                    options: [
                        {
                            url: "/add-customer",
                            title: "Add Customer",
                        },
                        {
                            url: "customer-list",
                            title: "Customer List",
                        },

                    ]
                },
                {
                    title: "Product",
                    link: "/product",
                    icon: <ShoppingBag size={20} />

                },
                {
                    title: "Quotation",
                    link: "/quotation",
                    icon: <User size={20} />
                },
                {
                    title: "Accounts",
                    link: "/supplier",
                    icon: <Landmark size={20} />
                },
            ]
        },
        {
            group: 'Setting',
            items: [
                {
                    link: "/",
                    title: "General Setting",
                    icon: <Settings size={20} />
                },
                {
                    link: "/",
                    icon: <MessageSquare size={20} />,
                    title: "Logs"
                },

                {
                    link: "/",
                    icon: <CookieIcon size={20} />,
                    title: "Privacy"
                },
            ]
        },
    ]

    return (
        <div className='md:min-w-[300px] min-h-screen flex flex-col border-r p-4 bg-[#2C3136]'>
            <div >
                <UserItem />
            </div>
            <div className='grow h-full'>
                <Command style={{ overflow: 'visible' }} className='bg-[#2C3136]'>
                    <CommandList style={{ overflow: 'visible' }}>
                        {menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((item: any, itemKey: number) => (
                                    <div key={itemKey} className='grid grid-cols-1 text-sm text-gray-400'>
                                        <button onClick={() => setShow(!show)}
                                            className={`${isActive('/') ? 'font-bold': ''} w-full py-2 px-2 flex justify-start gap-3 hover:bg-gray-700 rounded-md hover:border-l-4 hover:border-green-600 border-l-4 border-[#2C3136]`}>
                                            <span>{item.icon}</span>
                                            <span>{item.title}</span>
                                        </button>
                                        <div></div>
                                        <div className={`${show ? 'bg-[#1C1F22] flex flex-col  transition-all duration-500 ease-in' : 'hidden'}`}>
                                            <div className='flex items-center  ml-12 relative'>
                                                <div className='h-full w-[1px] bg-gray-600'>
                                                </div>
                                                <div className='ml-3'>
                                                    {item.options?.map((option: any) => (
                                                        <div className="flex items-center gap-4 my-2 hover:text-white transition ease-in-out delay-150">
                                                            <div className='h-[1px] w-4 bg-gray-600 absolute left-0'></div>
                                                            <Link href={option.url} className='ml-2'>{option.title}</Link>
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
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