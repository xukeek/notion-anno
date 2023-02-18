'use client';

import Link from 'next/link';
import Image from '@/modules/shared/components/base/Image';
import styles from './page.module.css';
import { withMainLayoutHead } from '@/modules/shared/components/layouts/head/Main';

export interface Props {
  maintainer: string;
  query?: any;
}

export const getMaitainerAndQuery = async(): Promise<Props> => {
  const rawResult = await fetch('https://api.quran.gading.dev/');
  const result = await rawResult.json();
  return {
    maintainer: result.maintaner as string
  };
};

function About(props: Props) {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <main className="mt-10 md:-mt-10">
        <h1 className="text-center text-xl mb-10">
          {props.maintainer}
        </h1>

        <div className={styles.avatar}>
          <Image
            effect="blur"
            src="https://gading.dev/assets/images/authors/gading-talks.jpeg"
            size={200}
            alt="Sutan Gading Fadhillah Nasution"
            wrapperClassName="rounded-full overflow-hidden cursor-grab active:cursor-grabbing"
          />
        </div>

        <div className="flex items-center justify-center my-8 flex-col">
          <p>
            Passed Query:
          </p>
          <p>
            {JSON.stringify(props.query)}
          </p>
          <Link href="/" className="text-fuchsia-300 text-center mt-5 hover:underline underline-offset-4">
            Back to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
}

export default withMainLayoutHead(About, props => ({
  title: `About ${props.maintainer}`
}));
