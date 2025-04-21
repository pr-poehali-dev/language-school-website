import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Анна К.",
      text: "Благодаря школе я наконец-то преодолела языковой барьер! Мой преподаватель использует фрагменты из моих любимых сериалов, что делает обучение очень увлекательным. За 6 месяцев я продвинулась с начального до среднего уровня.",
      stars: 5,
      course: "Английский язык"
    },
    {
      id: 2,
      name: "Михаил Д.",
      text: "Обожаю подход к обучению в этой школе. Мой педагог подбирает материалы, связанные с моими интересами, и это реально работает! Особенно ценю спикинг-клубы, где можно практиковать язык с другими студентами.",
      stars: 5,
      course: "Испанский язык"
    },
    {
      id: 3,
      name: "Елена В.",
      text: "Атмосфера на занятиях настолько комфортная, что я совершенно не боюсь делать ошибки. Мне очень помогли консультации с психологом по преодолению языкового барьера. Рекомендую всем, кто стеснялся говорить на иностранном языке.",
      stars: 5,
      course: "Французский язык"
    },
  ];

  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400 inline" />);
  };

  return (
    <section id="testimonials" className="py-16 bg-brand-beige-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Отзывы наших студентов</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-md hover-scale">
              <CardContent className="p-6">
                <div className="mb-4">
                  {renderStars(testimonial.stars)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex flex-col">
                  <span className="font-bold text-brand-green-dark">{testimonial.name}</span>
                  <span className="text-gray-600 text-sm">{testimonial.course}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
