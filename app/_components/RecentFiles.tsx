import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ArrowUpToLine, Clapperboard, File, Image } from 'lucide-react';


const RecentFiles = () => {
    const recentFiles = [
        {
            name: "Citizens Forum - Jariiban ",
            user: 'abdulqadir',
            fileSize: '500 mb',
            fileType: 'video'
        },
        {
            name: "Design software solution",
            user: 'mohamed',
            fileSize: '2 mb',
            fileType: 'image'
        },
        {
            name: "A STUDY ON THE IMPACT OF LAS-ANOD CONFLICT (HUMANITARIAN, SOCIAL AND ECONOMIC)",
            user: 'abdulqadir',
            fileSize: '5 mb',
            fileType: 'document'
        },
        {
            name: "Democratization & Elections in Puntland",
            user: 'abdulqadir',
            fileSize: '200 mb',
            fileType: 'video'
        },

    ]
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent files.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>File Size</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Creation time</TableHead>
                        <TableHead className='text-right'>Download</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recentFiles.map((file) => (
                        <TableRow>
                            <TableCell className="flex items-center gap-2 lowercase">
                                {file.fileType == 'video' && <Clapperboard className='text-blue-700' size={20} />}
                                {file.fileType == 'document' && <File size={20} className='text-yellow-500' />}
                                {file.fileType == 'image' && <Image size={20} className='text-green-700' />}
                                {file.name}
                            </TableCell>
                            <TableCell className='uppercase'>{file.fileSize}</TableCell>
                            <TableCell>{file.user}</TableCell>
                            <TableCell>23-03-2024</TableCell>
                            <TableCell className='flex items-center gap-2 cursor-pointer text-center hover:text-blue-700'>
                                <ArrowUpToLine size={15} /> Download
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    )
}

export default RecentFiles