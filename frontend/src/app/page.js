'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels, Field, Input, Button} from '@headlessui/react'
import clsx from 'clsx'
import "./globals.css"
import OrderForm from './OrderForm'
import TradeChart from './TradeChart'

export default function Topgroup() {
  
  return (
    <div className='background'>
      <div className="header">
        <div className="menu-left">
          <div className="menu-right flex gap-1 ml-auto">
            <Field className="flex gap-1 ml-auto">
              <Input type="text" placeholder="Username" className={clsx('inline-block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm', 'focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-black/25')}/>
              <Input type="password" placeholder="Password" className={clsx('inline-block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm', 'focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-black/25')}/>
              <Button className='w-full rounded-md py-1 px-3 text-sm font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10'>SIGN IN</Button>
              <Button className="w-full rounded-md py-1 px-3 text-sm font-semibold focus:outline-none hover:bg-black/5 focus:bg-black/10">REGISTER</Button>
            </Field>
          </div>
          <TabGroup>
            <TabList className="flex p-3">
              <Tab className="rounded-md py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">Trading</Tab>
              <Tab className="rounded-md py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">TradeView</Tab>
              <Tab className="rounded-md py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">My funds</Tab>
              <Tab className="rounded-md py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">Security</Tab>
              <Tab className="rounded-md py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">Info</Tab>
            </TabList>
            <TabPanels className="mt-3">
              <TabPanel className="bg-black/5 p-3">
                <div className="flex flex-wrap bg-black/5">
                  <div className="w-full md:w-1/2 bg-black/5">
                    <OrderForm />
                  </div>
                  <div className="w-full md:w-1/2">
                    <TradeChart />
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="bg-black/5 p-3">
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
      <div className='body flex gap-4 justify-center'>
        <div className="flex p-3 px-3 py-3 md:w-1/3 bg-black/5 rounded-md">การค้าล่าสุด
        </div>
        <div className="flex p-3 px-3 py-3 md:w-1/3 bg-black/5 rounded-md">ออเดอร์ซิ้อ
        </div>
        <div className="flex p-3 px-3 py-3 md:w-1/3 bg-black/5 rounded-md">ออเดอร์ขาย
        </div>
      </div>
      <div className='footer'>
        bitdoin.in.th
      </div>
    </div>     
  )
}
