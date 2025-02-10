import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return(
    <div>
      <Head>
        <title>Whisper-Net | Home</title>
      </Head>
      <div className="mb-10 p-3 border rounded">
        <Image
          src="/images/background.jpg"
          alt="image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}