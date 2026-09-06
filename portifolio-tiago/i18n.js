(() => {
  const supportedLanguages = ['pt', 'en', 'es'];

  const locale = {
    pt: {
      code: 'PT',
      htmlLang: 'pt-BR',
      ogLocale: 'pt_BR',
      title: 'Tiago Sousa Leite | Pessoas, dados e decisões',
      description: 'Portfólio de Tiago Sousa Leite: People Analytics, Data Science, Python, SQL, Power BI e projetos aplicados.',
      ogDescription: 'People Analytics e Ciência de Dados com contexto, clareza e impacto.',
      selectLanguage: 'Selecionar idioma',
      availableLanguages: 'Idiomas disponíveis',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu'
    },
    en: {
      code: 'EN',
      htmlLang: 'en',
      ogLocale: 'en_US',
      title: 'Tiago Sousa Leite | People, data and decisions',
      description: 'Tiago Sousa Leite’s portfolio: People Analytics, Data Science, Python, SQL, Power BI and applied projects.',
      ogDescription: 'People Analytics and Data Science with context, clarity and impact.',
      selectLanguage: 'Select language',
      availableLanguages: 'Available languages',
      openMenu: 'Open menu',
      closeMenu: 'Close menu'
    },
    es: {
      code: 'ES',
      htmlLang: 'es',
      ogLocale: 'es_ES',
      title: 'Tiago Sousa Leite | Personas, datos y decisiones',
      description: 'Portafolio de Tiago Sousa Leite: People Analytics, Data Science, Python, SQL, Power BI y proyectos aplicados.',
      ogDescription: 'People Analytics y Ciencia de Datos con contexto, claridad e impacto.',
      selectLanguage: 'Seleccionar idioma',
      availableLanguages: 'Idiomas disponibles',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú'
    }
  };

  const translations = {
    en: {
      'Pular para o conteúdo': 'Skip to content',
      'Sobre': 'About',
      'Experiência': 'Experience',
      'Projetos': 'Projects',
      'Formação': 'Education',
      'Contato': 'Contact',
      'Eu conecto': 'I connect',
      'pessoas': 'people',
      ', dados e decisões.': ', data and decisions.',
      'Sou Tiago Sousa. Transformo perguntas de negócio em análises claras, indicadores confiáveis e experiências de dados que ajudam pessoas a decidir melhor.': 'I’m Tiago Sousa. I turn business questions into clear analyses, reliable indicators and data experiences that help people make better decisions.',
      'Explorar projetos': 'Explore projects',
      'Vamos conversar': 'Let’s connect',
      'Agora': 'Now',
      'Em evolução': 'Currently developing',
      'Ciência de Dados': 'Data Science',
      'Minha base': 'My foundation',
      'Dados com contexto': 'Data with context',
      'disponível para conexões': 'open to connecting',
      '01 / PESSOAS': '01 / PEOPLE',
      'Contexto humano': 'Human context',
      '02 / DADOS': '02 / DATA',
      'Evidência clara': 'Clear evidence',
      '03 / DIREÇÃO': '03 / DIRECTION',
      'Decisão melhor': 'Better decisions',
      'mova o cursor para explorar': 'move the cursor to explore',
      '97,31%': '97.31%',
      'acurácia no classificador de spam': 'accuracy in the spam classifier',
      '3 meses': '3 months',
      'de horizonte no case de forecasting': 'forecast horizon in the forecasting case',
      '4 cases': '4 cases',
      'públicos, documentados e reproduzíveis': 'public, documented and reproducible',
      '1 princípio': '1 principle',
      'tecnologia só faz sentido com contexto': 'technology only makes sense with context',
      'Minha perspectiva': 'My perspective',
      'Antes do modelo, vem a pergunta certa.': 'The right question comes before the model.',
      'Minha trajetória acontece na interseção entre a realidade das pessoas, a lógica dos dados e o ritmo do negócio.': 'My journey lies at the intersection of people’s reality, the logic of data and the pace of business.',
      'Na Movecta, participo da organização, análise e governança de informações de Gente & Gestão. Na FIAP, aprofundo programação, estatística, bancos de dados e Machine Learning por meio de projetos aplicados.': 'At Movecta, I support the organization, analysis and governance of People & Management data. At FIAP, I deepen my knowledge of programming, statistics, databases and Machine Learning through applied projects.',
      'Gosto de construir soluções que possam ser explicadas: bases rastreáveis, métricas honestas, visualizações que orientam e código que outra pessoa consegue executar.': 'I like building solutions that can be explained: traceable datasets, honest metrics, decision-oriented visualizations and code that someone else can run.',
      'ENTENDER': 'UNDERSTAND',
      'Contexto primeiro': 'Context first',
      'Transformar uma necessidade real em uma pergunta clara e mensurável.': 'Turn a real need into a clear, measurable question.',
      'ESTRUTURAR': 'STRUCTURE',
      'Dado confiável': 'Reliable data',
      'Organizar fontes, critérios e processos para análises consistentes.': 'Organize sources, criteria and processes for consistent analyses.',
      'COMUNICAR': 'COMMUNICATE',
      'Direção prática': 'Practical direction',
      'Traduzir achados técnicos em uma leitura útil para a decisão.': 'Translate technical findings into insights that support decisions.',
      'Dados de pessoas no contexto real da operação.': 'People data in a real operational context.',
      'Uma atuação orientada por qualidade, confidencialidade e utilidade para Gente & Gestão.': 'Work guided by quality, confidentiality and practical value for People & Management.',
      'Jovem Aprendiz de People Analytics': 'People Analytics Apprentice',
      'São Paulo · modelo híbrido': 'São Paulo · hybrid work model',
      'Apoio à estruturação, análise e governança de dados de pessoas para gerar indicadores mais confiáveis e apoiar decisões da área.': 'I support the structuring, analysis and governance of people data to produce more reliable indicators and inform the team’s decisions.',
      'Construção e acompanhamento de indicadores de pessoas.': 'Building and monitoring people indicators.',
      'Tratamento, consolidação e validação de bases.': 'Cleaning, consolidating and validating datasets.',
      'Desenvolvimento e evolução de dashboards em Power BI.': 'Developing and improving Power BI dashboards.',
      'Documentação de fontes, critérios e fluxos de validação.': 'Documenting sources, criteria and validation workflows.',
      'Organização e centralização de informações com SharePoint.': 'Organizing and centralizing information with SharePoint.',
      'Contato com Headcount, Turnover, Absenteísmo e Banco de Horas.': 'Working with Headcount, Turnover, Absenteeism and Time Bank indicators.',
      'Projetos selecionados': 'Selected projects',
      'Cases que mostram raciocínio, não só ferramentas.': 'Cases that show the thinking, not just the tools.',
      'Quatro entregas públicas com problema, método, resultado e documentação — de forecasting e sustentabilidade a NLP e customer intelligence.': 'Four public deliverables covering problem, method, outcome and documentation — from forecasting and sustainability to NLP and customer intelligence.',
      'Forecasting · Série temporal': 'Forecasting · Time series',
      'horizonte previsto': 'forecast horizon',
      'Case de previsão mensal de demanda que combina validação cronológica, comparação com baselines e uma leitura honesta da incerteza.': 'A monthly demand forecasting case combining chronological validation, baseline comparison and a transparent view of uncertainty.',
      'DESAFIO': 'CHALLENGE',
      'Projetar a demanda futura sem deixar informações do futuro contaminarem a avaliação.': 'Forecast future demand without allowing future information to leak into the evaluation.',
      'SOLUÇÃO': 'SOLUTION',
      'Prophet, divisão temporal, baselines ingênuos e métricas complementares.': 'Prophet, time-based splitting, naïve baselines and complementary metrics.',
      'RESULTADO': 'OUTCOME',
      'Previsão de três meses com MAE de 6,61 e limitações documentadas.': 'A three-month forecast with a 6.61 MAE and clearly documented limitations.',
      'Ver repositório': 'View repository',
      'Sustentabilidade · Data Analytics': 'Sustainability · Data Analytics',
      '50 municípios': '50 municipalities',
      'piloto 2020—2023': '2020—2023 pilot',
      'Integração de clima, agricultura e solo para priorizar análises agroclimáticas no Centro-Oeste brasileiro.': 'Climate, agriculture and soil data integration to prioritize agroclimatic analyses in Brazil’s Central-West region.',
      'Transformar fontes ambientais heterogêneas em uma visão municipal comparável.': 'Transform heterogeneous environmental sources into a comparable municipal-level view.',
      'NASA POWER, MapBiomas, Python, índice composto documentado e Power BI.': 'NASA POWER, MapBiomas, Python, a documented composite index and Power BI.',
      'Pipeline, dashboard e critérios de priorização com limitações metodológicas explícitas.': 'A pipeline, dashboard and prioritization criteria with explicit methodological limitations.',
      'NLP · Classificação': 'NLP · Classification',
      'acurácia validada': 'validated accuracy',
      'Detector de Spam com NLP': 'NLP Spam Detector',
      'Pipeline reproduzível para classificar mensagens SMS como spam ou legítimas, da limpeza do texto à avaliação do erro.': 'A reproducible pipeline for classifying SMS messages as spam or legitimate, from text cleaning to error analysis.',
      'TF-IDF, Multinomial Naive Bayes e divisão estratificada.': 'TF-IDF, Multinomial Naive Bayes and a stratified split.',
      'Precisão de 98,37% para spam, com erros explicitamente apresentados.': '98.37% precision for spam, with errors explicitly presented.',
      'pipeline analítico': 'analytics pipeline',
      'Pipeline acadêmico que combina segmentação de clientes, modelos hierárquicos e regras de campanha com visualização em Power BI.': 'An academic pipeline combining customer segmentation, hierarchical models and campaign rules with Power BI visualization.',
      'RFM, Random Forest, preparação de dados e regras de negócio rastreáveis.': 'RFM, Random Forest, data preparation and traceable business rules.',
      'Saídas acionáveis para explorar recompra, perfil de cliente e campanhas sugeridas.': 'Actionable outputs for exploring repeat purchases, customer profiles and suggested campaigns.',
      'Quer investigar a implementação?': 'Want to explore the implementation?',
      'Os repositórios incluem código, documentação e instruções de execução.': 'The repositories include code, documentation and setup instructions.',
      'Abrir GitHub': 'Open GitHub',
      'Tecnologia organizada pelo papel que desempenha.': 'Technology organized by the role it plays.',
      'Uma base em expansão, com foco nas ferramentas que já uso em trabalho, estudo e projetos.': 'A growing foundation focused on the tools I already use at work, in my studies and across projects.',
      'Da organização da base à comunicação executiva.': 'From dataset organization to executive communication.',
      'Visualização de Dados': 'Data Visualization',
      'Programação & Dados': 'Programming & Data',
      'Ferramentas para explorar, tratar e integrar dados.': 'Tools to explore, process and integrate data.',
      'Métodos para compreender padrões e construir previsões.': 'Methods for understanding patterns and building forecasts.',
      'Estatística': 'Statistics',
      'Classificação': 'Classification',
      'Estrutura, qualidade e rastreabilidade da informação.': 'Structure, quality and traceability of information.',
      'Governança de Dados': 'Data Governance',
      'Modelagem': 'Data Modeling',
      'Aprendizado contínuo, prática constante.': 'Continuous learning, consistent practice.',
      'Tecnólogo em Ciência de Dados': 'Associate Degree in Data Science',
      'Estatística, programação, análise de dados, Machine Learning, bancos de dados, Big Data, visualização e nuvem.': 'Statistics, programming, data analysis, Machine Learning, databases, Big Data, visualization and cloud computing.',
      'Programa de Aprendizagem Profissional': 'Professional Apprenticeship Program',
      'Competências corporativas, comunicação, tecnologia, inovação, sustentabilidade e resolução de problemas.': 'Corporate skills, communication, technology, innovation, sustainability and problem-solving.',
      '05 itens': '05 items',
      'Modelagem, Programação e Qualidade de Dados · Gold': 'Data Modeling, Programming and Quality · Gold',
      'Arquitetura de Analytics e Big Data · Gold': 'Analytics and Big Data Architecture · Gold',
      'Estatística com Python': 'Statistics with Python',
      'Validar no LinkedIn': 'Verify on LinkedIn',
      'Vamos transformar uma boa pergunta em uma decisão melhor?': 'Shall we turn a good question into a better decision?',
      'Estou construindo minha trajetória em Analytics e Ciência de Dados com experiência corporativa, estudo contínuo e projetos aplicados.': 'I’m building my career in Analytics and Data Science through corporate experience, continuous learning and applied projects.',
      'Voltar ao início ↑': 'Back to top ↑'
    },
    es: {
      'Pular para o conteúdo': 'Saltar al contenido',
      'Sobre': 'Sobre mí',
      'Experiência': 'Experiencia',
      'Projetos': 'Proyectos',
      'Formação': 'Formación',
      'Contato': 'Contacto',
      'Eu conecto': 'Conecto',
      'pessoas': 'personas',
      ', dados e decisões.': ', datos y decisiones.',
      'Sou Tiago Sousa. Transformo perguntas de negócio em análises claras, indicadores confiáveis e experiências de dados que ajudam pessoas a decidir melhor.': 'Soy Tiago Sousa. Transformo preguntas de negocio en análisis claros, indicadores confiables y experiencias de datos que ayudan a las personas a tomar mejores decisiones.',
      'Explorar projetos': 'Explorar proyectos',
      'Vamos conversar': 'Hablemos',
      'Agora': 'Ahora',
      'Em evolução': 'En desarrollo',
      'Ciência de Dados': 'Ciencia de Datos',
      'Minha base': 'Mi base',
      'Dados com contexto': 'Datos con contexto',
      'disponível para conexões': 'disponible para conectar',
      '01 / PESSOAS': '01 / PERSONAS',
      'Contexto humano': 'Contexto humano',
      '02 / DADOS': '02 / DATOS',
      'Evidência clara': 'Evidencia clara',
      '03 / DIREÇÃO': '03 / DIRECCIÓN',
      'Decisão melhor': 'Mejores decisiones',
      'mova o cursor para explorar': 'mueve el cursor para explorar',
      'acurácia no classificador de spam': 'exactitud del clasificador de spam',
      '3 meses': '3 meses',
      'de horizonte no case de forecasting': 'de horizonte en el caso de forecasting',
      '4 cases': '4 casos',
      'públicos, documentados e reproduzíveis': 'públicos, documentados y reproducibles',
      '1 princípio': '1 principio',
      'tecnologia só faz sentido com contexto': 'la tecnología solo tiene sentido con contexto',
      'Minha perspectiva': 'Mi perspectiva',
      'Antes do modelo, vem a pergunta certa.': 'Antes del modelo está la pregunta correcta.',
      'Minha trajetória acontece na interseção entre a realidade das pessoas, a lógica dos dados e o ritmo do negócio.': 'Mi trayectoria se encuentra en la intersección entre la realidad de las personas, la lógica de los datos y el ritmo del negocio.',
      'Na Movecta, participo da organização, análise e governança de informações de Gente & Gestão. Na FIAP, aprofundo programação, estatística, bancos de dados e Machine Learning por meio de projetos aplicados.': 'En Movecta, participo en la organización, el análisis y la gobernanza de datos de Personas y Gestión. En FIAP, profundizo en programación, estadística, bases de datos y Machine Learning mediante proyectos aplicados.',
      'Gosto de construir soluções que possam ser explicadas: bases rastreáveis, métricas honestas, visualizações que orientam e código que outra pessoa consegue executar.': 'Me gusta construir soluciones que puedan explicarse: bases trazables, métricas honestas, visualizaciones que orientan y código que otra persona puede ejecutar.',
      'ENTENDER': 'ENTENDER',
      'Contexto primeiro': 'El contexto primero',
      'Transformar uma necessidade real em uma pergunta clara e mensurável.': 'Transformar una necesidad real en una pregunta clara y medible.',
      'ESTRUTURAR': 'ESTRUCTURAR',
      'Dado confiável': 'Datos confiables',
      'Organizar fontes, critérios e processos para análises consistentes.': 'Organizar fuentes, criterios y procesos para lograr análisis consistentes.',
      'COMUNICAR': 'COMUNICAR',
      'Direção prática': 'Dirección práctica',
      'Traduzir achados técnicos em uma leitura útil para a decisão.': 'Traducir hallazgos técnicos en una lectura útil para la toma de decisiones.',
      'Dados de pessoas no contexto real da operação.': 'Datos de personas en el contexto real de la operación.',
      'Uma atuação orientada por qualidade, confidencialidade e utilidade para Gente & Gestão.': 'Una labor orientada por la calidad, la confidencialidad y el valor para Personas y Gestión.',
      'Jovem Aprendiz de People Analytics': 'Aprendiz de People Analytics',
      'São Paulo · modelo híbrido': 'São Paulo · modalidad híbrida',
      'Apoio à estruturação, análise e governança de dados de pessoas para gerar indicadores mais confiáveis e apoiar decisões da área.': 'Apoyo la estructuración, el análisis y la gobernanza de datos de personas para generar indicadores más confiables y respaldar las decisiones del área.',
      'Construção e acompanhamento de indicadores de pessoas.': 'Construcción y seguimiento de indicadores de personas.',
      'Tratamento, consolidação e validação de bases.': 'Tratamiento, consolidación y validación de bases de datos.',
      'Desenvolvimento e evolução de dashboards em Power BI.': 'Desarrollo y evolución de dashboards en Power BI.',
      'Documentação de fontes, critérios e fluxos de validação.': 'Documentación de fuentes, criterios y flujos de validación.',
      'Organização e centralização de informações com SharePoint.': 'Organización y centralización de información con SharePoint.',
      'Contato com Headcount, Turnover, Absenteísmo e Banco de Horas.': 'Contacto con indicadores de Headcount, Turnover, Ausentismo y Banco de Horas.',
      'Projetos selecionados': 'Proyectos seleccionados',
      'Cases que mostram raciocínio, não só ferramentas.': 'Casos que muestran el razonamiento, no solo las herramientas.',
      'Quatro entregas públicas com problema, método, resultado e documentação — de forecasting e sustentabilidade a NLP e customer intelligence.': 'Cuatro entregas públicas con problema, método, resultado y documentación: desde forecasting y sostenibilidad hasta NLP y customer intelligence.',
      'Forecasting · Série temporal': 'Forecasting · Serie temporal',
      'horizonte previsto': 'horizonte previsto',
      'Case de previsão mensal de demanda que combina validação cronológica, comparação com baselines e uma leitura honesta da incerteza.': 'Caso de previsión mensual de demanda que combina validación cronológica, comparación con baselines y una lectura transparente de la incertidumbre.',
      'DESAFIO': 'DESAFÍO',
      'Projetar a demanda futura sem deixar informações do futuro contaminarem a avaliação.': 'Proyectar la demanda futura sin permitir que información del futuro contamine la evaluación.',
      'SOLUÇÃO': 'SOLUCIÓN',
      'Prophet, divisão temporal, baselines ingênuos e métricas complementares.': 'Prophet, división temporal, baselines ingenuos y métricas complementarias.',
      'RESULTADO': 'RESULTADO',
      'Previsão de três meses com MAE de 6,61 e limitações documentadas.': 'Previsión de tres meses con un MAE de 6,61 y limitaciones documentadas.',
      'Ver repositório': 'Ver repositorio',
      'Sustentabilidade · Data Analytics': 'Sostenibilidad · Data Analytics',
      '50 municípios': '50 municipios',
      'piloto 2020—2023': 'piloto 2020—2023',
      'Integração de clima, agricultura e solo para priorizar análises agroclimáticas no Centro-Oeste brasileiro.': 'Integración de clima, agricultura y suelo para priorizar análisis agroclimáticos en la región Centro-Oeste de Brasil.',
      'Transformar fontes ambientais heterogêneas em uma visão municipal comparável.': 'Transformar fuentes ambientales heterogéneas en una visión municipal comparable.',
      'NASA POWER, MapBiomas, Python, índice composto documentado e Power BI.': 'NASA POWER, MapBiomas, Python, un índice compuesto documentado y Power BI.',
      'Pipeline, dashboard e critérios de priorização com limitações metodológicas explícitas.': 'Pipeline, dashboard y criterios de priorización con limitaciones metodológicas explícitas.',
      'NLP · Classificação': 'NLP · Clasificación',
      'acurácia validada': 'exactitud validada',
      'Detector de Spam com NLP': 'Detector de Spam con NLP',
      'Pipeline reproduzível para classificar mensagens SMS como spam ou legítimas, da limpeza do texto à avaliação do erro.': 'Pipeline reproducible para clasificar mensajes SMS como spam o legítimos, desde la limpieza del texto hasta el análisis de errores.',
      'TF-IDF, Multinomial Naive Bayes e divisão estratificada.': 'TF-IDF, Multinomial Naive Bayes y división estratificada.',
      'Precisão de 98,37% para spam, com erros explicitamente apresentados.': 'Precisión del 98,37 % para spam, con los errores presentados de forma explícita.',
      'pipeline analítico': 'pipeline analítico',
      'Pipeline acadêmico que combina segmentação de clientes, modelos hierárquicos e regras de campanha com visualização em Power BI.': 'Pipeline académico que combina segmentación de clientes, modelos jerárquicos y reglas de campaña con visualización en Power BI.',
      'RFM, Random Forest, preparação de dados e regras de negócio rastreáveis.': 'RFM, Random Forest, preparación de datos y reglas de negocio trazables.',
      'Saídas acionáveis para explorar recompra, perfil de cliente e campanhas sugeridas.': 'Resultados accionables para explorar la recompra, los perfiles de clientes y las campañas sugeridas.',
      'Quer investigar a implementação?': '¿Quieres explorar la implementación?',
      'Os repositórios incluem código, documentação e instruções de execução.': 'Los repositorios incluyen código, documentación e instrucciones de ejecución.',
      'Abrir GitHub': 'Abrir GitHub',
      'Tecnologia organizada pelo papel que desempenha.': 'Tecnología organizada según la función que desempeña.',
      'Uma base em expansão, com foco nas ferramentas que já uso em trabalho, estudo e projetos.': 'Una base en expansión, centrada en las herramientas que ya utilizo en el trabajo, los estudios y los proyectos.',
      'Da organização da base à comunicação executiva.': 'Desde la organización de los datos hasta la comunicación ejecutiva.',
      'Visualização de Dados': 'Visualización de Datos',
      'Programação & Dados': 'Programación y Datos',
      'Ferramentas para explorar, tratar e integrar dados.': 'Herramientas para explorar, tratar e integrar datos.',
      'Métodos para compreender padrões e construir previsões.': 'Métodos para comprender patrones y construir previsiones.',
      'Estatística': 'Estadística',
      'Classificação': 'Clasificación',
      'Estrutura, qualidade e rastreabilidade da informação.': 'Estructura, calidad y trazabilidad de la información.',
      'Governança de Dados': 'Gobernanza de Datos',
      'Modelagem': 'Modelado de Datos',
      'Aprendizado contínuo, prática constante.': 'Aprendizaje continuo, práctica constante.',
      'Tecnólogo em Ciência de Dados': 'Tecnólogo en Ciencia de Datos',
      'Estatística, programação, análise de dados, Machine Learning, bancos de dados, Big Data, visualização e nuvem.': 'Estadística, programación, análisis de datos, Machine Learning, bases de datos, Big Data, visualización y cloud computing.',
      'Programa de Aprendizagem Profissional': 'Programa de Formación Profesional',
      'Competências corporativas, comunicação, tecnologia, inovação, sustentabilidade e resolução de problemas.': 'Competencias corporativas, comunicación, tecnología, innovación, sostenibilidad y resolución de problemas.',
      '05 itens': '05 elementos',
      'Modelagem, Programação e Qualidade de Dados · Gold': 'Modelado, Programación y Calidad de Datos · Gold',
      'Arquitetura de Analytics e Big Data · Gold': 'Arquitectura de Analytics y Big Data · Gold',
      'Estatística com Python': 'Estadística con Python',
      'Validar no LinkedIn': 'Verificar en LinkedIn',
      'Vamos transformar uma boa pergunta em uma decisão melhor?': '¿Transformamos una buena pregunta en una mejor decisión?',
      'Estou construindo minha trajetória em Analytics e Ciência de Dados com experiência corporativa, estudo contínuo e projetos aplicados.': 'Estoy construyendo mi trayectoria en Analytics y Ciencia de Datos mediante experiencia corporativa, aprendizaje continuo y proyectos aplicados.',
      'Voltar ao início ↑': 'Volver al inicio ↑'
    }
  };

  const attributeBindings = [
    ['.brand', 'aria-label', {
      pt: 'Tiago Sousa — início',
      en: 'Tiago Sousa — home',
      es: 'Tiago Sousa — inicio'
    }],
    ['.desktop-nav', 'aria-label', {
      pt: 'Navegação principal',
      en: 'Main navigation',
      es: 'Navegación principal'
    }],
    ['.mobile-nav', 'aria-label', {
      pt: 'Navegação móvel',
      en: 'Mobile navigation',
      es: 'Navegación móvil'
    }],
    ['[data-stage]', 'aria-label', {
      pt: 'Retrato de Tiago Sousa cercado por uma visualização interativa de dados',
      en: 'Portrait of Tiago Sousa surrounded by an interactive data visualization',
      es: 'Retrato de Tiago Sousa rodeado por una visualización interactiva de datos'
    }],
    ['.portrait-window img', 'alt', {
      pt: 'Tiago Sousa sentado no escritório da Movecta',
      en: 'Tiago Sousa seated at the Movecta office',
      es: 'Tiago Sousa sentado en la oficina de Movecta'
    }],
    ['.metrics', 'aria-label', {
      pt: 'Indicadores do portfólio',
      en: 'Portfolio highlights',
      es: 'Indicadores del portafolio'
    }],
    ['.project-cyan img', 'alt', {
      pt: 'Gráfico de validação temporal do projeto de previsão de demanda',
      en: 'Time-based validation chart from the demand forecasting project',
      es: 'Gráfico de validación temporal del proyecto de previsión de demanda'
    }],
    ['.project-green img', 'alt', {
      pt: 'Capa do AgroNexo com fontes ambientais conectadas ao Índice de Prioridade Agroclimática',
      en: 'AgroNexo cover showing environmental sources connected to the Agroclimatic Priority Index',
      es: 'Portada de AgroNexo con fuentes ambientales conectadas al Índice de Prioridad Agroclimática'
    }],
    ['.project-violet img', 'alt', {
      pt: 'Matriz de confusão do classificador de spam',
      en: 'Confusion matrix from the spam classifier',
      es: 'Matriz de confusión del clasificador de spam'
    }],
    ['.project-amber img', 'alt', {
      pt: 'Dashboard de customer intelligence do projeto ClickBus ZyData',
      en: 'Customer intelligence dashboard from the ClickBus ZyData project',
      es: 'Dashboard de customer intelligence del proyecto ClickBus ZyData'
    }]
  ];

  const metaDescription = document.querySelector('meta[name="description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const switcher = document.querySelector('[data-language-switcher]');
  const trigger = document.querySelector('[data-language-trigger]');
  const languageMenu = document.querySelector('[data-language-menu]');
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const currentLanguage = document.querySelector('[data-current-language]');
  const sourceText = new WeakMap();
  const textNodes = [];
  let activeLanguage = 'pt';

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest('[data-language-switcher]')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    sourceText.set(node, node.nodeValue);
    textNodes.push(node);
  }

  const localizedText = (original, language) => {
    if (language === 'pt') return original;
    const key = original.trim().replace(/\s+/g, ' ');
    const translated = translations[language]?.[key];
    if (!translated) return original;
    const leadingSpace = original.match(/^\s*/)?.[0] ?? '';
    const trailingSpace = original.match(/\s*$/)?.[0] ?? '';
    return `${leadingSpace}${translated}${trailingSpace}`;
  };

  const closeLanguageMenu = ({ restoreFocus = false } = {}) => {
    switcher?.classList.remove('open');
    trigger?.setAttribute('aria-expanded', 'false');
    if (restoreFocus) trigger?.focus();
  };

  const applyLanguage = (language, { persist = true } = {}) => {
    const nextLanguage = supportedLanguages.includes(language) ? language : 'pt';
    const settings = locale[nextLanguage];
    activeLanguage = nextLanguage;

    textNodes.forEach((node) => {
      node.nodeValue = localizedText(sourceText.get(node), nextLanguage);
    });

    document.documentElement.lang = settings.htmlLang;
    document.documentElement.dataset.language = nextLanguage;
    document.title = settings.title;
    metaDescription?.setAttribute('content', settings.description);
    ogLocale?.setAttribute('content', settings.ogLocale);
    ogTitle?.setAttribute('content', settings.title);
    ogDescription?.setAttribute('content', settings.ogDescription);

    attributeBindings.forEach(([selector, attribute, values]) => {
      document.querySelector(selector)?.setAttribute(attribute, values[nextLanguage]);
    });

    if (currentLanguage) currentLanguage.textContent = settings.code;
    trigger?.setAttribute('aria-label', settings.selectLanguage);
    languageMenu?.setAttribute('aria-label', settings.availableLanguages);
    languageButtons.forEach((button) => {
      const isActive = button.dataset.language === nextLanguage;
      button.setAttribute('aria-checked', String(isActive));
      button.classList.toggle('active', isActive);
    });

    const mobileMenuButton = document.querySelector('[data-menu-button]');
    if (mobileMenuButton) {
      const isOpen = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-label', isOpen ? settings.closeMenu : settings.openMenu);
    }

    if (persist) {
      try { localStorage.setItem('portfolio-language', nextLanguage); } catch (_) { /* Storage can be unavailable in privacy mode. */ }
    }

    closeLanguageMenu();
    document.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { language: nextLanguage } }));
  };

  const openLanguageMenu = () => {
    switcher?.classList.add('open');
    trigger?.setAttribute('aria-expanded', 'true');
  };

  trigger?.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeLanguageMenu(); else openLanguageMenu();
  });

  trigger?.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    openLanguageMenu();
    const activeIndex = languageButtons.findIndex((button) => button.dataset.language === activeLanguage);
    languageButtons[Math.max(activeIndex, 0)]?.focus();
  });

  languageButtons.forEach((button, index) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language));
    button.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeLanguageMenu({ restoreFocus: true });
        return;
      }
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowDown') nextIndex = (index + 1) % languageButtons.length;
      if (event.key === 'ArrowUp') nextIndex = (index - 1 + languageButtons.length) % languageButtons.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = languageButtons.length - 1;
      languageButtons[nextIndex]?.focus();
    });
  });

  document.addEventListener('click', (event) => {
    if (!switcher?.contains(event.target)) closeLanguageMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && switcher?.classList.contains('open')) closeLanguageMenu({ restoreFocus: true });
  });

  try {
    const savedLanguage = localStorage.getItem('portfolio-language');
    applyLanguage(supportedLanguages.includes(savedLanguage) ? savedLanguage : 'pt', { persist: false });
  } catch (_) {
    applyLanguage('pt', { persist: false });
  }

  window.portfolioI18n = {
    setLanguage: applyLanguage,
    getLanguage: () => activeLanguage,
    message: (key) => locale[activeLanguage]?.[key]
  };
})();
