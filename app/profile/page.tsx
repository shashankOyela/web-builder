'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const ProfilePage = () => {
    const router = useRouter()
  return (
    <>
    <button onClick={() => router.push('/form')} style={{cursor: 'pointer'}}>Edit Profile</button>
    <div>ProfilePage according to data</div>
    </>
  )
}

export default ProfilePage