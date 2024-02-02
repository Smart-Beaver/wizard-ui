import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { Radio } from '@/components/data-entry/radio/Radio';
import PSP34DisclaimerModal from '@/components/homepage/sidebar-form/form-sections/PSP34DisclaimerModal';
import type { PSPUnion } from '@/components/homepage/sidebar-form/formConstants';
import { SUPPORTED_STANDARDS } from '@/components/homepage/sidebar-form/formConstants';

interface FormValues {
  standard: PSPUnion;
}

export function Standard() {
  const [open, setOpen] = useState(false);
  const standardButton: PSPUnion = useWatch<FormValues>({
    name: 'standard'
  });

  useEffect(() => {
    if (standardButton === 'PSP34') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [standardButton]);

  return (
    <>
      <div className="py-6">
        <Radio options={SUPPORTED_STANDARDS} name="standard" variant="minimalist" />
      </div>
      {/* Modal is here just for a moment, it will be deleted soon (remember to REMOVE also logic here, component and dictionary) - after fixes on PSP34 */}
      <PSP34DisclaimerModal open={open} setOpen={setOpen} />
    </>
  );
}

export default Standard;
