import Image from 'next/image';

export default function ImageContent() {
  return (
    <section className="py-16 px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 bg-base-200 text-base-content">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <Image
              alt="Decorative landscape"
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        </div>

        <div className="relative flex items-center bg-base-100">
          <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-base-200"></span>

          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
              esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
              architecto eius quis quibusdam fugiat dicta.
            </p>

            <a href="#" className="btn btn-primary mt-8">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
