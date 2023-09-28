import React from 'react'

function about() {
  return (
    <div className="flex min-h-screen flex-col items-center p-12 font-overpass">

        <h1 className="text-4xl font-bold mb-5 border-b-2 border-sky-600 pb-3">About Me</h1>
            <div className="flex flex-col mb-5">
                <p className="text-lg mb-5">I am a bridge-builder, connector, and communicator.</p>
                <p className="text-lg mb-5">I am a servant leader who truly cares about people <br/> and fosters a culture of trust, honor, and love.</p>
                <p className="text-lg">I love to learn and seek to extend my skillset <br/> with new languages and frameworks.</p>
                
            </div>
    </div>
  )
}

export default about