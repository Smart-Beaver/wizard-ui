import { useFormContext } from 'react-hook-form';
import { Radio } from '@/components/data-entry/radio/Radio';
import ExpandableFilterContainer from '@/components/homepage/sidebar-form/ExpandableFilterContainer';
import { ACCESS_CONTROL } from '@/components/homepage/sidebar-form/formConstants';
import { dictionary } from '@/libs/en';

export default function AccessControl() {
  const { resetField } = useFormContext();

  const handleResetAccessControlSection = () => {
    resetField('accessControl');
  };

  return (
    <ExpandableFilterContainer
      name={dictionary.sidebarForm.sections.accessControl.title}
      onReset={handleResetAccessControlSection}
    >
      <div className="pt-3">
        <Radio options={ACCESS_CONTROL} name="accessControl" className="flex-col" />
      </div>
    </ExpandableFilterContainer>
  );
}
