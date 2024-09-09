import loader from '/loader.gif'

const Loading  = () => {
  return (
    <>
    <div className='w-full h-screen flex items-center justify-center bg-black'>
        <img className='transition-all ease-linear h-[50%] ' src={loader} alt="" />
    </div>
    </>
  )
}

export default Loading 