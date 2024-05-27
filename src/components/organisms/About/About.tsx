import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 px-24 py-16 md-5:px-20 md-6:px-10 md-7:px-4">
      <h1 className="text-5xl md-5:text-4xl md-7:text-3xl md-10:text-center">
        Conheça a História
      </h1>
      <section className="flex w-full items-center justify-center md-8:flex-col-reverse md-8:gap-6">
        <div className="flex w-1/2 flex-col items-center justify-center gap-6 md-9:w-full">
          <p className="md-5:text-sm md-7:text-xs">
            A história começa assim, blablabl. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut nec auctor purus. Cras bibendum
            porttitor augue sit amet congue. Aliquam dictum turpis nulla, ut
            rutrum mi pellentesque in. Integer at vestibulum magna. Vestibulum
            at leo urna. Mauris eu dolor orci. Nulla ultricies est non dignissim
            sollicitudin.
          </p>
          <p className="md-5:text-sm md-7:text-xs">
            Etiam sed dictum diam. Mauris porta, mi et dignissim malesuada,
            mauris nisl finibus nisi, quis varius elit ipsum eu nunc. Aenean
            porta enim suscipit sapien vulputate pharetra. Fusce placerat mattis
            urna eget interdum. Duis consectetur consequat imperdiet. Sed urna
            metus, lobortis vel felis in, tristique sollicitudin ligula.
          </p>
        </div>
        <div className="flex w-1/2 items-center justify-center md-9:w-full">
          <Image
            alt=""
            src="/donizete.png"
            width={220}
            height={220}
            className="h-96 w-64 object-cover md-5:h-72 md-5:w-56"
          ></Image>
        </div>
      </section>
    </section>
  )
}
