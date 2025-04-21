import { Phone, UserRound, BookOpen, CreditCard } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: <Phone className="h-10 w-10 text-white" />,
      title: 'Консультация',
      description: 'Бесплатная консультация для определения ваших целей и уровня владения языком',
    },
    {
      icon: <UserRound className="h-10 w-10 text-white" />,
      title: 'Подбор преподавательницы',
      description: 'Подберем идеального преподавателя с учетом ваших интересов и целей обучения',
    },
    {
      icon: <BookOpen className="h-10 w-10 text-white" />,
      title: 'Пробное занятие',
      description: 'Познакомитесь с методикой обучения и убедитесь, что вам комфортно',
    },
    {
      icon: <CreditCard className="h-10 w-10 text-white" />,
      title: 'Покупка абонемента',
      description: 'Выберите удобный тариф и начните регулярные занятия',
    },
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Как проходит работа в школе</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-brand-green flex items-center justify-center mb-4 shadow-lg">
                {step.icon}
              </div>
              
              <div className="text-3xl font-bold text-brand-green-dark mb-2">
                {index + 1}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-brand-green-dark">{step.title}</h3>
              
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
