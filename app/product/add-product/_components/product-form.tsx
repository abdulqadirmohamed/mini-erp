import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const ProductForm = () => {
    return (
        <div className='border-[1px]'>
            <div>
                <div className='border-b-[1px] border-gray-300 p-3 bg-white z-10'>
                    <h1>Add Product</h1>
                </div>
                <div className='m-10'>
                    <div className="grid grid-cols-1 gap-6 my-3">
                        <div>
                            <Label htmlFor="bar-code">Barcode Number <span className='text-red-600'>*</span></Label>
                            <Input id="bar-code" type="number" className='focus-none w-full' placeholder='Barcode/QR-code'/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 my-3">
                        <div>
                            <Label htmlFor="product-name">Product Name <span className='text-red-600'>*</span></Label>
                            <Input id="product-name" type="text" className='focus-none w-full' placeholder='Product Name' />
                        </div>
                        <div className='w-full'>
                            <div>
                                <Label>Category</Label> <span className='text-red-600'>*</span>
                            </div>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Electronics</SelectItem>
                                    <SelectItem value="dark">Phones</SelectItem>
                                    <SelectItem value="dark">Accessories</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 my-3">
                        <div>
                            <Label htmlFor="picture">Sale Price <span className='text-red-600'>*</span></Label>
                            <Input id="picture" type="text" className='focus-none w-full' />
                        </div>
                        <div>
                            <Label htmlFor="picture">Cost Price <span className='text-red-600'>*</span></Label>
                            <Input id="picture" type="text" className='focus-none w-full' />
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-6 my-3">
                        <div>
                            <Label htmlFor="picture">Image <span className='text-red-600'>*</span></Label>
                            <Input id="picture" type="file" className='focus-none w-full' />
                        </div>
                        <div>
                            <Label htmlFor="picture">Product Details <span className='text-red-600'>*</span></Label>
                            <Input id="picture" type="text" className='focus-none w-full' />
                        </div>

                    </div>

                    <div>
                        <Button className='bg-blue-700'>Save</Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductForm