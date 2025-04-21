import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Анна Смирнова',
    role: 'Изучает английский',
    content: 'Я пробовала изучать английский на разных курсах, но только здесь смогла преодолеть языковой барьер. Занятия с использованием моих любимых сериалов сделали обучение не только эффективным, но и увлекательным!',
    rating: 5,
  },
  {
    name: 'Дмитрий Козлов',
    role: 'Изучает испанский',
    content: 'Спикинг-клубы — это невероятно полезно! Я начал говорить на испанском уже после третьего занятия. Отдельная благодарность за психологическую поддержку, которая помогла мне не бояться делать ошибки.',
    rating: 5,
  },
  {
    name: 'Екатерина Иванова',
    role: 'Изучает французский',
    content: 'Учитель подобрана просто идеально! Она знает все мои интересы и создает уроки, которые всегда захватывают внимание. Очень рада, что выбрала эту школу для изучения французского.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-brand-beige-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Отзывы наших студентов</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md hover-scale overflow-hidden">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                
                <div className="mt-auto">
                  <h4 className="font-bold text-brand-green-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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
