import SideBar from './components/SideBar'
import ProfileBar from './components/ProfileBar'

import { currentDateFormatter } from '@/utils/date'
// CardStatus
// CardProduct
// CardAgent

export default function Dashboard() {
  return (
    <div>
      <SideBar />
      <div>
        <header>
          <h1>Dashboard</h1>
          <p>Today's date: {currentDateFormatter()}</p>
        </header>
        <main>
          <section>
            <div>Status Card</div>
          </section>
          <section>
            <div>
              <section>Sales Chart</section>
              <section>Top 5 Products</section>
            </div>
            <section>Top 5 Agents</section>
          </section>
        </main>
      </div>
      <ProfileBar />
    </div>
  )
}
