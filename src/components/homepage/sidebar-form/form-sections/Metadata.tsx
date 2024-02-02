import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/data-entry/Input';
import ExpandableFilterContainer from '@/components/homepage/sidebar-form/ExpandableFilterContainer';
import BeaverMemo from '@/components/homepage/sidebar-form/form-sections/BeaverMemo';
import type { PSPUnion } from '@/components/homepage/sidebar-form/formConstants';
import { METADATA } from '@/components/homepage/sidebar-form/formConstants';
import { dictionary } from '@/libs/en';

interface MetadataProps {
  choosenStandard: PSPUnion;
}

export default function Metadata({ choosenStandard }: MetadataProps) {
  const { resetField } = useFormContext();

  const handleResetMetadataSection = () => {
    METADATA[choosenStandard].forEach(({ name }) => {
      resetField(name);
    });
  };

  return (
    <ExpandableFilterContainer
      name={dictionary.sidebarForm.sections.metadata.title}
      onReset={handleResetMetadataSection}
    >
      {METADATA[choosenStandard].length > 1 && <BeaverMemo />}
      {METADATA[choosenStandard].map(({ label, name, placeholder, inputType, disabled }) => (
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
