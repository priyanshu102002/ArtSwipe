"use client"

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>DashboardPage
      <LogoutLink>logout</LogoutLink>
    </div>
  )
}

export default DashboardPage