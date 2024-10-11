// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// const formSchema = z.object({
//   host: z.string().min(1, "Host is required"),
//   purchase_price: z.number().min(0, "Price must be a positive number"),
//   class: z.string().min(1, "Class is required"),
//   department: z.enum(["TI", "Administração"]),
//   person: z.string().min(1, "Responsible person is required"),
//   manufacturer: z.string().min(1, "Manufacturer is required"),
//   sample: z.string().min(1, "Model/Version is required"),
//   nfe: z.string().min(1, "NF-e is required"),
//   category: z
//     .array(z.enum(["Informática", "Periféricos"]))
//     .min(1, "Select at least one category"),
//   patrimony: z.string().min(1, "Patrimony is required"),
//   date_warranty: z.string().min(1, "Warranty date is required"),
//   local: z.string().min(1, "Location is required"),
// });

// export default function FormPeripherical() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       purchase_price: 0,
//       department: "TI",
//       category: [],
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <div className="grid grid-cols-2 gap-4">
//           <FormField
//             control={form.control}
//             name="host"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Host</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="purchase_price"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Preço de compra</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     {...field}
//                     onChange={(e) => field.onChange(parseFloat(e.target.value))}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <FormField
//             control={form.control}
//             name="class"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Classe</FormLabel>
//                 <FormControl>
//                   <Input {...field} placeholder="Ex: Notebook ou Impressora" />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="department"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Departamento</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Selecione um departamento" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="TI">TI</SelectItem>
//                     <SelectItem value="Administração">Administração</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         {/* Add more form fields here following the same pattern */}

//         <Button type="submit" className="w-full">
//           Criar
//         </Button>
//       </form>
//     </Form>
//   );
// }
