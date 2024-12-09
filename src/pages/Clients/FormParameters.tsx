import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const parametrosSchema = z.object({
  parameters: z.string().optional(),
});

type ParametrosFormValues = z.infer<typeof parametrosSchema>;

const FormParametros: React.FC = () => {
  const form = useForm<ParametrosFormValues>({
    resolver: zodResolver(parametrosSchema),
  });

  const onSubmit: SubmitHandler<ParametrosFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full bg-gray-200 dark:bg-secondary">
          <h2 className="text-2xl font-bold mb-4 text-center text-slate-700 dark:text-white">Cadastrar Parametros</h2>

          <FormField
            control={form.control}
            name="parameters"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parametros</FormLabel>
                <FormControl>
                  <Input placeholder="Parametros" {...field} autoFocus={true} className="ring-0" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      </Form>
    </div>
  );
};

export default FormParametros;