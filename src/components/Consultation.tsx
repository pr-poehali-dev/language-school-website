import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  phone: z.string().min(6, { message: "Введите корректный номер телефона" }),
  email: z.string().email({ message: "Введите корректный email" }),
  message: z.string().optional(),
});

const Consultation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <section id="consultation" className="py-16 bg-brand-beige-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Записаться на бесплатную консультацию</h2>
        
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="h-16 w-16 text-brand-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-green-dark mb-2">Спасибо за заявку!</h3>
              <p className="text-gray-700">
                Мы свяжемся с вами в ближайшее время, чтобы подтвердить запись на консультацию.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Введите ваше имя" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон</FormLabel>
                      <FormControl>
                        <Input placeholder="+7 (___) ___-__-__" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Сообщение (опционально)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Расскажите о ваших целях изучения языка" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-green hover:bg-brand-green-dark"
                >
                  Записаться на консультацию
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Consultation;
