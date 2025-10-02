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
      image: 'https://cdn.poehali.dev/files/e424b542-9420-4b32-8fc1-48952f8d036e.png',
      specs: [
        { label: 'Эксплуатационная масса', value: '8 600 кг' },
        { label: 'Мощность двигателя', value: '74 кВт и 100 л.с.' },
        { label: 'Глубина копания', value: '4 500 мм' },
        { label: 'Высота выгрузки', value: '2 800 мм' },
        { label: 'Объем ковша погрузчика', value: '1,0 м³' },
        { label: 'Объем ковша экскаватора', value: '0,3 м³' }
      ],
      features: ['Компактные размеры', 'Универсальность', 'Экономичность', 'SRS система гашения колебаний', 'Мосты и КПП CARRARO', 'Литая каретка экскаваторной стрелы']
    },
    {
      name: 'LONKING 84C',
      image: 'https://cdn.poehali.dev/files/b46c9bf5-a5c2-4a32-8e22-827bc5307901.png',
      specs: [
        { label: 'Эксплуатационная масса', value: '9 250 кг' },
        { label: 'Мощность двигателя', value: '92 кВт и 125 л.с.' },
        { label: 'Глубина копания', value: '5 200 мм' },
        { label: 'Высота выгрузки', value: '3 200 мм' },
        { label: 'Объем ковша погрузчика', value: '1,2 м³' },
        { label: 'Объем ковша экскаватора', value: '0,35 м³' }
      ],
      features: ['Больше производительность', 'Современные технологии', 'SRS система гашения колебаний', 'Мосты и КПП CARRARO', 'Литая каретка экскаваторной стрелы']
    }
  ];

  const advantages = [
    {
      icon: 'Settings',
      title: 'Надежная конструкция',
      description: 'Усиленная рама и качественные комплектующие мировых производителей обеспечивают долгий срок службы без поломок'
    },
    {
      icon: 'Zap',
      title: 'Высокая производительность',
      description: 'Мощные двигатели Cummins/Perkins и прогрессивная гидравлика Bosch Rexroth для максимальной эффективности работы'
    },
    {
      icon: 'DollarSign',
      title: 'Экономичность эксплуатации',
      description: 'Расход топлива на 15-20% ниже конкурентов. Минимальные затраты на обслуживание и доступные запчасти'
    },
    {
      icon: 'Wrench',
      title: 'Простое обслуживание',
      description: 'Удобный доступ ко всем узлам через откидные капоты. Большие интервалы между ТО - до 500 моточасов'
    },
    {
      icon: 'Shield',
      title: 'Безопасность оператора',
      description: 'Кабина с защитой ROPS/FOPS, панорамное остекление 360°, система контроля устойчивости и аварийного отключения'
    },
    {
      icon: 'Users',
      title: 'Сервис и поддержка',
      description: 'Сеть сервисных центров по всей России. Гарантия 12 месяцев. Запчасти на складе с доставкой за 1-3 дня'
    },
    {
      icon: 'Gauge',
      title: 'Универсальность применения',
      description: 'Работа в условиях от -40°C до +50°C. Подходит для строительства, коммунального хозяйства, сельского хозяйства'
    },
    {
      icon: 'Award',
      title: 'Лучшее соотношение цена/качество',
      description: 'На 30-40% доступнее европейских аналогов при сопоставимых характеристиках и комплектации'
    },
    {
      icon: 'TrendingUp',
      title: 'Высокая остаточная стоимость',
      description: 'Техника LONKING сохраняет до 65% стоимости через 5 лет эксплуатации благодаря надежности и репутации бренда'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-lonking-black text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/d9de8a4d-a9fc-4a80-900f-ec30f88df564.png" alt="LONKING" className="h-9 md:h-10" style={{ marginTop: '-14px' }} />
            <div className="hidden md:block text-sm text-gray-300">Официальный дилер в РФ</div>
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-lonking-yellow text-lonking-black hover:bg-yellow-600">
                Официальный дилер LONKING
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Экскаваторы-погрузчики <span className="text-lonking-yellow">LONKING 83C и 84C</span>
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
                  Получить каталог
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
            <div className="hidden md:block">
              <img 
                src="https://cdn.poehali.dev/files/4f1f66fc-9754-4719-86bb-62eed1b092a5.png" 
                alt="LONKING экскаваторы-погрузчики" 
                className="w-full h-auto object-contain"
              />
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

      <section className="py-16 md:py-24 bg-gradient-to-br from-lonking-yellow via-yellow-500 to-lonking-yellow">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lonking-black">Выгодные условия финансирования</h2>
              <p className="text-lg text-gray-800">Приобретите технику LONKING в лизинг или рассрочку с минимальными переплатами</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white border-2 border-lonking-black hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-lonking-black rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Percent" size={32} className="text-lonking-yellow" />
                  </div>
                  <CardTitle className="text-2xl text-center">Лизинг</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-4xl font-bold text-lonking-black mb-2">от 7%</p>
                    <p className="text-gray-600">годовых</p>
                  </div>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Первый взнос от 10%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Срок до 5 лет</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Техника в собственности</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Налоговые льготы</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-lonking-black hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-lonking-black rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="CreditCard" size={32} className="text-lonking-yellow" />
                  </div>
                  <CardTitle className="text-2xl text-center">Рассрочка</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-4xl font-bold text-lonking-black mb-2">0%</p>
                    <p className="text-gray-600">переплаты</p>
                  </div>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Без первого взноса</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>До 12 месяцев</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Быстрое оформление</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Минимум документов</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-lonking-black hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-lonking-black rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Banknote" size={32} className="text-lonking-yellow" />
                  </div>
                  <CardTitle className="text-2xl text-center">Trade-in</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-4xl font-bold text-lonking-black mb-2">+15%</p>
                    <p className="text-gray-600">к выкупу</p>
                  </div>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Обмен старой техники</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Оценка за 1 день</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Любое состояние</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Доплата + скидка</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-lonking-black">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-lonking-black">Рассчитайте ежемесячный платеж</h3>
                  <p className="text-gray-700 text-lg">Наш специалист подберет оптимальную программу финансирования и подготовит индивидуальное предложение</p>
                </div>
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-lonking-black hover:bg-gray-800 text-lonking-yellow font-semibold text-lg px-8 flex-shrink-0"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Получить расчет
                </Button>
              </div>
            </div>
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
            <img src="https://cdn.poehali.dev/files/d9de8a4d-a9fc-4a80-900f-ec30f88df564.png" alt="LONKING" className="h-9" />
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