import Chart from 'react-apexcharts'

import CardStats from './CardStats'
import CardProduct from './CardProduct'
import CardAgent from './CardAgent'

import { numberToIDR } from '@/utils/number'
import { currentDateFormatter } from '@/utils/date'
import taxiMaximLogo from '@/assets/taxi-maxim.png'
import telkomselLogo from '@/assets/telkomsel.png'
import threeLogo from '@/assets/three.png'
import ovoLogo from '@/assets/ovo.png'
import PLNLogo from '@/assets/pln.png'
import profilePicture from '@/assets/profile.png'

const products = [
  {
    img: taxiMaximLogo,
    name: 'Maxim',
    price: '150.000',
    transaction: 120,
  },
  {
    img: telkomselLogo,
    name: 'Telkomsel',
    price: '25.000',
    transaction: 98,
  },
  {
    img: threeLogo,
    name: 'Three',
    price: '50.000',
    transaction: 74,
  },
  {
    img: ovoLogo,
    name: 'OVO',
    price: '100.000',
    transaction: 68,
  },
  {
    img: PLNLogo,
    name: 'PLN Postpaid',
    price: ' ',
    transaction: 50,
  },
]

const agents = [
  {
    img: profilePicture,
    name: 'PT Suka Maju Jakarta',
    profit: 3700000,
    sales: 7230000,
    transaction: 43,
  },
  {
    img: profilePicture,
    name: 'PT Suka Maju Jakarta',
    profit: 3700000,
    sales: 7230000,
    transaction: 43,
  },
  {
    img: profilePicture,
    name: 'PT Suka Maju Jakarta',
    profit: 3700000,
    sales: 7230000,
    transaction: 43,
  },
  {
    img: profilePicture,
    name: 'PT Suka Maju Jakarta',
    profit: 3700000,
    sales: 7230000,
    transaction: 43,
  },
  {
    img: profilePicture,
    name: 'PT Suka Maju Jakarta',
    profit: 3700000,
    sales: 7230000,
    transaction: 43,
  },
]

export default function Dashboard() {
  return (
    <div className="max-[md,lg]:p-8 py-8 px-14 max-lg:p-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-lg font-bold text-gray-500">Today's date: {currentDateFormatter()}</p>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={profilePicture}
            className="mr-4 h-8 w-8 rounded-full bg-slate-800 ring-4 ring-klikoo-primary-60 ring-offset-4"
            alt="Profile Picture"
          />
        </div>
      </header>
      <main className="mt-12 grid gap-10">
        <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-md:gap-4">
          <CardStats
            label="Profit"
            number={11500000}
            status="down"
            description={'0.3% compared to 7 days ago'}
          />
          <CardStats
            label="Sales"
            number={56000000}
            status="up"
            description={'0.5% compared to 7 days ago'}
          />
          <CardStats label="Transaction" status="normal" description={'same as 7 days ago'}>
            <span className="text-3xl font-bold">1.090 </span>
            <span className="text-xl font-bold">transactions</span>
          </CardStats>
        </section>
        <section className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
          <div className="grid gap-10 lg:col-start-1 lg:col-end-3">
            <section className="rounded-xl p-4 shadow-lg shadow-klikoo-primary-100/10">
              <div>
                <span className="font-bold text-gray-500">Sales Chart</span>
              </div>
              <div>
                <Chart
                  type="area"
                  height={300}
                  options={{
                    chart: {
                      id: 'sales-week-1',
                      toolbar: {
                        show: false,
                      },
                    },
                    colors: ['#545DFF'],
                    dataLabels: {
                      enabled: false,
                    },
                    stroke: {
                      curve: 'smooth',
                    },
                    xaxis: {
                      categories: [
                        "04 Apr'22",
                        "05 Apr'22",
                        "06 Apr'22",
                        "07 Apr'22",
                        "08 Apr'22",
                        "09 Apr'22",
                        "10 Apr'22",
                      ],
                      tickAmount: 2,
                      axisTicks: {
                        show: true,
                        borderType: 'bordered',
                      },
                      labels: {
                        style: {
                          colors: [
                            '#BDBDBD',
                            '#BDBDBD',
                            '#BDBDBD',
                            '#BDBDBD',
                            '#BDBDBD',
                            '#BDBDBD',
                            '#BDBDBD',
                          ],
                          fontFamily: 'Nunito Sans, Roboto, Helvetica, sans-serif',
                          fontSize: '14px',
                        },
                      },
                    },
                    yaxis: [
                      {
                        max: 8000000,
                        min: 0,
                        tickAmount: 4,
                        labels: {
                          style: {
                            colors: ['#BDBDBD'],
                            fontFamily: 'Nunito Sans, Roboto, Helvetica, sans-serif',
                            fontSize: '14px',
                          },
                          formatter: (val) => {
                            return numberToIDR(val)
                          },
                        },
                      },
                    ],
                    fill: {
                      type: 'gradient',
                      gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 90, 100],
                      },
                    },
                  }}
                  series={[
                    {
                      name: 'sales-week-1',
                      data: [3500000, 2200000, 4200000, 2100000, 4000000, 3800000, 5000000],
                    },
                  ]}
                />
              </div>
            </section>
            <section className="h-fit rounded-xl p-4 shadow-lg shadow-klikoo-primary-100/10">
              <div className="mb-5">
                <span className="font-bold text-gray-500">Top 5 Products</span>
              </div>
              <div className="grid grid-flow-dense grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4">
                {products.map((product) => (
                  <CardProduct product={product} />
                ))}
              </div>
            </section>
          </div>
          <section className="rounded-xl p-4 shadow-lg shadow-klikoo-primary-100/10">
            <div className="mb-4">
              <span className="font-bold text-gray-500">Top 5 Agents</span>
            </div>
            <div className="grid gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {agents.map((agent) => (
                <CardAgent agent={agent} />
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}
