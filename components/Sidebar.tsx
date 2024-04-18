"use client"
import React, { useState } from 'react'
import UserItem from './UserItem'

import { Command, CommandGroup, CommandItem, CommandList } from './ui/command'
import { BadgeCentIcon, CookieIcon, Gauge, Landmark, MessageSquare, Settings, ShoppingBag, User, Users } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

const Sidebar = () => {
    const [show, setShow] = useState(false)
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
        <div className='md:min-w-[300px] min-h-screen flex flex-col border-r p-4'>
            <div >
                <UserItem />
            </div>
            <div className='grow h-full'>
                <Command style={{ overflow: 'visible' }}>
                    <CommandList style={{ overflow: 'visible' }}>
                        {menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((item: any, itemKey: number) => (
                                    <div key={itemKey} className='grid grid-cols-1 text-sm '>
                                        <button onClick={() => setShow(!show)} className='w-full py-2 px-2 flex justify-start gap-2 hover:bg-blue-300 rounded-md'>
                                            <span>{item.icon}</span>
                                            <span>{item.title}</span>
                                        </button>
                                        <div className={`${show ? 'flex flex-col ml-12' : 'hidden'}`}>
                                            {item.options?.map((option: any) => (
                                                <div className="my-2 hover:underline">
                                                  <Link href={option.url}>{option.title}</Link>
                                                </div>
                                            ))}
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