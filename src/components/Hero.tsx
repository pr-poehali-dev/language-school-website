import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-brand-beige to-brand-beige-light py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-brand-green-dark max-w-4xl mx-auto">
          Заботливое изучение иностранных языков для вашего будущего
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-green mb-10 max-w-2xl mx-auto">
          Мы помогаем раскрыть ваш языковой потенциал в дружественной атмосфере с индивидуальным подходом
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-brand-green hover:bg-brand-green-dark text-white text-lg py-6 px-8" 
            onClick={() => {
              const element = document.getElementById('consultation');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Записаться на консультацию
            <ArrowRight className="ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white text-lg py-6 px-8"
            onClick={() => {
              const element = document.getElementById('pricing');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Узнать цены
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
