const About = () => (
  <div id="about" className="pt-10 xl:pt-14 fullHD:pt-12">
    <h1 className="text-blue-400 text-center text-2xl font-bold mb-6 md:text-3xl lg:pt-6 lg:pb-10 xl:text-3xl">
      ¡Hola! Soy Desarrollador Web
    </h1>

    <div className="flex flex-col gap-6">
      <p>
        Nací en Buenos Aires, Argentina, pero llevo años en España. Adaptarme no
        fue fácil, pero la resiliencia me enseñó a construir algo valioso
        incluso en escenarios inciertos. Esa misma energía la pongo en cada
        proyecto.
      </p>
      <p>
        Disfruto creando aplicaciones tanto{" "}
        <span className="italic font-bold">frontend</span> como{" "}
        <span className="italic font-bold">backend</span> con tecnologías como
        React y Java, entre otras.
      </p>
      <p>
        Durante casi 20 años trabajé en atención al cliente, aprendiendo la
        importancia de escuchar. Ahora aplico esa lección a cada línea de
        código, buscando no sólo que las cosas funcionen, sino que marquen la
        diferencia.
      </p>
      <p>
        Actualmente, estudio{" "}
        <span className="italic font-bold">
          Desarrollo de Aplicaciones Multiplataforma (DAM)
        </span>{" "}
        en Universae y en mi tiempo libre me formo en testing para asegurar
        calidad. También estoy desarrollando una app personal para estudiar. Uso
        React y Local Storage, por el momento, sin embargo planeo integrar
        PostgreSQL y un backend con NestJS. ¡Es un reto que disfruto cada día!
      </p>
      <p>
        Cuando no programo, viajo con mi familia, disfruto de pelis de terror
        paranormal y épicas de ángeles y demonios, o voy al gym a optimizar mi{" "}
        <span className="italic font-bold">
          Base de Datos Alimenticia (BBDD)
        </span>
        . Aunque los <span className="italic font-bold">INSERT</span> de antojos
        a veces ganan a los <span className="italic font-bold">DELETE</span>,
        ¡intento no sobrecargar el sistema, jaja!
      </p>
      <p>
        También me encanta crear y arreglar cosas: pintar cuadros, cuidar mi
        balcón o cositas en casa. Ni hablar de las cenas en casa con amigos! que
        manera de reírnos! Estas actividades me llenan de energía y me hacen
        volver al teclado con más ganas.
      </p>
      <p>
        Si compartes mi pasión por crear cosas que marquen la diferencia, estaré
        encantado de colaborar contigo. ¡Hablemos y hagamos algo increíble
        juntos!
      </p>
    </div>
  </div>
);

export default About;
