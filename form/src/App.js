import './App.css';
import {useState} from 'react';

function App() {
  
  const [formData,setFormData] = useState({
    firstName:"",lastName:"",email:"",country:"India",address:"" , city:"",state:"",zipcode:"",comment:false,
    candidate:false,offer:false,
    a:""
  })

  function changeHandler(event){
  
    const{name,value,checked,type} = event.target;
    setFormData((prev)=>({
      ...prev,
      [name]:type==='checkbox'?checked:value
    }))
    
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
    
  }
  return (
    <div className="App">
      <form className='form' onSubmit={submitHandler}>
        <div className='name'>
          <label htmlFor="firstName" >First Name</label>
          <input  placeholder="Suraj" id="firstName" name="firstName" value={formData.firstName} onChange={changeHandler}/>
        </div>
          
        <div className='name'>
          <label htmlFor="lastName" >Last Name</label>
          <input type='text' placeholder="Gund" id="lastName" name="lastName" value={formData.lastName} onChange={changeHandler}/>
        </div>

        <div className='name'>
          <label htmlFor="email" >Email Address</label>
          <input type='text' placeholder="abc@gmail.com" id="email" name="email" value={formData.email} onChange={changeHandler}/>
        </div>

        
        <label className='name' htmlFor='country'>Country</label>
        <select id='country' name='country' onChange={changeHandler} value={formData.country}> 
          <option>India</option>
          <option>Pakistan</option>
          <option>Bangladesh</option>
          <option>Sri Lanka</option>
        </select>

        <div className='name'>
          <label htmlFor='address'>Street Address
          </label>
          <textarea type='text' id='address' name = 'address' value={formData.address} placeholder='123 Main Street' onChange={changeHandler}> 
          </textarea>
        </div>


        <label className='name' htmlFor='city'>City</label>
        <select id='city' name='city' value={formData.city} onChange={changeHandler}>
          <option>Solapur</option>
          <option>Mohol</option>
          <option>Pandharpur</option>
          <option>Mangud</option>
        </select>

        <div className='name'>
          <label>State/Province</label>
          <input id='state' placeholder='Maharashtra' name='state' value={formData.state} onChange={changeHandler}></input>
        </div>

        <div className='name'>
          <label htmlFor='zipcode'>ZipCode</label>
          <input id='zipcode' placeholder='413253' name='zipcode' value={formData.zipcode} onChange={changeHandler}></input>
        </div>

        <label htmlFor='check'>By Email</label>

        <div id='check' className='name' >

          <div>
            <input id='comment' name='comment' type='checkbox' checked={formData.comment} onChange={changeHandler}></input>
            <label htmlFor='comment'>Comment</label>
          </div>

          <div>
            <input id='candidate' name='candidate' type='checkbox' checked={formData.candidate} onChange={changeHandler}></input>
            <label htmlFor='candidate' >Candidate</label>
          </div>

          <div>
            <input id='offer' name='offer' type='checkbox' checked={formData.offer} onChange={changeHandler}></input>
            <label htmlFor='offer' >Offer</label>
          </div>
          
        </div>

        <fieldset>
          <legend>Push Notification</legend>

          <div>
            
            <div>
              <input type='radio' id='everything' name='a' value="Everything" onChange={changeHandler}></input>
              <label htmlFor='everything'>Everything</label>
            </div>

            <div>
              <input type='radio' id='sae' name='a'  value="Same as Email" onChange={changeHandler}></input>
              <label htmlFor='sae'>Same as Email</label>
            </div>

            <div>
              <input type='radio' id='npn' name='a'  value="No Push Notification" onChange={changeHandler}></input>
              <label htmlFor='npn'>No Push Notification</label>
            </div>
          </div>
        </fieldset>

        <button className='btn'>Save</button>

  
      
      </form>
    </div>
  );
}

export default App;
