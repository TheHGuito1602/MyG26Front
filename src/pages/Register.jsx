import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {reset,register} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {
 const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
 })

 const {name, email, password, password2} = formData

 const navigate = useNavigate()
 const dispatch = useDispatch()

 const {user, isLoading, isError, isSuccess, message} = useSelector((state)=>state.auth)

 const onChange = (e) =>{
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
    }))
 }

 const onSubmit = (e) =>{
    e.preventDefault()

    if(password!==password2){
        toast.error('Los passwords no coinciden')
    }else{
        const userData ={
            name,email,password
        }
        dispatch(register(userData))
    }
 }

 useEffect(()=>{

    if(isError){
        toast.error(message)
    }

    if(isSuccess){
        navigate('/login')
    }

    dispatch(reset())

 }, [user, isError, isSuccess, message, navigate, dispatch])

if(isLoading){
    return <Spinner></Spinner>
}
 
  return (
    <>
        <section className='heading'>
            <h4>
                <FaUser></FaUser>
                Registrar Ususario
                <p>Por favor, crea un usuario</p>
            </h4>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input 
                        type="text"
                        className='form-control'
                        id='name'
                        name='name'
                        value={name}
                        placeholder='Por favor, escribe tu nombre'
                        onChange={onChange}
                    />
                </div>
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
                <div className='form-group'>
                    <input 
                        type="password"
                        className='form-control'
                        id='password2'
                        name='password2'
                        value={password2}
                        placeholder='Por favor, confirma tu contraseña'
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

export default Register