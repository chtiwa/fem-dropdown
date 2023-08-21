const Left = () => {
  const clients = [
    "/images/client-databiz.svg",
    "/images/client-audiophile.svg",
    "/images/client-meet.svg",
    "/images/client-maker.svg"
  ]
  return (
    <div className="flex flex-col gap-y-4 sm:gap-y-12 px-2 sm:px-8 flex-1 md:py-24">
      <h1 className="text-2xl sm:text-6xl font-extrabold text-black">
        Make remote work
      </h1>
      <p className="text-sm sm:text-md text-gray-700">
        Get your teamin sync, No matter your location.
        <br />
        Streamline processes. Create team rituals, and watch productivity soar.
      </p>
      <button className="text-white bg-black rounded-2xl w-40 h-10 md:w-56 md:h-12 hover:bg-white hover:text-black border border-black ">
        Learn more
      </button>
      <div className="flex flex-wrap items-center justify-center sm:flex-nowrap gap-8">
        {clients.map((client, i) => (
          <img src={client} alt="" key={i} className="object-contain" />
        ))}
      </div>
    </div>
  )
}

export default Left
