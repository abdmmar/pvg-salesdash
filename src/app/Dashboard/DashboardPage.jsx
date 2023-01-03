import SideBar from './components/SideBar'
import ProfileBar from './components/ProfileBar'
import Dashboard from './components/Dashboard'

export default function DashboardPage() {
  return (
    <div className="grid h-screen grid-cols-dashboard">
      <SideBar />
      <Dashboard />
      <ProfileBar />
    </div>
  )
}
