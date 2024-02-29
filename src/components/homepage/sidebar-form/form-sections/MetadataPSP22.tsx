import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/data-entry/Input';
import ExpandableFilterContainer from '@/components/homepage/sidebar-form/ExpandableFilterContainer';
import BeaverMemo from '@/components/homepage/sidebar-form/form-sections/BeaverMemo';
import { METADATA22 } from '@/components/homepage/sidebar-form/formConstants';
import { dictionary } from '@/libs/en';

export default function MetadataPSP22() {
  const { resetField } = useFormContext();

  const handleResetMetadataSection = () => {
    METADATA22.forEach(({ name }) => {
      resetField(name);
    });
  };

  return (
    <ExpandableFilterContainer
      name={dictionary.sidebarForm.sections.metadata.title}
      onReset={handleResetMetadataSection}
    >
      <BeaverMemo />
      {METADATA22.map(({ label, name, placeholder, inputType, disabled }) => (
        <Input
          key={name}
          label={label}
          name={name}
          placeholder={placeholder}
          inputType={inputType}
          disabled={disabled}
        />
      ))}
    </ExpandableFilterContainer>
  );
}
