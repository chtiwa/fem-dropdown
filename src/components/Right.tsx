const Right = () => {
  return (
    <picture className="flex-1 md:px-8">
      <source
        srcSet="/images/image-hero-mobile.png"
        media="(max-width:1024px)"
        className="object-cover"
      />
      <img
        src="/images/image-hero-desktop.png"
        alt=""
        className="object-cover max-h-[80vh]"
      />
    </picture>
  )
}

export default Right
