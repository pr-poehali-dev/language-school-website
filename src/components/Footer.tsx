import { Button } from '@/components/ui/button';
import { Instagram, Facebook, YouTube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-green-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Школа Заботливых Языков</h3>
            <p className="text-brand-beige-light mb-4">
              Делаем изучение языков доступным, увлекательным и эффективным
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-brand-beige-light hover:text-white hover:bg-brand-green">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-brand-beige-light hover:text-white hover:bg-brand-green">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-brand-beige-light hover:text-white hover:bg-brand-green">
                <YouTube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Языки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-brand-beige-light hover:text-white">Английский</a>
              </li>
              <li>
                <a href="#" className="text-brand-beige-light hover:text-white">Испанский</a>
              </li>
              <li>
                <a href="#" className="text-brand-beige-light hover:text-white">Французский</a>
              </li>
              <li>
                <a href="#" className="text-brand-beige-light hover:text-white">Немецкий</a>
              </li>
              <li>
                <a href="#" className="text-brand-beige-light hover:text-white">Итальянский</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-brand-beige-light hover:text-white">О нас</a>
              </li>
              <li>
                <a href="#process" className="text-brand-beige-light hover:text-white">Как мы работаем</a>
              </li>
              <li>
                <a href="#benefits" className="text-brand-beige-light hover:text-white">Преимущества</a>
              </li>
              <li>
                <a href="#pricing" className="text-brand-beige-light hover:text-white">Цены</a>
              </li>
              <li>
                <a href="#" className="text-brand-beige-light hover:text-white">Блог</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>info@languageschool.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>г. Москва, ул. Языковая, д. 42</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-green pt-6 text-center text-brand-beige-light">
          <p>&copy; {new Date().getFullYear()} Школа Заботливых Языков. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
