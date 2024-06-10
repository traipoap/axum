import { Tab, TabGroup, TabList, TabPanel, TabPanels, Field, Input, Button} from '@headlessui/react'
import clsx from 'clsx'
import "./globals.css";

const categories = [
  {
    name: 'Trading',
    posts: [
      {
        id: 1,
        title: 'THB/BTC',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "THB/XRP",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: 'TradeView',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
    ],
  },
  {
    name: 'My funds',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
    ],
  },
  {
    name: 'Security',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
    ],
  },
  {
    name: 'Info',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
    ],
  },
]

export default function Topgroup() {
  return (
    <div className='background'>
      <div className="header">
        <div className="menu-left">
          <TabGroup>
            <TabList className="gap-4">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
          </TabGroup>
        </div>
        <div className="menu-right">
          <Field className="gap-4 flex"> 
            <Input
              type="Username"
              placeholder="Username"
              className={clsx(
                'inline-block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />
            <Input
              type="Password"
              placeholder="Password"
              className={clsx(
                'inline-block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />
            <Button className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
            SignIn
            </Button>
            <Button className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
            Register
            </Button>
          </Field>
        </div>
      </div>
      <div className='main'>
        <div className="flex h-screen w-full justify-left pt-4 px-4">
          <div className="w-full max-w-md">
            <TabGroup>
              <TabPanels className="mt-3">
                {categories.map(({ name, posts }) => (
                  <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                    <ul>
                      {posts.map((post) => (
                        <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                          <a href="#" className="font-semibold text-white">
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                          <ul className="flex gap-2 text-white/50" aria-hidden="true">
                            <li>{post.date}</li>
                            <li aria-hidden="true">&middot;</li>
                            <li>{post.commentCount} comments</li>
                            <li aria-hidden="true">&middot;</li>
                            <li>{post.shareCount} shares</li>
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>     
  )
}