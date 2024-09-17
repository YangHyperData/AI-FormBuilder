"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react'

function billing() {

    const router = useRouter();
    const handlePayment = () => {

        router.push('/dashboard/billdetail');
    };

    return (
        <div className="justify-center items-center min-h-screen bg-gray-200 pt-10">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-8">Upgrade With Monthly Plan</h2>
                <div className="flex justify-center space-x-8 flex-wrap">
                    {/* Free Plan */}
                    <div className="border rounded-lg p-6 bg-white  flex flex-col items-center shadow-md" style={{ minWidth: '350px', minHeight: '450px' }}>
                        <h3 className="text-3xl font-bold">Free</h3>
                        <div className="text-2xl text-gray-700 mt-3">
                            <span className="text-5xl font-bold">0$</span> <span className="text-xl">/month</span>
                        </div>
                        <ul className="mt-4 space-y-3 text-left">
                            <li className="flex items-center">
                                <span className="text-primary font-bold">✓</span>
                                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                                    3 Files included
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-primary font-bold">✓</span>
                                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                                    2GB of Storage
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-primary font-bold">✓</span>
                                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                                    Email support
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-primary font-bold">✓</span>
                                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                                    Help center access
                                </span>
                            </li>
                        </ul>
                        <Button className="mt-auto mb-5 px-4 py-2 w-full rounded-2xl h-16 bg-gray-500 text-white text-xl">
                            Currently Active Plan
                        </Button>
                    </div>

                    {/* Monthly Plan */}
                    <div className="border rounded-lg p-6 bg-white  flex flex-col items-center shadow-md" style={{ minWidth: '350px', minHeight: '450px' }}>
                        <h3 className="text-3xl font-bold">Monthly</h3>
                        <div className="text-2xl text-gray-700 mt-3">
                            <span className="text-5xl font-bold">9.99$</span> <span className="text-xl">/month</span>
                        </div>
                        <ul className="mt-4 space-y-3 text-left">
                            <li className="flex items-center">
                                <span className="text-primary font-bold">✓</span>
                                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                                    Unlimitit File included
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-primary font-bold">✓</span>
                                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                                    2GB of Storage
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-primary font-bold">✓</span>
                                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                                    Email support
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-primary font-bold">✓</span>
                                <span className="ml-2 font-medium text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                                    Help center access
                                </span>
                            </li>
                        </ul>
                        <Button onClick={handlePayment} className="mt-auto mb-5 px-4 py-2 w-full rounded-2xl h-16 border-2 border-purple-500 bg-white text-gray-700 text-xl">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default billing
