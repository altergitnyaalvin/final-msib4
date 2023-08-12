import Image from 'next/image'
import data from './json/mentees.json'

export default async function Home() {
  return (
    <main className='min-h-screen flex flex-col justify-center align-middle md:p-3 p-5'>
      <h1 className='font-bold text-center text-white mt-7 text-6xl title-shadow font-sans md:mb-0 mb-7'>Farewell 🎉</h1>
      <div className='min-h-screen flex md:flex-row flex-col md:justify-evenly mx-auto text-white'>
        <div className='md:w-[40%] flex flex-col justify-center drop-in'>
          <h1 className='font-bold text-2xl text-left mb-3 drop-shadow-md font-sans'>Congratulations 🎉</h1>
          <p className='text-left leading-6 drop-shadow-sm'>Untuk seluruh rekan-rekan mentee kelas B React JS Program Studi Independen MSIB batch 4 yang telah mengikuti rangkaian program hingga selesai. 
            Apapun hasil yang kalian dapatkan setelah menempuh program yang melelahkan selama 6 bulan ini semoga menjadi titik awal karir kalian di masa yang akan datang.</p>

          <h1 className='font-bold text-2xl text-left mt-7 drop-shadow-md font-sans'>Big Thanks 🙏</h1>
          <p className='text-left leading-6 my-5 drop-shadow-sm'>Terima kasih kepada Alterra Academy atas kerja samanya dan yang sudah memercayai saya sebagai mentor kembali di Kampus Merdeka batch 4 ini. Terima kasih sebesar-besarnya kepada para mentee kelas B React JS yang telah mengikuti semua rangkaian di batch 4 ini dan mau menerima saya sebagai mentor kalian.</p>
          <p className='text-left leading-6 drop-shadow-sm'>Sehubung dengan masa kerja saya sebagai Mentor React JS di program Kampus Merdeka Batch 4 ini, Saya Alvin Miftah Fauzi menyampaikan undur diri dan pamit kepada seluruh tim dan mentee yang sudah bekerja sama dengan saya selama 6 bulan ini. 6 bulan memang waktu yang sebentar tapi menjadi suatu kehormatan bagi saya untuk bekerja sama dengan kalian. </p>
        </div>
        <div className='md:w-[40%] mt-5 md:mt-0 flex flex-col justify-center drop-in'>
          <Image 
            src={'/images/bg-image.png'}
            width={600}
            height={300}
            alt='Foto Bareng'
          />
        </div>
        <svg className="animate-bounce w-6 h-6" />
      </div>
      <h2 className='font-bold text-3xl text-center mb-5 text-rose-200 drop-shadow-md font-sans title-shadow'>Glad to See You 🤙</h2>
      <div className='grid md:grid-cols-3 grid-flow-row gap-6 justify-items-center mt-3 mx-auto md:w-10/12 my-56 mt-20'>
        {
          data?.map((item, index) => {
            return <div key={index} className='bg-white rounded-[1em] overflow-hidden shadow-lg md:p-6 p-4 border-solid border-2 border-white w-full text-left'>
              <h3 className='text-2xl font-bold my-2 text-blue-900 font-sans'>{item.name}</h3>
              <p className='text-sm mb-2 text-blue-500 font-semibold font-sans'>{item.appellation}</p>
              <p className='text-base text-slate-800'>{item.description}</p>
            </div>
          })
        }
      </div>
      <footer className='text-center text-yellow-50 mb-6 text-lg'>
        Made with 🤟 by alvnmfth.
      </footer>
    </main>
  )
}
