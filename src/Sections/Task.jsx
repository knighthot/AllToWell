import React from 'react'
import '../components/Task.css'
import { RxDownload } from "react-icons/rx";
import gambar1 from '../assets/task1.png'
import gambar2 from '../assets/task2.png'
import gambar3 from '../assets/task3.png'
import gambar4 from '../assets/task4.png'
const Task = () => {
  
  const downloadLink1 = 'https://drive.google.com/drive/folders/114pKu1jFtZaQh8d23L4UzfKNYn2DUwCX';
  const downloadLink2 = 'https://drive.google.com/drive/folders/117laUJbKLxDNqieNjBwqFKk-Rklz6sUU';
  const downloadLink3 = 'https://drive.google.com/drive/folders/1jBc9gGaKsDgWifNkc6SuSzKD_9QsWok1?usp=sharing'
  const downloadLink4 = 'https://drive.google.com/drive/folders/1k4jEg-tq0RYfYha67IIXoTKzq81gM2ib?usp=sharing'
  return (
    <div className="task-container">
      <div className="card">
        <div className="task-content">
          <div className="task-header">
            <h1 className='taskTitle'>TASK I</h1>
            <h3 className=''>MEMBUAT ARTIKEL SISTEM PENGAMANAN KOMPUTER TENTANG MARKETPLACE DAN E-COMMERCE</h3>
          </div>
          <div className="task-footer">
          <a href={downloadLink1} download>
            <h2 style={{flexDirection:'row'}}><RxDownload size={30} /> Unduh</h2>
            </a>
            <img src={gambar1} style={{width:200}} />
          </div>
        </div>
      </div>

      <div className="card" id='card2'>
        <div className="task-content">
          <div className="task-header">
            <h1 className='taskTitleII'>TASK II</h1>
            <h3 id='subTitle'>MAKALAH TENTANG KAJAHATAN SIBER (PENIPUAN PHISING)</h3>
          </div>
          <div className="task-footer" id='taskfooter1'>
          <a href={downloadLink2} download>
            <h2 style={{flexDirection:'row'}}><RxDownload size={30} /> Unduh</h2>
            </a>
            <img id='image1' src={gambar2} style={{width:200}} />
          </div>
        </div>
      </div>

      <div className="card" id='card3'>
        <div className="task-content">
          <div className="task-header">
            <h1 className='taskTitleII'>TASK III</h1>
            <h3 className='h3'id='h3'>DATABASE!!!</h3>
          </div>
          <div className="task-footer" id='taskfooter2'>
          <a href={downloadLink3} download>
            <h2 style={{flexDirection:'row'}} className='h2' id='h2'><RxDownload size={30} /> Unduh</h2>
            </a>
            <img src={gambar4} style={{width:200}} />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="task-content">
          <div className="task-header">
            <h1 className='taskTitle'>TASK IV</h1>
            <h3 className='h3' id='h4'>COMING SOON!!</h3>
          </div>
          <div className="task-footer">
          <a href={downloadLink4} download>
            <h2 style={{flexDirection:'row'}}><RxDownload size={30} /> Unduh</h2>
            </a>
            <img src={gambar3} style={{width:200}} />
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Task