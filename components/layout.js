import Link from 'next/link';

export default function Layout({ children, home }) {
   return (
      <div>
         <main>{children}</main>
         {!home && (
            <div>
               <Link href="/">
                  <a>← Back to home</a>
               </Link>
            </div>
         )}
      </div>
   );
}
