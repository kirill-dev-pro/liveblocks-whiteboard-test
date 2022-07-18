import Whiteboard from '../LiveblocksWhiteboard'
import React from 'react'

export default function Home() {
  return (
    <main style={{ height: '100vh' }}>
      <header>
        <h1>Test of liveblocks whiteboard</h1>
      </header>
      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center ',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            height: 300,
            width: 1000,
            overflow: 'hidden',
            // position: 'absolute',
            // top: '20%',
            // left: '10%',
          }}
        >
          <Whiteboard />
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY
  const API_KEY_WARNING = process.env.CODESANDBOX_SSE
    ? `Add your secret key from https://liveblocks.io/dashboard/apikeys as the \`LIVEBLOCKS_SECRET_KEY\` secret in CodeSandbox.\n` +
      `Learn more: https://github.com/liveblocks/liveblocks/tree/main/examples/nextjs-whiteboard#codesandbox.`
    : `Create an \`.env.local\` file and add your secret key from https://liveblocks.io/dashboard/apikeys as the \`LIVEBLOCKS_SECRET_KEY\` environment variable.\n` +
      `Learn more: https://github.com/liveblocks/liveblocks/tree/main/examples/nextjs-whiteboard#getting-started.`

  if (!API_KEY) {
    console.warn(API_KEY_WARNING)
  }

  return { props: {} }
}
