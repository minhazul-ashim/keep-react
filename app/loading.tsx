'use client'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-white dark:bg-metal-900">
      <Image
        src="https://staticmania.cdn.prismic.io/staticmania/16a2c7da-ede2-49d5-8a62-7ac2bc3a8bc0_Property+1%3DSearch_+Property+2%3DMd.svg"
        alt="loading"
        height="300"
        width="400"
      />
      <div className="mt-8 flex items-center gap-3">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-dashed border-metal-900 dark:border-white"></div>
        <h1 className="animate-pulse text-body-2 font-normal text-metal-900 dark:text-white">Please Wait</h1>
      </div>
    </div>
  )
}

export default Loading
