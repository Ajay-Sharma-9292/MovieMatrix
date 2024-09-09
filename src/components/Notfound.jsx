import notfound from '/404.gif'

const Notfound  = () => {
  return (
    <>
    <div className='w-full h-screen flex items-center justify-center bg-black'>
        <img className='transition-all ease-linear h-[50%] ' src={notfound} alt="" />
    </div>
    </>
  )
}

export default Notfound 