const Contacts = () => {
  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
          Контакты
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Свяжитесь со мной, если сможете
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-400 mr-4">📞</span>
                <span>+7 (923)-137-26-05</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-4">✉️</span>
                <span>vovanikitin_19@mail.ru</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-4">📍</span>
                <span>
                  Новосибирск, я Деловой и Центр и я в центре и в Деловом
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-4">💼</span>
                <span>Telegram: @NV_ladimir</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Режим работы очень плотный
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Понедельник - Воскресение:</span>
                <span>08:00 - 07:00</span>
              </div>
              <div className="flex justify-between">
                <span>Суббота:</span>
                <span>10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Воскресенье:</span>
                <span>Выходной</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-slate-700 rounded-lg">
              <p className="text-sm text-slate-300">
                💡 Первая консультация (30 минут) — бесценна ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
