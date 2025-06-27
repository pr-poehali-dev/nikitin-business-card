const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <img
            src="https://cdn.poehali.dev/files/2bc08b93-1a0a-4418-b0a9-13ceb0189cf0.jpg"
            alt="Владимир Никитин"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-lg object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 font-montserrat">
          Владимир Никитин
        </h1>
        <p className="text-xl mb-6 text-slate-300">
          Бизнес-консультант • Эксперт по развитию предпринимательства
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Помогаю начинающим предпринимателям построить успешный бизнес и
          избежать критических ошибок на пути к цели
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
          Получить консультацию
        </button>
      </div>
    </header>
  );
};

export default Header;
