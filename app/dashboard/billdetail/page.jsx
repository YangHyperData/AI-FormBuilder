
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function BillDetail() {


    return (
        <div className="justify-center items-center min-h-screen bg-gray-200 pt-2">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-2">Payment With BIDV QR Scan</h2>
                <div className="flex justify-center space-x-8 flex-wrap">
                    {/* Free Plan */}
                    <div className="border rounded-lg p-6 bg-white  flex flex-col items-center shadow-md" style={{ minWidth: '350px', minHeight: '450px' }}>
                        <h3 className="text-3xl font-bold mb-5">STK : 6504443979</h3>
                        <h3 className="text-3xl font-bold mb-2">Nội dung chuyển khoản</h3>
                        <h3 className="text-3xl font-medium mb-2">YS ACG + 'email người dùng'</h3>
                        <h3 className="text-3xl font-medium mb-2"> $9.99 = 246,503 VND</h3>
                        <Image src={'/meme.jpg'} alt='meme' width={350} height={200} />
                    </div>

                    {/* Monthly Plan */}
                    <div className="border rounded-lg p-6 bg-white  flex flex-col items-center shadow-md" style={{ minWidth: '350px', minHeight: '450px' }}>
                        <Image src={'/billdetail.jpg'} alt='billdetail' width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillDetail
