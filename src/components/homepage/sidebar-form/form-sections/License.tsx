import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/data-entry/Input';
import ExpandableFilterContainer from '@/components/homepage/sidebar-form/ExpandableFilterContainer';
import BeaverMemo from '@/components/homepage/sidebar-form/form-sections/BeaverMemo';
import { dictionary } from '@/libs/en';

export default function License() {
  const { resetField } = useFormContext();

  const handleResetLicenseSection = () => {
    resetField('license');
  };

  return (
    <ExpandableFilterContainer
      name={dictionary.sidebarForm.sections.license.sectionTitle}
      onReset={handleResetLicenseSection}
    >
      <BeaverMemo />
      <Input
        label={dictionary.sidebarForm.sections.license.inputTitle}
        name="license"
        placeholder={dictionary.sidebarForm.sections.license.placeholder}
      />
    </ExpandableFilterContainer>
  );
}
