import { ReactComponent as DashboardIcon } from '@/assets/dashboard-line.svg'

export default function SideBar() {
  return (
    <div>
      <div>SalesDash</div>
      <nav className="divide-y">
        <ul>
          <li>
            <div>
              <div>
                <DashboardIcon className="fill-klikoo-primary-100" />
              </div>
              <a href="#">Dashboard</a>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
