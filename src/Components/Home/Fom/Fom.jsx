import React from 'react'
import './Fom.css'

function Fom() {
  return (
    <div className='pr-c'>
        <div className='f_L'>
            <p>Low Sperm Count?</p>
            <p>Low Motility?</p>
        </div>
        <div className='n-l'>
            <div className="n">
            <p>NOT TO WORRY</p>
            </div>
            
            <p>Talk to our Experts</p>
        </div>
        <div className="mn-frm">
            <p>I want to talk to an Expert</p>
            <div className="input-cont">
            <div className="frm1">
            <label >Name : <input type="text" placeholder="Name" required/></label>
            <label >Mobile : <input type="number" placeholder="Mobile" required/></label>
            <label >City : <input type="text" placeholder="City"required/></label>
            </div>
            <div className="frm1">
            <label >Email : <input type="email" placeholder="Email"required/></label>
            <label >Please Provide Your Problems  : 
                <select name="problem" id="prob">
                    <option value="Low Sperm Count">Low Sperm Count</option>
                    <option value="Low Motility">Low Motility</option>
                    <option value="PCOD">PCOD</option>
                    <option value="PCOS">PCOS</option>
                    <option value="Unexplained Infertility">Unexplained Infertility</option>
                    <option value="Other">Other
                    </option>
                </select>
            </label>
            <label >Explain Other Problems : <input type="text" placeholder="Explain Other Problems"required/></label>
            </div>
            </div>
            <button>SEND</button>
        </div>
    </div>
  )
}

export default Fom