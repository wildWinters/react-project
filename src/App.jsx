import { useState } from 'react'
import './App.css'

//  тут все треба
//  тут по ідеї це тупо було
// тут треба  буде це все перемістити src assets  всі картинки треба буде перемістити
//! треба в окремі файли компоненти перемістити 
//  де будуть спільні  компоненти
//  потім це все імпортувати треба буде 
//  файл для кожного окремого компонента 
{/*  26-29 в окреми  компонент і в children */}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Header/>
    </>
  )
}
// Header по  папках треба буде виділити 
function Header({children})
{

  return  (
    <>
    <header className='header'>
      <div className='Company_name_block'>
          <img src="../public/Group 166 (5).png" alt="Company_name_logo" className='logo'/>
          <h3 className='header_CN'>Company Name</h3>

      </div>

  <div className='children2Header'>
      <h3 id='Home'>Home</h3>
      <h3 id='Success'>Success Stories</h3>
      <h3 id='Services'>Services</h3>
      <h3 id='Blog'>Blog</h3>
      <h3 id="About">About us</h3>
      <h3 id='Carrer'>Career</h3>
  </div>

  <div className='user-block'>
    <img src="../public/Mask group.png" 
      alt="none" className='Adam_Sendler_img'/>
    <h3 className='Adam_Sendler'>Adam Sendler</h3>
  </div>
</header>
  </>
  )
}


function Main({children}){


  return  (
    <>



    </>
  );

  
}
export default App
