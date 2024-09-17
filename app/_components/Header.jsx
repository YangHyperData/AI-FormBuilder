"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function Header() {
    const router = useRouter();
    const { user, isSignedIn } = useUser();
    const path = usePathname();
    useEffect(() => {
        console.log(path)
    },[])
    const handleClick = () => {
        router.push('/dashboard');
    };
    return !path.includes('aiform') && (
        <div className='p-3 px-5 border-b shadow-sm'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center cursor-pointer' onClick={handleClick}>
                    <Image src={'/logo.svg'} width={70} height={70} alt='logo' />
                    <p className='text-xl font-bold mt-3'>YangStone - AI FormBuilder</p>
                </div>

                {isSignedIn ?
                    <div className='flex items-center gap-5'>
                        <Link href={'/dashboard'}>
                            <Button >Dashboard</Button>
                        </Link>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: 'h-16 w-16',
                                },
                            }}
                        />
                    </div> :
                    <SignInButton>
                        <Button>Get Started</Button>
                    </SignInButton>

                }
            </div>
        </div>
    )
}

export default Header
