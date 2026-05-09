import Logo from '../../assets/hero.png'
const Header = () => {
  return (
       <header className="bg-white border-b border-gray-200 shadow-sm ">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className='flex items-center gap-1'>
                <img src={Logo} alt="Logo" width="50" height="100" />
                <h1 className="text-yellow-400 font-bold text-3xl">Sun<strong className="text-red-600">Sage</strong></h1>
                </div>
            <p className="text-stone-600 text-xl">Nobody understands your energy needs better than you do.</p>
            </div>   
        </header>
  )
}

export default Header