import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:''
 })

 const {email, password} = formData

 const onChange = (e) =>{
  setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
  }))
}

const onSubmit = (e) =>{
  e.prevenDefault()
}

  return (
    <>
        <section className='heading'>
            <h4>
                <FaSignInAlt></FaSignInAlt>
                Entrar a la App
                <p>Por favor, ingrese sus credenciales</p>
            </h4>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input 
                        type="email"
                        className='form-control'
                        id='email'
                        name='email'
                        value={email}
                        placeholder='Por favor, escribe tu email'
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input 
                        type="password"
                        className='form-control'
                        id='password'
                        name='password'
                        value={password}
                        placeholder='Por favor, escribe tu contraseña'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>
                        Registrar usuario
                    </button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login