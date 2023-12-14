import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { CheckboxChip } from '@/components/data-entry/CheckboxChip';
import { Input } from '@/components/data-entry/Input';
import { Radio } from '@/components/data-entry/radio/Radio';

const schema = z.object({
  checkboxChips: z.boolean(),
  cheChips: z.boolean(),
  boxChips: z.boolean(),
  businessType: z.enum(['Startup', 'Business', 'Enterprise']),
  textInput: z.string()
});

export default function Example() {
  type ValidationSchema = z.infer<typeof schema>;
  const methods = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      checkboxChips: false,
      cheChips: false,
      boxChips: false,
      businessType: 'Startup',
      textInput: ''
    }
  });

  const onSubmit = (data: ValidationSchema) => {
    //eslint-disable-next-line
    console.log(data);
  };

  const options = [
    { label: 'Startup', value: 'Startup' },
    { label: 'Business', value: 'Business' },
    { label: 'Enterprise', value: 'Enterprise' }
  ];

  return (
    <div className="min-h-screen bg-slate-800 p-10">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <CheckboxChip name="checkboxChips" label="checkboxChip" />
            <CheckboxChip name="cheChips" label="cheChip" />
            <CheckboxChip name="boxChips" label="boxChip" />
            <Radio options={options} name="businessType" />
            <Input name="input" label="input" />
          </div>
          <input type="submit" className="text-white" />
        </form>
      </FormProvider>
    </div>
  );
}
