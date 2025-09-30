import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const models = [
    {
      name: 'LONKING 83C',
      image: '/img/72eff983-22fd-455b-b3b8-62d09deffaef.jpg',
      specs: [
        { label: 'Эксплуатационная масса', value: '7 500 кг' },
        { label: 'Мощность двигателя', value: '74 кВт / 100 л.с.' },
        { label: 'Глубина копания', value: '4 500 мм' },
        { label: 'Высота выгрузки', value: '2 800 мм' },
        { label: 'Объем ковша погрузчика', value: '1,0 м³' },
        { label: 'Объем ковша экскаватора', value: '0,3 м³' }
      ],
      features: ['Компактные размеры', 'Универсальность', 'Экономичность']
    },
    {
      name: 'LONKING 84C',
      image: '/img/c5283b4c-b39b-4cee-b058-53a0703881b0.jpg',
      specs: [
        { label: 'Эксплуатационная масса', value: '8 500 кг' },
        { label: 'Мощность двигателя', value: '92 кВт / 125 л.с.' },
        { label: 'Глубина копания', value: '5 200 мм' },
        { label: 'Высота выгрузки', value: '3 200 мм' },
        { label: 'Объем ковша погрузчика', value: '1,2 м³' },
        { label: 'Объем ковша экскаватора', value: '0,35 м³' }
      ],
      features: ['Увеличенная мощность', 'Больше производительность', 'Современные технологии']
    }
  ];

  const advantages = [
    {
      icon: 'Settings',
      title: 'Надежная конструкция',
      description: 'Прочная рама и качественные комплектующие обеспечивают долгий срок службы'
    },
    {
      icon: 'Zap',
      title: 'Высокая производительность',
      description: 'Мощные двигатели и оптимизированная гидравлика для максимальной эффективности'
    },
    {
      icon: 'DollarSign',
      title: 'Экономичность',
      description: 'Низкий расход топлива и минимальные затраты на обслуживание'
    },
    {
      icon: 'Wrench',
      title: 'Простое обслуживание',
      description: 'Удобный доступ ко всем узлам и агрегатам для быстрого технического обслуживания'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Современные системы безопасности и комфортная кабина оператора'
    },
    {
      icon: 'Users',
      title: 'Техподдержка',
      description: 'Квалифицированный сервис и наличие запасных частей по всей России'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-lonking-black text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/3382cca1-67af-41b7-a857-68dca93938f5.png" alt="LONKING" className="h-8 md:h-10" />
            <div className="hidden md:block text-sm text-gray-300">Официальный дилер</div>
          </div>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-lonking-yellow hover:bg-yellow-600 text-lonking-black font-semibold"
          >
            Получить консультацию
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-lonking-black via-gray-900 to-lonking-black text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lonking-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-lonking-yellow rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-lonking-yellow text-lonking-black hover:bg-yellow-600">
              Официальный дилер LONKING
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Экскаваторы-погрузчики <span className="text-lonking-yellow">LONKING 83C/84C</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Надежная строительная техника с превосходным соотношением цены и качества
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-lonking-yellow hover:bg-yellow-600 text-lonking-black font-semibold text-lg"
              >
                Выбрать модель
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-lonking-yellow text-white hover:bg-lonking-yellow hover:text-lonking-black font-semibold text-lg"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="models" className="py-16 md:py-24 bg-lonking-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Модельный ряд</h2>
            <p className="text-gray-600 text-lg">Выберите оптимальную модель для ваших задач</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {models.map((model, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-white p-6">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-64 object-contain mb-6"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span className="text-lonking-yellow">▲</span> {model.name}
                  </CardTitle>
                  <CardDescription className="flex flex-wrap gap-2 mt-3">
                    {model.features.map((feature, i) => (
                      <Badge key={i} variant="secondary">{feature}</Badge>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {model.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center border-b pb-2">
                        <span className="text-gray-600 text-sm">{spec.label}</span>
                        <span className="font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-6 bg-lonking-yellow hover:bg-yellow-600 text-lonking-black font-semibold"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Запросить цену
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ключевые преимущества</h2>
            <p className="text-gray-600 text-lg">Почему выбирают экскаваторы-погрузчики LONKING</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-lonking-yellow">
                <CardHeader>
                  <div className="w-14 h-14 bg-lonking-yellow rounded-lg flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} size={28} className="text-lonking-black" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-lonking-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-lonking-yellow">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-2">Получить консультацию</CardTitle>
                <CardDescription className="text-base">
                  Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-gray-300 focus:border-lonking-yellow"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-gray-300 focus:border-lonking-yellow"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-gray-300 focus:border-lonking-yellow"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Комментарий (необязательно)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="border-gray-300 focus:border-lonking-yellow"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-lonking-yellow hover:bg-yellow-600 text-lonking-black font-semibold text-lg h-12"
                  >
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-lonking-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img src="https://cdn.poehali.dev/files/3382cca1-67af-41b7-a857-68dca93938f5.png" alt="LONKING" className="h-8" />
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>Официальный дилер экскаваторов-погрузчиков LONKING</p>
              <p className="mt-1">© 2025 Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;