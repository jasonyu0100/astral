// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// interface WithAuthProps {
// }

// const withAuth = <P extends WithAuthProps>(
//   WrappedComponent: React.ComponentType<P>
// ) => {
//   const AuthComponent: React.FC<P> = (props) => {
//     const router = useRouter();

//     const isAuthenticated = true; // Replace with your actual authentication logic

//     useEffect(() => {
//       if (!isAuthenticated) {
//         router.push('/login');
//       }
//     }, [isAuthenticated, router]);

//     // Render the wrapped component if authenticated
//     return isAuthenticated ? <WrappedComponent {...props} /> : null;
//   };

//   // Copy static methods and properties from the original component to the HOC
//   if (WrappedComponent.getInitialProps) {
//     AuthComponent.getInitialProps = WrappedComponent.getInitialProps;
//   }

//   return AuthComponent;
// };

// export default withAuth;

//     // <PortalBackground>
//     //   <div className="flex flex-col w-full h-full justify-center items-center p-[3rem]">
//     //     <div className="h-full aspect-[13/16] p-[50px] bg-white shadow-2xl flex flex-col">
//     //       <div className="w-full aspect-square flex-shrink-0">
//     //         <div className="w-full h-full bg-black"></div>
//     //       </div>
//     //       <div className="flex flex-col items-center justify-center w-full h-full">
//     //         <div className="text-center w-full text-slate-900 text-[64px] font-normal font-permanentMarker leading-9 capitalize">
//     //           Redirecting
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </PortalBackground>
