import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-beige-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-6">
              Заботливая школа иностранных языков
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Мы учим не просто говорить на иностранном языке, а делать это 
              с удовольствием через материалы, которые вам интересны
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Записаться на консультацию
              </Button>
              
              <Button 
                variant="outline" 
                className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать цены <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Студенты изучают язык" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-green text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">Более 500 студентов</p>
                <p>уже изучают языки с нами</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
