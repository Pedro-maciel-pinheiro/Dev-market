import React from 'react'
import { auth } from '@/auth'

export default async function SettingsPage() {
    const session = await auth()
  return (
    <div className='h-screen text-5xl'>
        {JSON.stringify(session)}
    </div>
  )
}
