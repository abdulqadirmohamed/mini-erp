import React from 'react'
import Image from 'next/image';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ArrowUpToLine, Clapperboard, File } from 'lucide-react';


export default function LatestSales () {
    const products = [
        {
            image: "https://images.pexels.com/photos/674884/pexels-photo-674884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Power bank",
            costPrice: '30',
            salePrice: '50',
        },


    ]
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent files.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Image
                        </TableHead>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Sale Price</TableHead>
                        <TableHead>Cost Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((item) => (
                        <TableRow>
                            <TableCell className="flex items-center gap-2 lowercase">
                                <Image src={item.image} width={100} height={100} alt="product Image" className='rounded-md' />
                            </TableCell>
                            <TableCell className='uppercase'>{item.name}</TableCell>
                            <TableCell>${item.salePrice}</TableCell>
                            <TableCell>${item.costPrice}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    )
}
