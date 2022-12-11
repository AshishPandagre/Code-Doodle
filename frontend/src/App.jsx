import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'
import CodeEditor from './components/CodeEditor/CodeEditor'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Test from './components/Test'
import Input from './components/Test/Input'
import Output from './components/Test/Output'

function App() {

  return (
    <div className='bg-[#252525] h-screen flex flex-col'>
      <Header />
      <ReflexContainer orientation='vertical' className='flex flex-1 overflow-auto'>

        <ReflexElement className='min-w-0' flex={0.2} minSize={64}> <Sidebar /> </ReflexElement>

        <ReflexSplitter className='w-3 bg-[#252525] cursor-col-resize' />

        <ReflexElement className='min-w-0 flex flex-col h-full'> <CodeEditor /> </ReflexElement>

        <ReflexSplitter className='w-3 cursor-col-resize' />

        <ReflexElement className='min-h-0 min-w-0 h-full'> <Test /> </ReflexElement>

      </ReflexContainer>
    </div>
  )
}

export default App
