import { numberToIDR } from '@/utils/number'

export default function CardAgent({ agent }) {
  return (
    <div className="grid grid-flow-col items-center justify-center gap-4">
      <img
        src={agent.img}
        className="mr-4 h-14 w-14 rounded-full bg-slate-800 ring-4 ring-klikoo-primary-60 ring-offset-4"
        alt="Profile Picture"
      />
      <div>
        <span className="text-base font-bold text-klikoo-primary-100">{agent.name}</span>
        <table>
          <tr>
            <td>
              <span className="text-left text-sm font-semibold text-gray-500">Profit</span>
            </td>
            <td>
              <span className="ml-2 text-left text-sm font-bold">{numberToIDR(agent.profit)}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="text-left text-sm font-semibold text-gray-500">Sales</span>
            </td>
            <td>
              <span className="ml-2 text-left text-sm font-bold">{numberToIDR(agent.sales)}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="text-left text-sm font-semibold text-gray-500">Transaction</span>
            </td>
            <td>
              <span className="ml-2 text-left text-sm font-bold">
                {agent.transaction} transactions
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
