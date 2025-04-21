import { Music, Film, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Approach = () => {
  return (
    <section id="approach" className="py-16 bg-brand-beige-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Как мы работаем</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            Мы наполняем занятия вашими любимыми примерами из современной культуры и обучаем актуальному языку, который сразу можно применить в жизни
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md hover-scale overflow-hidden border-brand-green border-t-4">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <Music className="h-12 w-12 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-brand-green-dark">Любимые песни</h3>
              <p className="text-gray-700">
                Мы используем популярные песни для изучения новых слов, выражений и грамматических конструкций. Это делает учебный процесс более увлекательным и запоминающимся.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover-scale overflow-hidden border-brand-green border-t-4">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <Film className="h-12 w-12 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-brand-green-dark">Сериалы и фильмы</h3>
              <p className="text-gray-700">
                Обсуждаем сцены из популярных сериалов и фильмов, изучаем разговорные фразы и культурные особенности стран изучаемого языка.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover-scale overflow-hidden border-brand-green border-t-4">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <MessageCircle className="h-12 w-12 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-brand-green-dark">Мемы и актуальный язык</h3>
              <p className="text-gray-700">
                Изучаем современные выражения, сленг и интернет-культуру, чтобы вы могли свободно общаться на актуальные темы с носителями языка.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Approach;
