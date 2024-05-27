import { HeroVoluntary } from '@/components/organisms/HeroVoluntary/HeroVoluntary'
import { VolunteerForm } from '@/components/organisms/VolunteerForm/VolunteerForm'
import { YourObligations } from '@/components/organisms/YourObligations/YourObligations'
import React from 'react'

export default function page() {
  return (
    <>
      <HeroVoluntary />
      <YourObligations />
      <VolunteerForm />
    </>
  )
}
