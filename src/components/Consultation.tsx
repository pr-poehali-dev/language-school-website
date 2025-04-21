import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь будет отправка формы
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="consultation" className="py-16 bg-brand-beige-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-8">
            Записаться на бесплатную консультацию
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Сообщение (необязательно)
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-32"
              />
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-6 text-lg"
              >
                Отправить заявку <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
