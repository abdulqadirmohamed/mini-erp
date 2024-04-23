import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

export const CustomerForm = () => {
    return (
        <div className='border-[1px]'>
            <div>
                <div className='border-[1px] border-gray-300 p-3 bg-white z-10'>
                    <h1>Add Customer</h1>
                </div>
                <div className='m-10'>
                    <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                        <Label htmlFor="picture">Customer Name <span className='text-red-600'>*</span></Label>
                        <Input id="picture" type="text" className='focus-none' />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                        <Label htmlFor="picture">Phone <span className='text-red-600'>*</span></Label>
                        <Input id="picture" type="text" className='focus-none' />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                        <Label htmlFor="picture">Email</Label>
                        <Input id="picture" type="text" className='focus-none' />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                        <div>
                            <Label>Sex</Label>
                        </div>
                        <RadioGroup  className='flex gap-8'>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="male" />
                                <Label htmlFor="male">Male</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" />
                                <Label htmlFor="female">Female</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div>
                        <Button className='bg-blue-700'>Save</Button>
                    </div>
                </div>

            </div>

        </div>
    )
}
