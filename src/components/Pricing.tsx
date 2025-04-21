import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Старт",
      price: "2 900 ₽",
      description: "Идеально для начинающих",
      features: [
        "4 индивидуальных занятия",
        "Доступ к спикинг-клубам",
        "Базовые учебные материалы",
        "Трекер прогресса"
      ],
      popular: false,
      buttonText: "Выбрать план"
    },
    {
      id: 2,
      name: "Стандарт",
      price: "5 400 ₽",
      description: "Наш самый популярный план",
      features: [
        "8 индивидуальных занятий",
        "Безлимитные спикинг-клубы",
        "Расширенные учебные материалы",
        "Персональный трекер прогресса",
        "1 консультация с психологом"
      ],
      popular: true,
      buttonText: "Выбрать план"
    },
    {
      id: 3,
      name: "Интенсив",
      price: "9 800 ₽",
      description: "Для быстрого результата",
      features: [
        "16 индивидуальных занятий",
        "Безлимитные спикинг-клубы",
        "Премиум учебные материалы",
        "Расширенный трекер прогресса",
        "3 консультации с психологом",
        "Доступ к онлайн-библиотеке"
      ],
      popular: false,
      buttonText: "Выбрать план"
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Наши цены</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`hover-scale ${
                plan.popular 
                  ? 'border-brand-green shadow-lg' 
                  : 'border-gray-200 shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный выбор
                </div>
              )}
              
              <CardHeader className={`text-center pb-2 ${plan.popular ? 'pt-8' : 'pt-6'}`}>
                <CardTitle className="text-xl font-bold text-brand-green-dark">{plan.name}</CardTitle>
                <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="text-center pb-4">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brand-green-dark">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/месяц</span>
                </div>
                
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-brand-green hover:bg-brand-green-dark' 
                      : 'bg-brand-green/90 hover:bg-brand-green'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
