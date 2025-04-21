import { Check, User, Scale, LineChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Для наших студентов</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            Мы не просто учим языку, но и поддерживаем вас на всём пути обучения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-brand-beige-light shadow-md hover-scale overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <User className="h-12 w-12 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-brand-green-dark">Бесплатная консультация с психологом</h3>
              <p className="text-gray-700">
                Наши психологи помогут преодолеть языковой барьер и справиться с тревогой перед изучением нового языка.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-brand-beige-light shadow-md hover-scale overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <Scale className="h-12 w-12 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-brand-green-dark">Безлимитное посещение спикинг-клубов</h3>
              <p className="text-gray-700">
                Практикуйте язык в дружественной атмосфере с другими студентами и носителями языка, сколько вам угодно.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-brand-beige-light shadow-md hover-scale overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <LineChart className="h-12 w-12 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-brand-green-dark">Трекеры прогресса</h3>
              <p className="text-gray-700">
                Наглядно отслеживайте свой прогресс и достижения, ставьте цели и двигайтесь к ним с нашими трекерами.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
