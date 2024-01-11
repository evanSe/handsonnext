import Image from 'next/image'

import Grid from '@/components/Grid'
import { data } from './data'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Grid data={data}></Grid>
    </main>
  )
}
