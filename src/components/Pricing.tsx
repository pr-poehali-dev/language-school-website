import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Старт',
    price: '5 900',
    period: 'месяц',
    description: 'Идеально для начинающих',
    features: [
      '8 индивидуальных занятий',
      'Доступ к спикинг-клубам',
      'Учебные материалы',
    ],
    popular: false,
  },
  {
    name: 'Стандарт',
    price: '10 900',
    period: 'месяц',
    description: 'Оптимальный вариант для большинства',
    features: [
      '16 индивидуальных занятий',
      'Безлимитные спикинг-клубы',
      'Все учебные материалы',
      'Трекер прогресса',
      'Консультация психолога',
    ],
    popular: true,
  },
  {
    name: 'Интенсив',
    price: '19 900',
    period: 'месяц',
    description: 'Максимальные результаты',
    features: [
      '30 индивидуальных занятий',
      'Безлимитные спикинг-клубы',
      'Персонализированные материалы',
      'Расширенный трекер прогресса',
      'Регулярные консультации психолога',
      'Персональный менеджер',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Наши тарифы</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            Выберите подходящий тариф для вашего уровня и целей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'border-brand-green' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-green text-white px-4 py-1 text-sm font-bold">
                  Популярный
                </div>
              )}
              
              <CardHeader className="text-center p-6 bg-brand-beige-light">
                <h3 className="text-2xl font-bold text-brand-green-dark">{plan.name}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-brand-green-dark">{plan.price} ₽</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button 
                  className={`w-full ${plan.popular ? 'bg-brand-green hover:bg-brand-green-dark' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                  onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Выбрать тариф
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
