import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-green-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Школа языков</h3>
            <p className="mb-4">Мы делаем изучение языков доступным, интересным и эффективным для каждого.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-beige transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-beige transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-beige transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-beige transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Языки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-beige transition-colors">Английский</a></li>
              <li><a href="#" className="hover:text-brand-beige transition-colors">Испанский</a></li>
              <li><a href="#" className="hover:text-brand-beige transition-colors">Французский</a></li>
              <li><a href="#" className="hover:text-brand-beige transition-colors">Немецкий</a></li>
              <li><a href="#" className="hover:text-brand-beige transition-colors">Итальянский</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-beige transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-brand-beige transition-colors">Преподаватели</a></li>
              <li><a href="#" className="hover:text-brand-beige transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-brand-beige transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-brand-beige transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <address className="not-italic">
              <p className="mb-2">г. Москва, ул. Примерная, д. 123</p>
              <p className="mb-2">+7 (999) 123-45-67</p>
              <p className="mb-2">info@language-school.ru</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Школа иностранных языков. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
