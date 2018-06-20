import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
    selector: 'glosario',
    templateUrl: 'glosario.template.html'
})

export class GlosarioComponent implements OnInit{

    public busqueda;
    public conceptos = [];
    public conceptos2 = [];
    public seleccion = "Todo"
    public abc = ['Todo','A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    constructor(){
        this.conceptos =[
          {
            titulo: 'A.P.D.H (Asamblea Permanente por los Derechos Humanos):',
            significado: '<p>Surge en 1975 en la Capital Federal, de una auto convocatoria de personas proveniente de los más diversos sectores sociales, políticos, intelectuales, sindicales y religiosos de la Argentina. Querían enfrentar la situación de creciente violencia institucional y de quiebra de la vigencia de los derechos humanos que estaba instalada en el país. Durante la dictadura, sus Presidentes Honorarios fueron la dirigente socialista Alicia Moreau de Justo y el Obispo de Neuquén Jaime de Nevares.</p><p>Le correspondió, en el país y en los foros internacionales, la resistencia “política” a la dictadura: denuncia pública, iniciativas de orden jurídico, gestiones para defender a las víctimas del terrorismo de  estado, etc. asumió la función de fiscal social frente al régimen de terror.</p><p>Su amplitud y pluralismo le concedió una indiscutida capacidad de convocatoria popular. El hecho de encuadrar su acción estrictamente sobre la base de la Declaración Universal de los Derechos Humanos, la propia constitución del país y la legislación internacionalmente reconocida, posibilitó un enfoque compartido sobre una problemática muy amplia, que hace a la esencia del ser ciudadano.</p>'
          },
          {
            titulo: 'A.P.D.H. Nqn (Asamblea por los Derechos Humanos de Neuquén)',
            significado: '<p>Nació en mayo de 1976 como Delegación  de la A.P.D.H. Nacional, a partir de una convocatoria del Obispo Jaime de Nevares. La primera reunión nucleó a trece personas de Neuquén Capital y localidades cercanas. Otros tantos se fueron incorporando, a pesar de amenazas y persecuciones. Algunos de ellos eran militantes de partidos políticos “disueltos” por la dictadura o tenían experiencia en otras luchas sociales; muchos no tenían hasta ese momento militancia ninguna. Todos respetaban el espíritu pluralista de la convocatoria y estaban dispuestos a defender la vida.</p><p>Las reuniones se realizaban en dependencias del Obispado, los martes a las 20 hs. Con las puertas bien abiertas sobre la avenida Argentina “por si alguien necesita de nosotros”, según decía don Jaime, presente en las reuniones durante toda la dictadura. Y siempre dispuesto a amparar a los que acudían y a levantar el ánimo de todos, con su contagioso buen humor.</p>'
          },
          {
            titulo: 'Alianza Para el Progreso',
            significado: '<p>Fue una iniciativa del presidente norteamericano  John Kennedy. El acta de fundación fue suscripta en 1961 en Punta del Este (Uruguay), por todas las naciones latinoamericanas excepto Cuba, que formuló severas críticas.</p><p>La Alianza para el Progreso duraría 10 años. Su Constitución establecía que su objetivo era: ”mejorar la vida de todos los habitantes del continente” mediante un conjunto de medidas de carácter social, político y económico. Para garantizar estos objetivos Estados Unidos se comprometía a cooperar en aspectos económicos y financieros. La opinión pública recibió con entusiasmo esta declaración, pero el programa fracasó debido a que, tras el asesinato de Kennedy, sus sucesores limitaron la ayuda financiera estadounidense en América Latina, impusieron condiciones y prefirieron acuerdos bilaterales en los que primaba la cooperación militar.</p>'
          },
          {
            titulo: 'Amnistía',
            significado: '<p>Una amnistía es un mecanismo/instrumento legal que tiene como efecto impedir el enjuiciamiento penal y, en algunos casos, las acciones civiles, contra ciertas personas o categorías de personas con respecto a una conducta criminal específica cometida antes de la aprobación de la amnistía.</p><p>La exención del enjuiciamiento penal y, posiblemente, de la acción civil lograda mediante la amnistía se suele limitar a la conducta durante un período determinado de tiempo y/o que implica un hecho o circunstancia específica, como un conflicto armado determinado.</p><p>La palabra amnistía deriva de la palabra griega amnestia, que es también la raíz de amnesia. La raíz griega connota el olvido de un crimen ya ocurrido.</p><p>Las autoamnistías son amnistías aprobadas por los responsables de violaciones de derechos humanos para evadir su responsabilidad. En Argentina, la ley Nº 22924 de “Pacificaciòn Nacional” de 22/9/83, conocida como “ley de autoamnistìa” fue dictada por la Dictadura Militar a los fines de evitar los futuros enjuiciamientos de los crímenes perpetrados, así el art. 1º decía “Decláranse extinguidas las acciones penales emergentes de los delitos cometidos con motivación o finalidad terrorista o subversiva, desde el 25 de mayo de 1973 hasta el 17 de junio de 1982. Los beneficios otorgados por esta ley se extienden, asimismo, a todos los hechos de naturaleza penal realizados en ocasión o con motivo del desarrollo de acciones dirigidas a prevenir, conjurar o poner fin a las referidas actividades terroristas o subversivas, cualquiera hubiere sido su naturaleza o el bien jurídico lesionado. Los efectos de esta ley alcanzan a los autores, partícipes, instigadores, cómplices o encubridores y comprende a los delitos comunes conexos y a los delitos militares conexos.”</p>'
          },
          {
            titulo: 'Cantata de Santa María de Iquique',
            significado: '<p>Fue escrita en 1969 por Luis Advis y estrenada por el grupo musical Quilapayún, en 1970. Musicalmente la obra tiene la estructura de las antiguas cantatas populares. Cuenta la masacre perpetrada por el ejército de Chile, en 1907, en el pueblo de Iquique, en el norte de ese país. Murieron 3600 obreros del salitre. Entre los asesinados hubo mujeres y niños.</p><p>Las cintas master fueron destruidas por la dictadura de Pinochet. En 1978 los Quilapayún, exilados en Europa, las volvieron a grabar.</p>'
          },
          {
            titulo: 'Capitalismo',
            significado: '<p>Sistema político-socio-económico caracterizado fundamentalmente por la propiedad privada y concentrada de los principales medios de producción y comunicación. Se les reconoce a los individuos libertad para realizar contratos que regulen sus propios intereses, sin importar sus efectos en el aumento de la pobreza y la exclusión social.</p><p>En la actualidad son los grupos financieros (especulación y Bolsa de Valores) los que dictan las “reglas del juego” en la sociedad capitalista.</p>'
          },
          {
            titulo: 'Carapintadas',
            significado: '<p>En abril de 1987 algunos oficiales del ejército fueron citados ante la Cámara Federal  de Córdoba, imputados por delitos perpetrados en el centro clandestino “La Perla”, entre ellos el torturador Ernesto  “Nabo “ Barreiro. Varias unidades del ejército se sublevaron y avanzaron en largas columnas motorizadas sobre la Capital Federal y capitales de provincia, exigiendo la clausura de los procesos judiciales, ante la pasividad de los mandos superiores. Iban de uniforme con pertrechos bélicos y las caras embetunadas. El pueblo, que resistía reuniéndose en plazas y locales públicos, los apodó Carapintadas.</p>'
          },
          {
            titulo: 'Centro Clandestino',
            significado: '<p>Diferentes lugares e instalaciones secretas fueron utilizadas por el terrorismo de estado para torturar, interrogar, violar, mantener detenidas ilegalmente y asesinar a militantes políticos, sociales y gremiales. Los “centros clandestinos de detención” (CCD) sirvieron para ejecutar el plan sistemático de desaparición de personas.</p>'
          },
          {
            titulo: 'CEPRODH (Centro de Profesionales por los Derechos Humanos)',
            significado: '<p>Actúa a nivel nacional. Tiene una Delegación en la región y es una de las partes querellantes en el Juicio a los Genocidas de Neuquén y Alto Valle.</p>'
          },
          {
            titulo: 'CIA',
            significado: '<p>Central de inteligencia del gobierno estadounidense  (Central Intelligence Agency).</p>'
          },
          {
            titulo: 'Comunismo',
            significado: '<p>La palabra comunismo tiene una doble acepción:</p> <p>a) conjunto de teorías o doctrinas comunistas desarrolladas por Karl Marx y Federico Engels (siglo  XIX) y sus seguidores, hasta nuestros días. Se las llama también marxismo o socialismo científico. Propone abolir la propiedad privada, colectivizar los medios de producción y desembocar en una sociedad sin oprimidos ni opresores.</p><p>b) sistema político-económico-social organizado conforme a las teorías marxistas. Fuera de un tronco común de premisas y de metas, las expresiones del comunismo histórico difieren según la época y el país en que cada experiencia se desarrolló concretamente.</p>'
          },
          {
            titulo: 'CONADEP',
            significado: '<p>La Comisión por los desaparecidos fue creada por Raúl Alfonsín al asumir la presidencia de la nación el 10 de diciembre de 1983. Estaba integrada  por  personalidades que habían actuado en defensa de los DD. HH. de las víctimas durante la dictadura, y por representantes del Poder Legislativo. La presidió el escritor Ernesto Sábato y la integraron entre otros René Favaloro, Gregorio Klimovsky, el rabino Marshall Meyer, el obispo Jaime De Nevares. El Presidente le otorgó plenos poderes para recibir, investigar, y elevar a la justicia denuncias por desaparición forzada, ejecuciones clandestinas, detenciones sin causa ni proceso, tormentos, apropiación de niños nacidos en cautiverio, robo de bienes de las víctimas, etc. Algunos organismos de DD. HH. colaboraron intensamente con esta tarea. La CONADEP presento su informe final “NUNCA MAS” el  20 de setiembre de l984. </p>'
          },
          {
            titulo: 'Corriente de Militantes por lo DDHH',
            significado: '<p>Organismo que vela por el efectivo cumplimiento de los DDHH y que actúa en Neuquén y Alto Valle. </p>'
          },
          {
            titulo: 'Crimen de Lesa Humanidad',
            significado: '<p>”Lesa” significa agraviada, lastimada, ofendida: de allí que crimen de lesa humanidad aluda a un crimen que ofende, agravia, injuria a la Humanidad en su conjunto. Son crímenes imprescriptibles.</p><p>Los crímenes contra la humanidad comprenden las conductas tipificadas como asesinato, exterminio, deportación o desplazamiento forzoso, encarcelación, tortura, violación, prostitución forzada, desaparición forzada, secuestro o cualesquiera actos inhumanos que causen graves sufrimientos o atenten contra la salud mental o física de quien los sufre, siempre que dichas conductas se cometan como parte de un ataque generalizado, sistemático y planificado contra una población civil.</p>'
          },
          {
            titulo: 'Democracia',
            significado: '<p>Como régimen político es una forma de gobierno caracterizada por elecciones periódicas, sufragio universal, libertad de opinión y el derecho universal a presentarse como candidato a cargos públicos.</p>'
          },
          {
            titulo: 'Derechos',
            significado: '<p>Potestad que tiene el hombre de ejercer u omitir ciertas acciones y de exigir ser respetado en ellas. Deben se garantizados por el Estado. En nuestro país los Derechos están amparados por la Constitución Argentina y la Constitución de Neuquén.</p>'
          },
          {
            titulo: 'Derechos Civiles',
            significado: '<p>Son los que se refieren a la persona y personalidad del  individuo. Por ejemplo, libertad de pensamiento, de palabra; derecho de transitar, salir y volver al propio país; derecho a no ser arrestado y encarcelado arbitrariamente, etc. Los derechos civiles son reclamos de libertades individuales que el estado no debe avasallar.</p>'
          },
          {
            titulo: 'Derechos Económicos y Sociales',
            significado: '<p>Se relacionan con beneficios que deben ser garantizados por el Estado, mediante la legislación y la provisión efectiva de servicios e ingresos complementarios. Algunos de ellos son el derecho a la educación, el derecho a trabajar, a percibir igual salario por igual trabajo, a la seguridad social; el derecho al descanso y al ocio, etc.</p>'
          },
          {
            titulo: 'Derechos Humanos',
            significado: '<p>Luego de los crímenes masivos cometidos por el fascismo y el nazismo durante la Segunda Guerra Mundial, la comunidad internacional buscó establecer una instancia supranacional para que los Estados Miembros se comprometieran a garantizar a sus habitantes ciertos derechos mínimos. Éste fue uno de los motivos de la constitución, en 1945, de la Organización de las Naciones Unidas (ONU), organismo internacional actualmente integrado por casi todas las naciones del mundo (192 Estados miembros).</p><p>En 1948, las Naciones Unidas proclamaron la Declaración Universal de los Derechos Humanos, que parte de una premisa: todos los hombres son iguales en dignidad y derechos.</p>'
          },
          {
            titulo: 'Derechos Políticos',
            significado: '<p>Reconocen la facultad de los ciudadanos a tener voz, y de manera directa o indirecta, la representación política en el gobierno de un país. Están relacionados con la formación del estado democrático representativo. Estos derechos garantizan al individuo su libertad para participar en la dirección política del estado.</p>'
          },
          {
            titulo: 'Desaparecido/a',
            significado: '<p>Es el nombre con que se conoce a las personas que fueron víctimas del crimen de desaparición forzada durante el autodenominado, por los militares, “Proceso de Reorganización Nacional”, y llamado por la ciudadanía "Dictadura Militar", entre los años 1976-1983.</p><p>Se considera desaparición forzada la privación de la libertad, cualquiera que fuere su forma, cometida por agentes del Estado o por personas o grupo de personas que actúen con la autorización, el apoyo o la aquiescencia del Estado, seguida de la falta de información o de la negativa a reconocer dicha privación de libertad o de informar sobre el paradero de la persona,con lo cual se impide el ejercicio de los recursos legales y de las garantías procesales pertinentes. La desaparición forzada es un delito de lesa humanidad y por lo tanto no prescribe.</p>'
          },
          {
            titulo: 'Desaparición Forzada',
            significado: '<p>La  Convención Interamericana contra la Desaparición Forzada de Personas en su art. 2, la define como la privación de la libertad a una o más personas, cualquiera que fuere su forma, cometida por agentes del Estado o por personas o grupos de personas que actúen con la autorización, el apoyo o la aquiescencia del Estado, seguida de la falta de información o de la negativa a reconocer dicha privación de libertad o de informar sobre el paradero de la persona, con lo cual se impide el ejercicio de los recursos legales y de las garantías procesales pertinentes.</p>'
          },
          {
            titulo: 'Dictadura',
            significado: '<p>Gobierno que se ejerce fuera de las leyes constitucionales de un país. Expresa un poder ilimitado por parte de una persona o un grupo que ejerce el gobierno del Estado. Los elementos comunes que tienen las diferentes experiencias dictatoriales son: el exclusivismo en el ejercicio del poder, la restricción de las libertades civiles y los métodos muy violentos de control social y político.</p><p>Las dictaduras han favorecido los intereses económicos y sociales dominantes en desmedro de los sectores subordinados, a los cuales se ha procurado desarticular socialmente.</p>'
          },
          {
            titulo: 'Doctrina de Seguridad Nacional',
            significado: '<p>Fue el sostén ideológico de las dictaduras militares en América Latina durante las décadas de 1960 y 1970. Los Estados Unidos temían que la influencia de la revolución cubana de 1959 significara una expansión del comunismo en América Latina y que el continente girara hacia la órbita soviética. Para evitarlo propició una contraofensiva política y militar. Esto se dio en el contexto de lo que se llamó “guerra fría”.</p><p>La Doctrina de Seguridad Nacional le otorgaba a las fuerzas armadas de los países latinoamericanos un rol principal en la lucha contra el comunismo y en el control de la sociedad. En los hechos, esto significó el apoyo de la Agencia Central de Inteligencia (CIA) de los Estados Unidos a las dictaduras militares que se expandieron por el continente durante esos años.</p>'
          },
          {
            titulo: 'Dn. Jaime Francisco de Nevares',
            significado: '<p>Jaime de Nevares fue nombrado obispo de Neuquén en 1961. Sacerdote y abogado “Dn. Jaime” como todos le llamaban, convirtió en acto cada una de sus convicciones en cuanto a la defensa de los pobres, de los pueblos originarios, de los trabajadores y en su firme oposición a las dictaduras cívico-militares. En 1971, De Nevares siguió la línea que había adoptado en El Chocón y renunció a dar la bendición en actos oficiales. Luego, en 1976, encabeza la creación de la primera delegación de la Asamblea Permanente por los Derechos Humanos del país en Neuquén. Don Jaime es el  faro  inspirador de la Defensa de los Derechos Humanos  en la región y el país. Falleció el 19 de Mayo de l995.</p>'
          },
          {
            titulo: 'Escuela de las Américas',
            significado: '<p>La Escuela de las Américas dirigida y financiada por EEUU, fue establecida en Panamá en 1946 y luego trasladada a una guarnición de Estados Unidos. Su misión era entrenar a militares y fuerzas de seguridad de los países latinoamericanos, en métodos capaces de extirpar  de la población toda idea o proyecto  opuesto a la doctrina de seguridad nacional. Sus cursos incluían operaciones de comando, guerra psicológica, técnicas de interrogatorio bajo tortura, etc.</p>'
          },
          {
            titulo: 'Estado de Sitio',
            significado: '<p>Suspensión de los derechos y garantías que otorga la Constitución Nacional.</p>'
          },
          {
            titulo: 'FF.AA. (Fuerzas Armadas)',
            significado: '<p>Ejército (tierra), Marina (agua) y Aeronáutica (aire).</p>'
          },
          {
            titulo: 'Fuerzas de Seguridad',
            significado: '<p>Policía Federal, policías provinciales, gendarmería  y subprefectura.</p>'
          },
          {
            titulo: 'Genocidio',
            significado: '<p>Es un crimen de lesa humanidad definido como una negación del derecho de existencia a grupos humanos enteros, sean ellos nacionales, raciales, religiosos o políticos y que se traduce en la persecución, asesinato, exterminio, deportación masiva o esclavitud.</p>'
          },
          {
            titulo: 'Genocidio Mapuche',
            significado: '<p>Fue perpetrado a lo largo de segunda mitad del siglo XIX por el Estado Argentino, para adueñarse del territorio ocupado ancestralmente por los Pueblos Originarios de la Patagonia, desde antes de la Conquista española. Culmino con la llamada “Conquista del Desierto” (1876/1879) que doblego la últimas resistencias de las tribus Mapuche al precio de decenas de miles de muertos y de prisioneros, los que fueron reducidos a la esclavitud.</p>'
          },
          {
            titulo: 'Gobierno Cívico-Militar',
            significado: '<p>Se denomina al gobierno de facto que cuenta con apoyo y participación directa de civiles (funcionarios, empresarios, gremialistas, otros) que comparten la metodología y los objetivos que el gobierno militar impone al conjunto de la sociedad.</p>'
          },
          {
            titulo: 'Gobierno de Facto (o de Hecho)',
            significado: '<p>Gobierno que se constituye mediante el uso de la fuerza, o sea, a través de un golpe de Estado violando todas las normas establecidas  en la Constitución del país, en particular, el carácter electivo de sus gobernantes.</p>'
          },
          {
            titulo: 'Guerra Fría',
            significado: '<p>Este concepto designa esencialmente la larga y abierta rivalidad que enfrentó a EE.UU. y la Unión Soviética (U.R.S.S.) y a sus respectivos aliados, tras la segunda guerra mundial (1945). Este conflicto fue la clave de las relaciones internacionales mundiales durante casi medio siglo y se libró en el frente político, económico y propagandístico, pero sólo de forma muy limitada en el frente militar.</p>'
          },
          {
            titulo: 'Habeas Corpus',
            significado: '<p>Conforme al art. 43 de la Constitución Nacional, es una acción expedita, rápida e informal interpuesta por el afectado o cualquier persona en su favor cuando el derecho lesionado, restringido, alterado o amenazado fuera la libertad física, o en caso de agravamiento ilegítimo en la forma o condiciones de detención, o en el de desaparición forzada de personas, y el juez resolverá de inmediato sobre tal privación de libertad y sus condiciones, aun durante la vigencia del estado de sitio.</p>'
          },
          {
            titulo: 'H.I.J.O.S. (Hijos por la Identidad y la Justicia, contra el Olvido y el Silencio)',
            significado: '<p>Se organizaron para conocer qué pasó con sus padres desaparecidos durante la Dictadura. Hoy levantan las banderas por las que aquellos lucharon.</p>'
          },
          {
            titulo: 'Ideología',
            significado: '<p>Representación del mundo que construye un conjunto de esquemas de significados e interpretaciones  orientados a la acción. Algunas ideologías intentan justificar el orden social existente; otras intentan justificar su transformación.</p>'
          },
          {
            titulo: 'Imperialismo',
            significado: '<p>Forma de expansión del poder de unas naciones sobre otras. Es un sistema de subordinación, dominación y alianzas a escala internacional. Sin complicidades  locales, el imperialismo sería imposible. Se impone combinando paralelamente la fuerza (militar y policial), el control social y político y el dictado de las reglas del modelo económico. Con el desarrollo del sistema financiero actual, nacen nuevas formas de dominación imperialista por medio de la integración forzada al mercado mundial.</p>'
          },
          {
            titulo: 'Imprescriptibles',
            significado: '<p>Que no prescribe, que no se extingue, que no muere por el transcurso del tiempo. En el caso del terrorismo de estado, la responsabilidad penal de los represores, no prescribe, no puede extinguirse por el paso del tiempo.</p>'
          },
          {
            titulo: 'Indulto',
            significado: '<p>El indulto es un mecanismo discrecional mediante el cual el titular del Poder Ejecutivo a través de un acto oficial estatal exime a un delincuente o delincuentes condenados por sentencia firme de la aplicación de la pena en todo o en parte, sin eliminar la condena en que se basa.</p><p>Técnicamente el indulto es una causa de extinción de la acción penal, que supone el “perdón” (evadir) la pena.</p>'
          },
          {
            titulo: 'Inteligencia Militar',
            significado: '<p>Tarea de recolección de información sobre opositores políticos desarrollada por unidades específicas de las fuerzas armadas durante el período 1976-1983 para ejecutar el plan sistemático de detenciones y desapariciones forzadas.</p>'
          },
          {
            titulo: 'Izquierda',
            significado: '<p>Se aplica a posiciones políticas progresistas y/o de raíz socialista o marxista.</p>'
          },
          {
            titulo: 'Juicio a las Juntas',
            significado: '<p>El 9 de diciembre de 1985 el presidente Alfonsín da orden que se abriera un juicio contra los integrantes de las tres Juntas que habían gobernado sucesivamente el país durante la dictadura cívico-militar. Se les imputó el haber ordenado la ejecución de un plan criminal para reprimir toda forma de oposición al modelo político, económico y cultural que el llamado “Proceso de Reorganización Nacional” pretendía imponer. Para fundamentar las imputaciones se seleccionaron  709 denuncias documentadas en el informe CONADEP. Fueron  condenados a reclusión perpetua Videla y Masera, Viola a diecisiete años y el brigadier Agosti a cuatro años  y seis meses  de prisión. Todos fueron despojados de su grado militar y enviados a cárcel común. Los integrantes de la 3ra. Junta resultaron absueltos.</p>'
          },
          {
            titulo: 'Junta Militar',
            significado: '<p>Es un gobierno en el cual las fuerzas armadas en conjunto, toman el poder por un golpe de estado. En 1976, en Argentina, la Junta Militar estuvo integrada por los máximos responsables de cada fuerza: Marina, Aviación y Ejercito, representados por el Almirante Emilio Massera, el Brigadier Orlando Agosti y el Teniente General Jorge Rafael Videla, respectivamente. Además, Videla ejerció la presidencia de facto de la Nación entre marzo de 1976 y el mismo mes de 1981. Sus sucesores fueron: los Tenientes Generales Roberto Viola, Fortunato Galtieri y Reynaldo Bignione hasta el 10 de Diciembre de 1983.</p>'
          },
          {
            titulo: 'La Patagonia Rebelde',
            significado: '<p>Título del libro del historiador Osvaldo Bayer que documenta la represión ilegal y los asesinatos de obreros rurales en la provincia de Santa Cruz, quienes habían protagonizado una huelga (1920/1921) por reclamos salariales y laborales. Actuaron fuerzas del ejército al mando del teniente coronel Héctor Varela. Hay una película sobre el mismo tema dirigida por Héctor Olivera en el año 1974.</p>'
          },
          {
            titulo: 'Leyes y "Pseudo" Leyes',
            significado: '<p>Las leyes son normas dictadas por el Congreso de la Nación o por las Legislaturas provinciales. La dictadura prohibió toda actividad del poder legislativo: diputados y senadores elegidos por el pueblo. En su lugar, otorgo a la C.A.I (Comisión de Asesoramiento Legislativo) la facultad de dictar ordenanzas que llamó “leyes” con la misma obligatoriedad que las leyes constitucionales, y que continuaban con la numeración de las votadas en democracia.</p>'
          },
          {
            titulo: 'Lucha Contrainsurgente',
            significado: '<p>Son acciones legales o ilegales desarrolladas por gobiernos dictatoriales destinadas a combatir la insurgencia. Insurgente: se aplica a los movimientos políticos contrarios al orden capitalista establecido.</p>'
          },
          {
            titulo: 'Madres de Plaza de Mayo',
            significado: '<p>Organización fundada en 1977, a nivel nacional, para reclamar la aparición con vida de sus hijos. En Neuquén y Alto Valle encabezan la lucha por la Vida, la Verdad y la Justicia.</p>'
          },
          {
            titulo: 'Modelo de Vida Occidental y Cristiano',
            significado: '<p>En la Doctrina de la Seguridad Nacional se promueve el modelo de vida occidental y cristiano oponiéndolo al modelo marxista.</p>'
          },
          {
            titulo: 'Organismos de DD.HH.',
            significado: '<p>La mayoría nacieron durante la última dictadura militar para denunciar las violaciones al Derecho a la Vida y para apoyar a las víctimas y familiares. Con la llegada de la democracia reclaman Memoria, Verdad y Justicia. Nuevos organismos aparecieron para luchar contra la opresión a los pueblos originarios, la discriminación por razones de género y contra grupos minoritarios (migrantes, homosexuales etc.), la violencia policial y la violencia institucional.</p>'
          },
          {
            titulo: 'Plan Sistemático',
            significado: '<p>Conjunto de normas establecidas por la Junta militar que gobernó el país desde 1976 a 1983 para la ejecución de la represión ilegal.</p>'
          },
          {
            titulo: 'Presos P.E.N. (Presxs a disposición del poder ejecutivo nacional)',
            significado: '<p>Personas detenidas ilegalmente en los centros clandestinos pasaron a cárceles correspondientes a  las diferentes  Zonas y subzonas en que se había dividido el país durante el terrorismo de estado.</p>'
          },
          {
            titulo: 'Picana',
            significado: '<p>Instrumento de tortura utilizado por la policía y las FF.AA. en la Argentina y en algunos países de Sudamérica.</p>'
          },
          {
            titulo: 'Revolución',
            significado: '<p>Conjunto de acciones militares o no, planificadas y ejecutadas para obtener un cambio- a veces violento- del sistema político, social y económico.</p>'
          },
          {
            titulo: 'Subversivo',
            significado: '<p>Su significado es persona que busca con sus acciones transformar, destruir, subvertir el orden social vigente. Fue utilizado por las dictaduras para señalar a todos sus opositores.</p> <p>Los grandes líderes que, en su tiempo, quisieron cambiar el estado de cosas que consideraban injustas (Gandhi, Luther King, etc.) y los revolucionarios latinoamericanos (San Martín, Bolívar, Artigas, etc.) fueron subversivos.</p>'
          },
          {
            titulo: 'Teoría de los Dos Demonios',
            significado: '<p>Discurso construido por la Dictadura Militar. Sostenía que se trató de una Guerra Interna, en la que las Fuerzas Armadas y de Seguridad, defendieron al país, preservando los valores cristianos y occidentales.</p>'
          },
          {
            titulo: 'Terrorismo de estado',
            significado: '<p>Conjunto de acciones represivas y legales, llevadas a cabo por grupos de militares y civiles desde el gobierno, o con la aprobación de éste,  con el propósito de aterrorizar y evitar la expresión de cualquier tipo de descontento frente a las políticas económicas, sociales y culturales.</p>'
          },
          {
            titulo: 'Triple A',
            significado: '<p>Alianza Anticomunista Argentina (AAA). Organización alentada y financiada desde el Estado, a partir de la derechización producida en el gobierno peronista (1973-1976). Apuntaba a amedrentar a los opositores mediante atentados y asesinatos perpetrados por para-militares.</p>'
          },
          {
            titulo: 'Tortura',
            significado: '<p>Según art. 1 de la Convención contra la Tortura y Otros Tratos o Penas Crueles, Inhumanos o Degradantes se entiende como “tortura” a todo acto por el cual se inflija intencionadamente a una persona dolores o sufrimientos graves, ya sean físicos o mentales, con el fin de obtener de ella o de un tercero información o una confesión, de castigarla por un acto que haya cometido, o se sospeche que ha cometido, o de intimidar o coaccionar a esa persona o a otras, o por cualquier razón basada en cualquier tipo de discriminación, cuando dichos dolores o sufrimientos sean infligidos por un funcionario público u otra persona en el ejercicio de funciones públicas, a instigación suya, o con su consentimiento o aquiescencia.</p>'
          },
          {
            titulo: 'Zonas de Seguridad (Subzonas-Áreas)',
            significado: '<p>La Doctrina de Seguridad Nacional establece la división del territorio en zonas y sub zonas de actuación de las fuerzas militares.</p>'
          }
        ]
    }

    ngOnInit(){
      this.conceptos2 = this.conceptos;
    }

    filtrar(l){
      console.log(l);
      let letra = this.abc[l];
      this.seleccion = letra;
      if(letra == "Todo")
        this.conceptos2 = this.conceptos;
      else
        this.conceptos2 = this.conceptos.filter(function(word){
          console.log("letra: ",letra," palabra: ",word)
          return word.titulo[0] === letra;
      });
    }
}
