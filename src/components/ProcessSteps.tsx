import { 
  MessageSquare, 
  UserSearch, 
  PlayCircle, 
  CreditCard 
} from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Консультация",
      description: "Бесплатная консультация поможет определить ваш текущий уровень и поставить цели обучения",
      icon: <MessageSquare className="h-12 w-12 text-brand-green" />
    },
    {
      id: 2,
      title: "Подбор преподавательницы",
      description: "Мы найдем для вас опытного педагога, который идеально соответствует вашим потребностям",
      icon: <UserSearch className="h-12 w-12 text-brand-green" />
    },
    {
      id: 3,
      title: "Пробное занятие",
      description: "Познакомьтесь с преподавателем и нашей методикой на бесплатном пробном уроке",
      icon: <PlayCircle className="h-12 w-12 text-brand-green" />
    },
    {
      id: 4,
      title: "Покупка абонемента",
      description: "Выберите удобный для вас пакет занятий и начните свое языковое путешествие",
      icon: <CreditCard className="h-12 w-12 text-brand-green" />
    }
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Как проходит работа в школе</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-brand-beige-light rounded-lg p-6 shadow-md hover-scale"
            >
              <div className="mb-4 flex justify-center">
                {step.icon}
              </div>
              <div className="flex items-center justify-center mb-4">
                <span className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.id}
                </span>
                <h3 className="text-xl font-bold ml-2 text-brand-green-dark">{step.title}</h3>
              </div>
              <p className="text-center text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
