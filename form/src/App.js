import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className='form'>
        <div className='name'>
          <label htmlFor="firstName" >First Name</label>
          <input placeholder="Suraj" id="firstName" name="firstName"/>
        </div>
          
        <div className='name'>
          <label htmlFor="lastName" >Last Name</label>
          <input placeholder="Gund" id="lastName" name="lastName"/>
        </div>

        <div className='name'>
          <label htmlFor="email" >Email Address</label>
          <input placeholder="abc@gmail.com" id="email" name="email"/>
        </div>

        
        <label className='name' htmlFor='country'>Country</label>
        <select id='country'>
          <option>India</option>
          <option>Pakistan</option>
          <option>Bangladesh</option>
          <option>Sri Lanka</option>
        </select>

        <div className='name'>
          <label htmlFor='address'>Street Address
          </label>
          <textarea id='address' placeholder='123 Main Street'> 

          </textarea>
        </div>


        <label className='name' htmlFor='city'>City</label>
        <select id='city'>
          <option>Solapur</option>
          <option>Mohol</option>
          <option>Pandharpur</option>
          <option>Mangud</option>
        </select>

        <div className='name'>
          <label>State/Province</label>
          <input id='state' placeholder='Maharashtra'></input>
        </div>

        <div className='name'>
          <label htmlFor='zipcode'>ZipCode</label>
          <input id='zipcode' placeholder='413253'></input>
        </div>

        <label htmlFor='check'>By Email</label>

        <div id='check' className='name' >

          <div>
            <input id='notify' name='comments' type='checkbox'></input>
            <label htmlFor='comment'>Comments</label>
          </div>
          <div>
            <input id='candidate' name='comments' type='checkbox'></input>
            <label htmlFor='candidate' >Candidate</label>

          </div>

          <div>

            <input id='offer' name='comments' type='checkbox'></input>
            <label htmlFor='offer' >Offer</label>

          </div>
          

          
        </div>

  
      
      </form>
    </div>
  );
}

export default App;
