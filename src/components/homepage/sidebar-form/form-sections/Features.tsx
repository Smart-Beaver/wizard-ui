import { useFormContext } from 'react-hook-form';
import { CheckboxChip } from '@/components/data-entry/CheckboxChip';
import ExpandableFilterContainer from '@/components/homepage/sidebar-form/ExpandableFilterContainer';
import { FEATURES_OPTIONS } from '@/components/homepage/sidebar-form/formConstants';
import { dictionary } from '@/libs/en';

export default function Features() {
  const { resetField } = useFormContext();

  const handleResetFeaturesSection = () => {
    FEATURES_OPTIONS.forEach(({ value }) => {
      resetField(value);
    });
  };

  return (
    <ExpandableFilterContainer
      name={dictionary.sidebarForm.sections.features.title}
      onReset={handleResetFeaturesSection}
    >
      <div className="flex flex-wrap gap-2 pt-3">
        {FEATURES_OPTIONS.map(({ label, value }) => (
          <CheckboxChip key={value} label={label} name={value} />
        ))}
      </div>
    </ExpandableFilterContainer>
  );
}
