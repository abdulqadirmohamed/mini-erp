
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const LoginForm = () => {
    return (
        <div className='my-32'>
            <div className='grid grid-cols-2'>
                <div className='bg-red-200'>1</div>
                <div className='bg-blue-200'>2</div>
            </div>
        </div>
    )
}

export default LoginForm

{/* <form className="text-left">
<div className="my-4 flex flex-col gap-3">
    <Label htmlFor="email">Email <span className='text-red-600'>*</span></Label>
    <Input type="email" name="email" value="" id="email" placeholder="Enter your email" required />
</div>
<div className="my-4 flex flex-col gap-3">
    <Label htmlFor="password">Password <span className='text-red-600'>*</span></Label>
    <Input type="Password" name="password" value="" id="Password" placeholder="Enter your password" required />
</div>
<div className='my-3'>
    <Button type="submit" className="w-full bg-red-500">Login</Button>
</div>
</form> */}