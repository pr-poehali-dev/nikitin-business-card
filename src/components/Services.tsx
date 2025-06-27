const Services = () => {
  const services = [
    {
      title: "Бизнес-планирование",
      description:
        "Сопоставит Дебит с Кредитом и раскидает, чтобы красиво было",
      icon: "📊",
    },
    {
      title: "Стратегическое консультирование",
      description:
        "Разберет актуальные темки, чтобы стреляли они, а не коллекторы 🔫",
      icon: "🎯",
    },
    {
      title: "Финансовое планирование",
      description:
        "Если на кармане есть монета, то ее стоит отгрузить именно сюда 🪙",
      icon: "💰",
    },
    {
      title: "Маркетинговые стратегии",
      description: "Ооо, он шарит за это дерьмо - тебе сюда!",
      icon: "📈",
    },
    {
      title: "Управление командой",
      description: "Подскажет как не становясь Гадким, обрести своих Миньонов",
      icon: "👥",
    },
    {
      title: "Правовое сопровождение",
      description: "Расскажет тебе за твои права, если они у тебя есть...",
      icon: "⚖️",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-slate-800">
          Чем может быть полезен Владимир
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 font-montserrat text-slate-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Готов помочь вашему бизнесу выйти на новый уровень
          </p>
          <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Просить о помощи
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
