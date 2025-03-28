import React from 'react'
import Footer from '../components/Home-Sections/Footer'

const NewsandGallery: React.FC = () => {
  return (
    <div>
        
    <header className="top-0 bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo Section */}
        <div className="flex flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              LevelUp
            </a>
            <a href="/" className="flex items-center">
          <img src="/assets/logo.jpg" className="h-10"/>
        </a>
          </div>
        <nav className="flex space-x-6">
            <a href="/" className="hover:text-green-600">
              Home
            </a>
            <a href="/about" className="hover:text-green-600">
              About Us
            </a>
            <a href="/registration" className="hover:text-green-600">
            Registration
            </a>
            <a href="/newsAndGallery" className="hover:text-green-600">
            News and Gallery
            </a>
            <a href="/contact" className="hover:text-green-600">
              Contact Us
            </a>
          </nav>
      </div>
    </header>
    <main className="mt-16">
    <div
          className="relative bg-cover bg-center text-white py-36"
          style={{ backgroundImage: "url(/assets/img/page-title-bg.webp)" }}
        >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-[80%] text-center">
            <h1 className="text-4xl font-bold">News And Gallery</h1>
            <p className='mt-2'>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
            <p className="text-sm mt-3">Home / News And Gallery</p>
          </div>
        </div>
    </main>
    
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-green-600">NEWS</h2>
        <p className="text-gray-600">Providing Fresh Produce Every Single Day</p>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">

        <div className="sm:col-span-5">
        <a href="#">
            <div
                className="bg-cover text-center overflow-hidden"
                style={{
                minHeight: "300px",
                backgroundImage: `url("https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1")`,
                }}
                title="Woman holding a mug"
            ></div>
            </a>
            <div>
      </div>
            <div
                className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                    <a href="#"
                        className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                        Election
                    </a>
                    <a href="#"
                        className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">Revenge
                        of the Never Trumpers</a>
                    <p className="text-gray-700 text-base mt-2">Meet the Republican dissidents fighting to push Donald Trump
                        out of office—and reclaim their party</p>
                </div>
            </div>
        </div>

        <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                    Steps Back Into Coronavirus Spotlight</a>
            </div>
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">How
                    Trump's Mistakes Became Biden's Big Breaks</a>
            </div>
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey:
                    Many Americans 'Dissatisfied' With U.S.</a>
            </div>
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">How
                    Trump's Mistakes Became Biden's Big Breaks</a>
            </div>
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey:
                    Many Americans 'Dissatisfied' With U.S.</a>
            </div>
            <div className="">
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                    Steps Back Into Coronavirus Spotlight</a>
            </div>
        </div>

    </div>
</div>
<div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-green-600">GALLERY</h2>
        <p className="text-gray-600">Providing Fresh Produce Every Single Day</p>
      
<div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">
      <div>
      <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688025668.png" alt="Gallery image" />
      </div>
      <div>
      <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029344.png" alt="Gallery image" />
      </div>
      <div>
      <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029370.png" alt="Gallery image" />
      </div>
      <div>
      <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029384.png" alt="Gallery image" />
      </div>
      <div>
      <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029394.png" alt="Gallery image" />
      </div>
      <div>
      <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029408.png" alt="Gallery image" />
      </div>
      <div>
      <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029424.jpg" alt="Gallery image" />
      </div>
      <div>
      <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029434.png" alt="Gallery image" />
      </div>
      <div>
      <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029447.jpg" alt="Gallery image" />
      </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default NewsandGallery
