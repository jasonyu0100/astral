import { exampleFileElement } from '@/server/model/elements/file/main';
import { ContextForUserObj } from '@/server/model/user/main';
import { useContext } from 'react';

export function NetworkCreativeRowAbout() {
  const user = useContext(ContextForUserObj);

  function maskEmail(email) {
    // Check for structured email format
    if (email.includes('@') && email.split('@')[1]?.includes('.')) {
      // Split the email into local part and domain
      const [localPart, domain] = email.split('@');
      const [domainName, domainExtension] = domain.split('.');

      // Mask each part with a helper function
      const maskString = (str) => {
        if (str.length <= 2) return str[0] + '*'; // Mask only the last character if very short
        return str[0] + '*'.repeat(str.length - 2) + str.slice(-1); // Mask middle characters
      };

      // Masked email parts
      const maskedLocalPart = maskString(localPart);
      const maskedDomainName = maskString(domainName);
      const maskedDomainExtension = maskString(domainExtension);

      return `${maskedLocalPart}@${maskedDomainName}.${maskedDomainExtension}`;
    } else {
      // Fallback masking algorithm for unstructured inputs
      const maskFallback = (str) => {
        if (str.length <= 2) return str[0] + '*';
        return str[0] + '*'.repeat(str.length - 2) + str.slice(-1);
      };

      // Replace "@" and "." for unstructured inputs and apply fallback masking
      const fallbackEmail = email.replace(/@/g, 'a').replace(/\./g, 'dot');
      return maskFallback(fallbackEmail);
    }
  }

  return (
    <div className='flex flex-row items-center space-x-[2rem]'>
      <img
        src={user?.dp?.src || exampleFileElement.src}
        className='h-[3rem] w-[3rem] rounded-full object-cover'
      />
      <div className='flex flex-col justify-center'>
        <p className='text-lg font-bold text-white'>{user?.displayName}</p>
        <p className='font-light text-white'>{maskEmail(user?.email)}</p>
      </div>
    </div>
  );
}
