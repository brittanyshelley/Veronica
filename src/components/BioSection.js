// components/Bio.js
import Image from 'next/image';

export default function BioSection() {
  return (
    <div className="card card-side bg-base-100 shadow-xl mx-auto max-w-4xl p-5">
      <figure>
        <Image
          src="https://placeimg.com/200/200/people"
          alt="Mortgage Broker"
          className="rounded-full"
          width={96}
          height={96}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">John Doe</h2>
        <p>John Doe is an experienced mortgage broker with over 10 years of experience helping clients find the perfect mortgage solution. Whether you&apos;re buying your first home or refinancing, John can guide you through the process.</p>
        <div>
          <strong>Contact:</strong>
          <p>Email: john.doe@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
}



