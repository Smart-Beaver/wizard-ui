import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/data-entry/Input';
import ExpandableFilterContainer from '@/components/homepage/sidebar-form/ExpandableFilterContainer';
import BeaverMemo from '@/components/homepage/sidebar-form/form-sections/BeaverMemo';
import { METADATA } from '@/components/homepage/sidebar-form/formConstants';
import { dictionary } from '@/libs/en';

export default function Metadata() {
  const { resetField } = useFormContext();

  const handleResetMetadataSection = () => {
    METADATA.forEach(({ value }) => {
      resetField(value);
    });
  };

  return (
    <ExpandableFilterContainer
      name={dictionary.sidebarForm.sections.metadata.title}
      onReset={handleResetMetadataSection}
    >
      <BeaverMemo />
      {METADATA.map(({ label, value, placeholder, inputType }) => (
        <Input key={value} label={label} name={value} placeholder={placeholder} inputType={inputType} />
      ))}
    </ExpandableFilterContainer>
  );
}
