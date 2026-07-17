import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'


function App() {

  return (
    <>
      <h3>My App</h3>
      <header>
        <Show when="signed-out">
          <SignInButton mode='modal' />
          <SignUpButton mode='modal' />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default App
