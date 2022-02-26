import React from 'react'
import AmbulanceType from './AmbulanceType'
import Form from './Form'

function MainSection() {
  return (
    <>
        <div class="flex flex-row mt-8 p-4 gap-2">
        <div class="basis-3/5">
            <AmbulanceType/>
        </div>
        <div class="basis-2/5">
            <Form></Form>
        </div>
        </div>
    </>
  )
}

export default MainSection