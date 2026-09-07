import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import BackButton from "@/components/Shared/BackButton";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardHeader,
  Form,
  Input,
  Select,
  useZodForm
} from "@/components/Shared/UI";

const ValidationSchema = z.object({
  option: z.string(),
  pin: z
    .string()
    .min(4, { message: "Pin must be at least 4 characters" })
    .regex(/^\d+$/, { message: "Pin must be numeric" })
});

const RecoverySettingsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useZodForm({
    defaultValues: { option: "b", pin: "" },
    schema: ValidationSchema
  });

  const selectedOption = form.watch("option");

  const onSubmit = async (data: z.infer<typeof ValidationSchema>) => {
    setIsSubmitting(true);
    try {
      // Placeholder for real save logic
      await new Promise((r) => setTimeout(r, 500));
      // show alert with the inserted pin
      alert(data.pin);
      toast.success("Recovery settings saved");
      form.reset(data);
    } catch (e) {
      toast.error("Unable to save recovery settings");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader icon={<BackButton path="/settings" />} title="Recovery Setup" />
      <Form className="space-y-4 p-5" form={form} onSubmit={onSubmit}>
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-300">Recovery Type</label>
          <Select
            className="mt-2"
            defaultValue={form.getValues().option}
            onChange={(value) => form.setValue("option", value)}
            options={[
              {
                label: "b",
                value: "b",
                htmlLabel:
                  selectedOption === "b" ? (
                    <span className="flex items-center space-x-2">
                      <CheckCircleIcon className="size-4 text-green-500" />
                      <span>b</span>
                    </span>
                  ) : (
                    "b"
                  )
              },
              {
                label: "n",
                value: "n",
                htmlLabel:
                  selectedOption === "n" ? (
                    <span className="flex items-center space-x-2">
                      <CheckCircleIcon className="size-4 text-green-500" />
                      <span>n</span>
                    </span>
                  ) : (
                    "n"
                  )
              },
              {
                label: "i",
                value: "i",
                htmlLabel:
                  selectedOption === "i" ? (
                    <span className="flex items-center space-x-2">
                      <CheckCircleIcon className="size-4 text-green-500" />
                      <span>i</span>
                    </span>
                  ) : (
                    "i"
                  )
              }
            ]}
          />
        </div>

        <Input
          label="Pin code"
          placeholder="1234"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          {...form.register("pin", {
            onChange: (e: any) => {
              const v = e.target.value.replace(/\D/g, "");
              form.setValue("pin", v);
            }
          })}
        />

        <Button className="ml-auto" loading={isSubmitting} type="submit">
          Save
        </Button>
      </Form>
    </Card>
  );
};

export default RecoverySettingsForm;
