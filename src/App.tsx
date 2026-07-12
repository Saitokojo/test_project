import Button from "./components/ui/button.tsx"
import './App.css'
import ClickSpark from './components/sparkclick.tsx';
import Galaxy from "./components/background.tsx";


function App() {

  return (
    <ClickSpark
  sparkColor="#3D2B1F"
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
  >
    <>
      <div style={{ width: '100%', height: '200vh', position: 'relative' }}>
        <Galaxy />
          <div className="flex flex-col items-center justify-center"
                style={{position:'absolute', inset: 0, zIndex:1}}>
            <Button label="Click me" onClick={() => console.log('Clicked!')} />
            <Button label="Disabled" disabled />
            <Button label="Secondary" variant="secondary" onClick={() => alert('Hi')} />
          </div>
      </div>
      
    </>
  </ClickSpark>
    
  )
}

export default App
