'use client'
import { TSideBarItems } from '@/types/types'
import { ChevronDown, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react'



const SideBarList = ({ item }: { item: TSideBarItems }) => {
  const { title, icon, path, subMenuItems } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const activeHandler = () => {
    if (subMenuItems && subMenuItems.length > 0) {
      return setExpanded(!expanded)
    }

    router.push(path)
  }
  const isActive = useMemo(() => {
    if (subMenuItems && subMenuItems.length > 0) {
      if (subMenuItems.find((item) => item.path === pathname)) {
        setExpanded(true);
        return true;
      }
    }

    return path === pathname;
  }, [subMenuItems, path, pathname]);

  return (
    <div>
      <div onClick={activeHandler} className={`${isActive && "bg-[#eeedff] text-[#6E62E5]"} flex gap-3 items-center my-2 hover:bg-[#eeedff] p-2 rounded-md cursor-pointer hover:text-[#6E62E5]`}>
        <div className='flex items-center justify-between w-full'>
          <div className='flex gap-3 items-center text-sm'>
            <span className='text-[#6E62E5] group-hover:text-white'>{icon}</span>
            <span className='group-hover:text-white'>{title}</span>
          </div>
          <div>
            {subMenuItems && subMenuItems.length > 0 && <ChevronDown size={15} className={expanded ? "rotate-180 duration-200 ease-in-out":""} />}
          </div>
        </div>
      </div>
      {expanded && (
        <div className={` flex flex-col  transition-all duration-500 ease-in text-sm`}>
          <div className='flex items-center  ml-12 relative'>
            <div className='h-full w-[2px] bg-red-500'>

            </div>
            <div className='ml-3'>
              {item.subMenuItems?.map((option: any) => (
                <div className="flex items-center gap-4 my-2 hover:font-medium transition ease-in-out delay-150">
                  <div className='h-[1px] bg-gray-300 w-4 absolute left-0'></div>
                  <Link href={path} className='ml-2'>{option.title}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>

      )}
    </div>
  )
}

export default SideBarList