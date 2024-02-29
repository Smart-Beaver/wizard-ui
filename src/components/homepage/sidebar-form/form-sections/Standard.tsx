import { Radio } from '@/components/data-entry/radio/Radio';
import { SUPPORTED_STANDARDS } from '@/components/homepage/sidebar-form/formConstants';

export function Standard() {
  return (
    <>
      <div className="py-6">
        <Radio options={SUPPORTED_STANDARDS} name="standard" variant="minimalist" />
      </div>
    </>
  );
}

export default Standard;
