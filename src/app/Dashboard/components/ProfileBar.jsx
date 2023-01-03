import { ReactComponent as MoreIcon } from '@/assets/more-2-line.svg'

export default function ProfileBar() {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src="#" alt="Profile Picture" />
            <div>
              <h3>Budi Budiman</h3>
              <p>Owner at PT Suka Maju</p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>Total Balance</span>
              </div>
              <MoreIcon />
            </div>
            <div>
              <span>Rp 1.580.000.000</span>
            </div>
            <button>Top Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}
