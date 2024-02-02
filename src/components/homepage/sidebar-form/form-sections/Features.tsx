import { useFormContext } from 'react-hook-form';
import { CheckboxChip } from '@/components/data-entry/CheckboxChip';
import ExpandableFilterContainer from '@/components/homepage/sidebar-form/ExpandableFilterContainer';
import { FEATURES_OPTIONS } from '@/components/homepage/sidebar-form/formConstants';
import type { PSPUnion } from '@/components/homepage/sidebar-form/formConstants';
import { dictionary } from '@/libs/en';

interface FeaturesProps {
  choosenStandard: PSPUnion;
}

export default function Features({ choosenStandard }: FeaturesProps) {
  const { resetField } = useFormContext();

  const handleResetFeaturesSection = () => {
    FEATURES_OPTIONS[choosenStandard].forEach(({ name }) => {
      resetField(name);
    });
  };

  return (
    <ExpandableFilterContainer
      name={dictionary.sidebarForm.sections.features.title}
      onReset={handleResetFeaturesSection}
    >
      <div className="flex flex-wrap gap-2 pt-3">
        {FEATURES_OPTIONS[choosenStandard].map(({ label, name, disabled }) => (
          <CheckboxChip key={name} label={label} name={name} disabled={disabled} />
        ))}
      </div>
    </ExpandableFilterContainer>
  );
}
