import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-beige py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-brand-green-dark font-bold text-xl md:text-2xl">
            Школа Заботливых Языков
          </Link>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-brand-green-dark" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-brand-green hover:text-brand-green-dark font-medium">
            Главная
          </Link>
          <Link to="#approach" className="text-brand-green hover:text-brand-green-dark font-medium">
            Наш подход
          </Link>
          <Link to="#process" className="text-brand-green hover:text-brand-green-dark font-medium">
            Как мы работаем
          </Link>
          <Link to="#benefits" className="text-brand-green hover:text-brand-green-dark font-medium">
            Преимущества
          </Link>
          <Link to="#testimonials" className="text-brand-green hover:text-brand-green-dark font-medium">
            Отзывы
          </Link>
          <Link to="#pricing" className="text-brand-green hover:text-brand-green-dark font-medium">
            Цены
          </Link>
          <Button className="bg-brand-green hover:bg-brand-green-dark text-white ml-2">
            Записаться
          </Button>
        </nav>

        {/* Мобильное меню (выпадающее) */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-brand-beige shadow-md py-4 px-4 md:hidden z-50">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-brand-green hover:text-brand-green-dark font-medium py-2" onClick={() => setIsOpen(false)}>
                Главная
              </Link>
              <Link to="#approach" className="text-brand-green hover:text-brand-green-dark font-medium py-2" onClick={() => setIsOpen(false)}>
                Наш подход
              </Link>
              <Link to="#process" className="text-brand-green hover:text-brand-green-dark font-medium py-2" onClick={() => setIsOpen(false)}>
                Как мы работаем
              </Link>
              <Link to="#benefits" className="text-brand-green hover:text-brand-green-dark font-medium py-2" onClick={() => setIsOpen(false)}>
                Преимущества
              </Link>
              <Link to="#testimonials" className="text-brand-green hover:text-brand-green-dark font-medium py-2" onClick={() => setIsOpen(false)}>
                Отзывы
              </Link>
              <Link to="#pricing" className="text-brand-green hover:text-brand-green-dark font-medium py-2" onClick={() => setIsOpen(false)}>
                Цены
              </Link>
              <Button className="bg-brand-green hover:bg-brand-green-dark text-white w-full">
                Записаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
