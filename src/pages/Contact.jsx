import { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'
import Fox from '../models/Fox';

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState (false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm ({ ...form, [e.target.name]: e.target.value })
  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')

    emailjs.send(
      "service_ic0kk7s",
      "template_0e9qqa9",
      {
        from_name: form.name,
        to_name: "Sudhanshu",
        from_email: form.email,
        to_email: 'sudhanshu.98t@gmail.com',
        message: form.message
      },
      "wjZSZ_VV4ffBNaTcu"
    ).then(() => {

      setIsLoading (false);
      showAlert({show: true, text: 'Message sent successfully!', type: 'success'})

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
        setForm({name: '', email: '', message: ''});
      }, [3000])
      
    
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log(error);
      showAlert({show: true, text: 'I didnt receive your message!', type: 'danger'})
    })
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert  {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get In Touch</h1>

        <form 
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}          
        >
          <label className='text-bold-500 font-semibold'>Name
            <input 
              type="text" 
              name="name"
              className="input"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-bold-500 font-semibold'>Email
            <input 
              type="email" 
              name="email"
              className="input"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-bold-500 font-semibold'>Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>


        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]
      ">
        <Canvas
            camera = {{position: [0, 0, 7],
            fox: 75,
            near: 1,
            far: 1000
          }}

        >
          <directionalLight intensity={2.5} position={[0, 0, 5]} />
          <ambientLight intensity = {0.5} />
          <Suspense fallback={<Loader />}>
            <Fox 
              position = {[0.5, 0.35, 0]}
              rotation = {[12.6, -0.6, 0]}
              scale = {[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
            
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact