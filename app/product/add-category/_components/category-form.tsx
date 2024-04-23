import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import React from 'react'

export const CategoryForm = () => {
    return (
        <div className='border-[1px]'>
            <div>
                <div className='border-[1px] border-gray-300 p-3 bg-white z-10'>
                    <h1>Add Category</h1>
                </div>
                <div className='m-10'>
                    <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                        <Label htmlFor="picture">Category Name <span className='text-red-600'>*</span></Label>
                        <Input id="picture" type="text" className='focus-none' />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                        <div>
                            <Label>Status</Label> <span className='text-red-600'>*</span>
                        </div>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Active</SelectItem>
                                <SelectItem value="dark">Inactive</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                    <div>
                        <Button className='bg-blue-700'>Save</Button>
                    </div>
                </div>

            </div>

        </div>
    )
}
