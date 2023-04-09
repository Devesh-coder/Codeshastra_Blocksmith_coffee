/** @format */

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ettarra from '../assets/ettarra.png';
import Connect from './connect';
import anna from '../assets/anna.png';
import { Authe } from '../polybase/auth.js';
import Beans from '../assets/a956990d7460ea47ee54e02768fd7093.svg';

import { PolybaseProvider, AuthProvider } from '@polybase/react';
import { Polybase } from '@polybase/client';
import { Auth } from '@polybase/auth';
import Example from './dropdown';
import { useContext } from 'react';
// import CoffeeContext from '../context/CoffeeContext';

const navigation = [
  { name: 'Product', href: '/products' },
  { name: 'Loyalty Memberships', href: '/feature' },
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'My Ettarra NFTs', href: '#' },
];
const polybase = new Polybase();
const auth = new Auth();
const a = 5000;
export default function Landing({ logo: Logo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const { handleGoogleLogin } = useContext(CoffeeContext);

  return (
    <PolybaseProvider polybase={polybase}>
      <AuthProvider
        auth={auth}
        polybase={polybase}>
        <div style={{ padding: '100px', backgroundColor: '#F2EAE2' }}>
          <header className="absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between p-6 lg:px-8"
              aria-label="Global">
              <div className="flex lg:flex-1">
                <a
                  href="#"
                  className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src={ettarra}
                    alt=""
                  />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}>
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                  </a>
                ))}
              </div>
              {/* <div
                className="hidden lg:flex lg:flex-1 lg:justify-end"
                onClick={handleGoogleLogin()}>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900">
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <span style={{ marginRight: '20px' }}>
                  {' '}
                  <Example />
                </span>
                <Authe />
              </div>
            </nav>
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}>
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <Authe />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </header>

          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true">
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#E2C2AA] to-[#563300] opacity-100 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            {/* <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"> */}
            {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a
                href="#"
                className="font-semibold text-indigo-600">
                <span
                  className="absolute inset-0"
                  aria-hidden="true"
                />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
            {/* </div> */}
            <div className="inline-flex">
              <img
                style={{ height: '400px', marginRight: '200px' }}
                src={anna}
              />
              <div style={{ width: '400px', height: '400px' }}>
                {' '}
                <Logo />
              </div>
              <img
                style={{ height: '400px', marginLeft: '200px' }}
                src={anna}
              />
            </div>

            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true">
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
        </div>
      </AuthProvider>
    </PolybaseProvider>
  );
}
/** @format */

// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import ettarra from '../assets/ettarra.png'
// import Connect from './connect'
// import anna from '../assets/anna.png'

// const navigation = [
// 	{ name: 'Product', href: '#' },
// 	{ name: 'Loyalty Memberships', href: '/memberships' },
// 	{ name: 'Leaderboard', href: '/leaderboard' },
// 	{ name: 'My Ettarra NFTs', href: '#' },
// ]

// export default function Landing({ logo: Logo }) {
// 	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

// 	return (
// 		<div style={{ backgroundColor: 'FFFFFF' }}>
// 			<header className='absolute inset-x-0 top-0 z-50'>
// 				<nav
// 					className='flex items-center justify-between p-6 lg:px-8'
// 					aria-label='Global'
// 				>
// 					<div className='flex lg:flex-1'>
// 						<a href='#' className='-m-1.5 p-1.5'>
// 							<span className='sr-only'>Your Company</span>
// 							<img className='h-8 w-auto' src={ettarra} alt='' />
// 						</a>
// 					</div>
// 					<div className='flex lg:hidden'>
// 						<button
// 							type='button'
// 							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
// 							onClick={() => setMobileMenuOpen(true)}
// 						>
// 							<span className='sr-only'>Open main menu</span>
// 							<Bars3Icon className='h-6 w-6' aria-hidden='true' />
// 						</button>
// 					</div>
// 					<div className='hidden lg:flex lg:gap-x-12'>
// 						{navigation.map((item) => (
// 							<a
// 								key={item.name}
// 								href={item.href}
// 								className='text-sm font-semibold leading-6 text-gray-900'
// 							>
// 								{item.name}
// 							</a>
// 						))}
// 					</div>
// 					<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
// 						<Connect />
// 					</div>
// 				</nav>
// 				<Dialog
// 					as='div'
// 					className='lg:hidden'
// 					open={mobileMenuOpen}
// 					onClose={setMobileMenuOpen}
// 				>
// 					<div className='fixed inset-0 z-50' />
// 					<Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
// 						<div className='flex items-center justify-between'>
// 							<a href='#' className='-m-1.5 p-1.5'>
// 								<span className='sr-only'>Your Company</span>
// 								<img
// 									className='h-8 w-auto'
// 									src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
// 									alt=''
// 								/>
// 							</a>
// 							<button
// 								type='button'
// 								className='-m-2.5 rounded-md p-2.5 text-gray-700'
// 								onClick={() => setMobileMenuOpen(false)}
// 							>
// 								<span className='sr-only'>Close menu</span>
// 								<XMarkIcon className='h-6 w-6' aria-hidden='true' />
// 							</button>
// 						</div>
// 						<div className='mt-6 flow-root'>
// 							<div className='-my-6 divide-y divide-gray-500/10'>
// 								<div className='space-y-2 py-6'>
// 									{navigation.map((item) => (
// 										<a
// 											key={item.name}
// 											href={item.href}
// 											className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
// 										>
// 											{item.name}
// 										</a>
// 									))}
// 								</div>
// 								<div className='py-6'>
// 									<a
// 										href='#'
// 										className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
// 									>
// 										Log in
// 									</a>
// 								</div>
// 							</div>
// 						</div>
// 					</Dialog.Panel>
// 				</Dialog>
// 			</header>

// 			<div className='relative isolate px-6 pt-14 lg:px-8'>
// 				<div
// 					className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
// 					aria-hidden='true'
// 				>
// 					<div
// 						className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-100 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
// 						style={{
// 							clipPath:
// 								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
// 						}}
// 					/>
// 				</div>
// 				{/* <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-32">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center"> */}
// 				{/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//               Announcing our next round of funding.{' '}
//               <a
//                 href="#"
//                 className="font-semibold text-indigo-600">
//                 <span
//                   className="absolute inset-0"
//                   aria-hidden="true"
//                 />
//                 Read more <span aria-hidden="true">&rarr;</span>
//               </a>
//             </div> */}
// 				{/* </div> */}
// 				<Logo />

// 				<div
// 					className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
// 					aria-hidden='true'
// 				>
// 					<div
// 						className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
// 						style={{
// 							clipPath:
// 								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
// 						}}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
