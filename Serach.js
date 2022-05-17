import React,{useState} from 'react'

function Serach(props) {
    const [name,setName]=useState("");
    const submitHandler = (e) =>
    {
        e.preventDefault();
        console.log(`artist =`,name);
        props.serach(name);
    }
  return (
    <div className='col-md-5 offset-md-3'>
        <div className='card'>
            <div className='card-body'>
                <form autoComplete='off' onSubmit={submitHandler}>
                    <div className='form-group'>
                        <div className='input-group'>
                            <input type="search" name='artist' id='artist'
                            value={name} onChange={(e)=>setName(e.target.value)}
                             className='form-control' placeholder='Enter artist name here' required/>
                            <input type="submit" value="serach" className='btn btn-success'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Serach