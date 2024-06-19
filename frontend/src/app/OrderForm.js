import clsx from 'clsx'
import {Input, Button, TabGroup, TabPanels, TabPanel, TabList, Tab} from '@headlessui/react'

export default function OrderForm() {
  return (
    <div className="p-3">
      <h2 className="text-xl font-semibold">สร้างการสั่งซื้อ</h2>
      <form>
          <TabGroup>
            <TabList className="py-3 flex">
              <Tab className="py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">ออเดอร์สั่งซื้อ</Tab>
              <Tab className="py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">ออเดอร์ขาย</Tab>
              <Tab className="py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">ออเดอร์ที่เปิดไว้</Tab>
            </TabList>
            <TabPanels>
              <TabPanel className="bg-black/5">
                <div className="mb-3 py-3 flex text-right">
                  <h1 className='w-48'>ยอดคงเหลือที่มี:</h1>
                  <label className='px-3'>(ทั้งหมด)</label>
                </div>
                <div className='mb-3 py-3 flex text-right'>
                  <h1 className='mr-3 w-48'>จำนวน THB ที่ต้องจ่าย:</h1>
                  <Input type="text" placeholder="จำนวนเงินที่จะใช้จ่าย" className={clsx('inline-block rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm', 'focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-black/25')}/>
                </div>
                <div className="mb-3 py-3 flex justify-center text-right">
                  <Button className='w-48 py-1 px-3 text-sm rounded-md font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>ลิมิตออเดอร์</Button>
                  <Button className='w-48 py-1 px-3 text-sm rounded-md font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>ประเภทออเดอร์</Button>
                </div>
                <div className="mb-3 py-3 flex text-right">
                  <label className="mr-3 w-48">ราคาต่อ BTC:</label>
                  <Input type="text" className={clsx('inline-block rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm', 'focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-black/25')}/>
                </div>
                <div className="mb-3 py-3 flex text-right">
                  <label className="mr-3 w-48">จำนวน BTC ที่คุณจะได้รับ:</label>
                  <Input type="text" placeholder="จำนวนเงินที่คุณจะได้รับ" className={clsx('inline-block rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm', 'focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-black/25')}/>
                </div>
                <div className="mb-3 py-3 flex text-right">
                  <label className="mr-3 w-48">ค่าธรรมเนียม 0.25%:</label>
                  <Input type="text" className={clsx('inline-block rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm', 'focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-black/25')}/>
                </div>
                <div className="mb-3 py-3 flex justify-center">
                  <Button className='rounded-md py-1 px-3 text-sm font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>สร้างการสั่งซื้อ</Button>
                  <Button className='rounded-md py-1 px-3 text-sm font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>รีเซ็ตค่า</Button>
                </div>
              </TabPanel>
              <TabPanel className="bg-black/5">
                <div className="mb-3 py-3 flex text-right">
                  <h1 className='w-48'>ยอดคงเหลือที่มี:</h1>
                  <label className='px-3'>(ทั้งหมด)</label>
                </div>
                <div className='mb-3 py-3 flex text-right'>
                  <h1 className='mr-3 w-48'>จำนวน BTC ที่ต้องจ่าย:</h1>
                  <Input type="text" placeholder="จำนวนเงินที่จะใช้จ่าย" className={clsx('inline-block rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm', 'focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-black/25')}/>
                </div>
                <div className="mb-3 py-3 flex justify-center text-right">
                  <Button className='w-48 py-1 px-3 text-sm rounded-md font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>ลิมิตออเดอร์</Button>
                  <Button className='w-48 py-1 px-3 text-sm rounded-md font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>ประเภทออเดอร์</Button>
                </div>
                <div className="mb-3 py-3 flex text-right">
                  <label className="mr-3 w-48">ราคาต่อ BTC:</label>
                  <Input type="text" className={clsx('inline-block rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm', 'focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-black/25')}/>
                </div>
                <div className="mb-3 py-3 flex text-right">
                  <label className="mr-3 w-48">จำนวน THB ที่คุณจะได้รับ:</label>
                  <Input type="text" placeholder="จำนวนเงินที่คุณจะได้รับ" className={clsx('inline-block rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm', 'focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-black/25')}/>
                </div>
                <div className="mb-3 py-3 flex text-right">
                  <label className="mr-3 w-48">ค่าธรรมเนียม 0.25%:</label>
                  <Input type="text" className={clsx('inline-block rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm', 'focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-black/25')}/>
                </div>
                <div className="mb-3 py-3 flex justify-center">
                  <Button className='rounded-md py-1 px-3 text-sm font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>สร้างการสั่งซื้อ</Button>
                  <Button className='rounded-md py-1 px-3 text-sm font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>รีเซ็ตค่า</Button>
                </div>
              </TabPanel>
              <TabPanel className="bg-black/5">
                <div className="mb-3 py-3">
                  <Button className='rounded-md py-1 px-3 text-sm font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>ยกเลิก</Button>
                </div>
                <div className="mb-3 py-3">
                  <Button className='rounded-md py-1 px-3 text-sm font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>ยกเลิก</Button>
                </div>
                <div className="mb-3 py-3">
                  <Button className='rounded-md py-1 px-3 text-sm font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>ยกเลิก</Button>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </form>
    </div>
  )
}
