import { clsx } from 'clsx'

import { ReactComponent as DashboardIcon } from '@/assets/dashboard-line.svg'
import { ReactComponent as WalletIcon } from '@/assets/wallet-line.svg'
import { ReactComponent as LogoutIcon } from '@/assets/logout-box-r-line.svg'
import { ReactComponent as ExhangeIcon } from '@/assets/exchange-line.svg'
import { ReactComponent as ShoppingBagIcon } from '@/assets/shopping-bag-2-line.svg'
import { ReactComponent as OrganizationChartIcon } from '@/assets/organization-chart.svg'
import { ReactComponent as ArrowDownIcon } from '@/assets/arrow-down-s-line.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/arrow-up-s-line.svg'

function SideBarItem({ active, text, icon }) {
  const Icon = icon

  return (
    <li className="my-5 first:mt-0 hover:bg-klikoo-primary-60 hover:bg-opacity-20">
      <a href="#">
        <div className="relative flex px-12 py-4 max-md:w-fit max-md:px-8 max-sm:px-4">
          <div className="mr-5 max-md:mr-0">
            <Icon className={clsx(active ? 'fill-klikoo-primary-100' : 'fill-gray-500')} />
          </div>
          <span
            className={`max-md:hidden ${clsx(
              active ? 'font-bold text-klikoo-primary-100' : 'text-gray-500',
            )}`}
          >
            {text}
          </span>
          {active ? (
            <div className="absolute top-2.5 right-0 h-9 w-1.5 rounded-l-lg bg-klikoo-primary-100" />
          ) : null}
        </div>
      </a>
    </li>
  )
}

function Accordion() {
  return (
    <li className="my-5 first:mt-0 hover:bg-klikoo-primary-60 hover:bg-opacity-20">
      <button className="w-full text-gray-500">
        <div className="flex justify-between px-12 py-4 max-md:w-fit max-md:px-8 max-sm:px-4">
          <div className="flex">
            <div className="mr-5 max-md:mr-0">
              <OrganizationChartIcon className="fill-gray-500" />
            </div>
            <span className="max-md:hidden">Channel</span>
          </div>
          <div className="max-md:hidden">
            <ArrowUpIcon className="fill-gray-500" width="18" />
          </div>
        </div>
      </button>
      <div className="max-md:hidden">
        <ul>
          <li>
            <a href="#" className="text-gray-500">
              <div className="flex px-12 py-4">
                <div className="mr-5">
                  <div className="h-6 w-6" />
                </div>
                <span>Agent</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500">
              <div className="flex px-12 py-4">
                <div className="mr-5">
                  <div className="h-6 w-6" />
                </div>
                <span>Balance</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500">
              <div className="flex px-12 py-4">
                <div className="mr-5">
                  <div className="h-6 w-6" />
                </div>
                <span>Transaction</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default function SideBar() {
  return (
    <div className="bg-klikoo-secondary-20">
      <div className="px-16 pt-11 text-center text-3xl font-bold text-klikoo-primary-100 max-md:w-fit max-md:px-8 max-sm:px-4 max-sm:pt-8">
        <span className="max-md:hidden">SalesDash</span>
        <span className="md:hidden">S</span>
      </div>
      <nav className="mt-12 divide-y">
        <ul>
          <SideBarItem text="Dashboard" icon={DashboardIcon} active />
          <SideBarItem text="Balance" icon={WalletIcon} />
          <SideBarItem text="Transaction" icon={ExhangeIcon} />
          <SideBarItem text="Product" icon={ShoppingBagIcon} />
          <Accordion />
        </ul>
        <ul className="pt-4">
          <SideBarItem text="Logout" icon={LogoutIcon} />
        </ul>
      </nav>
    </div>
  )
}
