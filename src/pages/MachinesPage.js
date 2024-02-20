import React from 'react'
import MachinesTable from '../components/tables/MachinesTable'
import { useState } from 'react'


export default function MachinesPage() {
   const [isNewMachineVisible, setNewMachineVisibility] = useState(false);

    return(
        <div id='machines-container'>
        <h1 className='page-title'>MACHINES</h1>
        <MachinesTable></MachinesTable>  
        <button className='btn btn-dark' onClick={() => {setNewMachineVisibility(!isNewMachineVisible)}}>{isNewMachineVisible ? 'GO BACK': 'ADD NEW MACHINE'}</button>
        {isNewMachineVisible && <p>im adding a new machine</p> }    
        </div>
    )
}