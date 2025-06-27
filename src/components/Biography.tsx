const Biography = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-slate-800">
            О консультанте
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/files/2bc08b93-1a0a-4418-b0a9-13ceb0189cf0.jpg"
                alt="Владимир Никитин"
                className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
              />
            </div>
            <div>
              <p className="text-lg mb-6 leading-relaxed text-gray-700">
                Более 15 лет опыта в сфере бизнес-консалтинга и развития
                предпринимательства. Помог запустить и масштабировать свыше 200
                проектов в различных отраслях.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="font-semibold">Образование:</span>
                  <span className="ml-2">МГУ, экономический факультет</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="font-semibold">Опыт:</span>
                  <span className="ml-2">15+ лет в бизнес-консалтинге</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="font-semibold">Проекты:</span>
                  <span className="ml-2">200+ успешных запусков</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
