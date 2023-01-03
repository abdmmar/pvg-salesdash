import { clsx } from 'clsx'

import { ReactComponent as ArrowRightDownIcon } from '@/assets/arrow-right-down-line.svg'
import { ReactComponent as ArrowRightUpIcon } from '@/assets/arrow-right-up-line.svg'
import { ReactComponent as ArrowRightIcon } from '@/assets/arrow-right-line.svg'

function CardStatsIcon({ status }) {
  console.log(status)
  switch (status) {
    case 'up':
      return <ArrowRightUpIcon className="fill-green-500" width="18" />
    case 'down':
      return <ArrowRightDownIcon className="fill-red-500" width="18" />
    case 'normal':
      return <ArrowRightIcon className="fill-yellow-500" width="18" />
    default:
      return null
  }
}

export default function CardStats({ label, number, status, description, children }) {
  return (
    <div className="rounded-xl p-4 shadow-lg shadow-klikoo-primary-100/10">
      <div>
        <span className="font-bold text-gray-500">{label}</span>
      </div>
      <div>
        {children ? (
          children
        ) : (
          <span className="text-3xl font-bold">
            {typeof number === 'number'
              ? new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(number)
              : number}
          </span>
        )}
      </div>
      <div className="mt-1 flex items-center justify-end">
        <CardStatsIcon status={status} />
        <span
          className={clsx(
            'text-sm font-bold',
            status === 'up' && 'text-green-500',
            status === 'down' && 'text-red-500',
            status === 'normal' && 'text-yellow-500',
          )}
        >
          {description}
        </span>
      </div>
    </div>
  )
}
