import { ReactComponent as MoreIcon } from '@/assets/more-2-line.svg'
import { ReactComponent as ArrowDownIcon } from '@/assets/arrow-down-s-line.svg'
import profilePicture from '@/assets/profile.png'

export default function ProfileBar() {
  return (
    <div className="bg-klikoo-secondary-80 p-8">
      <div>
        <div className="my-10 flex items-center justify-center">
          <div className="flex items-center">
            <img
              src={profilePicture}
              className="mr-4 h-16 w-16 rounded-full bg-slate-800 ring-4 ring-klikoo-primary-60 ring-offset-4"
              alt="Profile Picture"
            />
            <div className="mr-4">
              <h3 className="text-xl font-bold">Budi Budiman</h3>
              <p className="text-base font-bold text-gray-500">Owner at PT Suka Maju</p>
            </div>
            <button className="p-1">
              <ArrowDownIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-md bg-white p-6 shadow-lg">
          <div className="flex items-center">
            <div className="w-full text-center">
              <span className="text-lg font-bold text-gray-500">Total Balance</span>
            </div>
            <button>
              <MoreIcon />
            </button>
          </div>
          <div className="text-center ">
            <span className="text-3xl font-bold">Rp 1.580.000.000</span>
          </div>
          <button className="w-full rounded-xl bg-klikoo-primary-100 p-4 text-center text-lg font-bold text-white transition-colors hover:bg-klikoo-primary-60">
            Top Up
          </button>
        </div>
      </div>
    </div>
  )
}
