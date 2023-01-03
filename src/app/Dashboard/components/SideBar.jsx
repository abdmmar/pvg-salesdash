import { ReactComponent as DashboardIcon } from '@/assets/dashboard-line.svg'
import { ReactComponent as WalletIcon } from '@/assets/wallet-line.svg'
import { ReactComponent as LogoutIcon } from '@/assets/logout-box-r-line.svg'
import { ReactComponent as ExhangeIcon } from '@/assets/exchange-line.svg'
import { ReactComponent as ShoppingBagIcon } from '@/assets/shopping-bag-2-line.svg'
import { ReactComponent as OrganizationChartIcon } from '@/assets/organization-chart.svg'
import { ReactComponent as ArrowDownIcon } from '@/assets/arrow-down-s-line.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/arrow-up-s-line.svg'

export default function SideBar() {
  return (
    <div className=" bg-klikoo-secondary-20">
      <div className="px-16 pt-11 text-center text-3xl font-bold text-klikoo-primary-100">
        SalesDash
      </div>
      <nav className="mt-12 divide-y">
        <ul>
          <li className="my-5 first:mt-0 hover:bg-klikoo-primary-60 hover:bg-opacity-20">
            <a href="#" className="">
              <div className="relative flex px-12 py-4">
                <div className="mr-5">
                  <DashboardIcon className="fill-klikoo-primary-100" />
                </div>
                <span className="font-bold text-klikoo-primary-100">Dashboard</span>
                <div className="absolute top-2.5 right-0 h-9 w-1.5 rounded-l-lg bg-klikoo-primary-100" />
              </div>
            </a>
          </li>
          <li className="my-5 first:mt-0">
            <a href="#" className="text-gray-500">
              <div className="flex px-12 py-4">
                <div className="mr-5">
                  <WalletIcon className="fill-gray-500" />
                </div>
                <span>Balance</span>
              </div>
            </a>
          </li>
          <li className="my-5 first:mt-0">
            <a href="#" className="text-gray-500">
              <div className="flex px-12 py-4">
                <div className="mr-5">
                  <ExhangeIcon className="fill-gray-500" />
                </div>
                <span>Transaction</span>
              </div>
            </a>
          </li>
          <li className="my-5 first:mt-0">
            <a href="#" className="text-gray-500">
              <div className="flex px-12 py-4">
                <div className="mr-5">
                  <ShoppingBagIcon className="fill-gray-500" />
                </div>
                <span>Product</span>
              </div>
            </a>
          </li>
          <li className="my-5 first:mt-0">
            <button className="w-full text-gray-500">
              <div className="flex justify-between px-12 py-4">
                <div className="flex">
                  <div className="mr-5">
                    <OrganizationChartIcon className="fill-gray-500" />
                  </div>
                  <span>Channel</span>
                </div>
                <div className="">
                  <ArrowUpIcon className="fill-gray-500" width="18" />
                </div>
              </div>
            </button>
            <div>
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
        </ul>
        <ul className="pt-4">
          <li className="my-5 first:mt-0">
            <a href="#" className="text-gray-500">
              <div className="flex px-12 py-4">
                <div className="mr-5">
                  <LogoutIcon className="fill-gray-500" />
                </div>
                <span>Logout</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
