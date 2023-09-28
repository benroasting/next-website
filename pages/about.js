import React from 'react'

function about() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1 className="text-4xl font-bold mb-3">Contact</h1>
            <div>
                <div className="flex flex-col mb-5 border-b-2 border-sky-600 pb-5">
                    <p className="text-2xl font-bold ">Ben Young</p>
                    <p className="text-lg">Software Engineer</p>
                    <p className="text-lg">... currently in Nashville, TN</p>
                </div>
            </div>
    </div>
  )
}

export default about