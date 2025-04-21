import { Heart, Users, BarChart } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Для наших студентов доступны</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="bg-brand-beige-light rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-12 w-12 text-brand-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-green-dark">Бесплатная консультация с психологом</h3>
            <p className="text-gray-700">
              Помощь в преодолении языкового барьера и развитии уверенности в общении на иностранном языке
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-brand-beige-light rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Users className="h-12 w-12 text-brand-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-green-dark">Безлимитное посещение спикинг-клубов</h3>
            <p className="text-gray-700">
              Регулярные встречи с другими студентами для практики разговорной речи в непринужденной атмосфере
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-brand-beige-light rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <BarChart className="h-12 w-12 text-brand-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-green-dark">Трекеры прогресса</h3>
            <p className="text-gray-700">
              Индивидуальная система отслеживания ваших достижений, которая помогает видеть результаты и поддерживать мотивацию
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
