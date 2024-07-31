import { formSchema } from "@/types/zod-schema";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function TextEditor() {
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    defaultValues: {
      title: "",
      price: 29.99,
      description: "",
    },
  });
  return <></>;
}
