export default [
  {
    id: 'welcome',
    type: 'hero',
    data: {
      type: 'image',
      title: 'Bienvenido a tu prueba',
      content: `<h3><div>Bienvenido a tu </div>
                <div><strong>Entrevista Técnica</strong> en</div>
                <span class='text-secondary text-bold'>Wolox</span></h3>`,
      classnames: ['flip-image'],
      images: [
        { src: 'ic_ilustra_hero.png', size: '500w' },
        {
          src: 'ic_ilustra_hero@2x.png',
          size: '800w',
        },
        {
          src: 'ic_ilustra_hero@3x.png',
          size: '1200w',
        },
      ],
    },
  },
  {
    id: 'technologies',
    type: 'hero',
    data: {
      type: 'icon',
      title: 'Estamos buscando',
      content: `<h3>Estamos buscando<br>
                para incorporar gente</br>
                increíble para estas<br>
                tecnologías:</h3>`,
      images: [
        {
          src: 'ic_tecnologys.svg',
        },
      ],
    },
  },
  {
    id: 'woloxers',
    type: 'two-columns',
    data: {
      left: {
        class: 'min-height',
        backgroundImage: 'img_woloxer.png',
        content: `<h2>
                    <span class='text-secondary'>350 +</span> <span class='text-primary'> Woloxers</span>
                  </h2>
                  <div>
                    <button class="button button--icon">
                      <i class="icon icon-twitter"></i>
                      @Wolox
                    </button>
                  </div>
                  <div>
                    <a class="button button--primary button--outline" target="_blank" href="https://twitter.com/Wolox">
                      <span>Síguenos</span>
                    </a>
                  </div>`,
      },
      right: {
        backgroundColor: '#f2f5fa',
        content: `<h3 class="semibold">Trabajamos para
                    <span class='text-primary'>convertir</span> <span class='text-secondary'>ideas</span>
                  en productos</h3>`,
      },
    },
  },
  {
    id: 'benefits',
    type: 'fullwidth',
    data: {
      content: `<div class="benefits">
                  <h4 class="semibold">Entre los beneficios que ofrecemos se encuentran <span class="text-primary">;)</span></h4>
                  <ul class="custom-list custom-list--icons custom-list--big">
                    <li><i class="icon icon-hour"></i> <span>Flexibilidad horaria.</span></li>
                    <li><i class="icon icon-homeoffice"></i> <span>Home Office.</span></li>
                    <li><i class="icon icon-workshops"></i> <span>Capacitaciones y workshops.</span></li>
                    <li><i class="icon icon-drinksnacks"></i> <span>Snacks, frutas y bebidas gratis.</span></li>
                    <li><i class="icon icon-laptop"></i> <span>Semana remota.</span></li>
                    <li><i class="icon icon-brain"></i> <span>Trabajar en últimas tecnologías.</span></li>
                  </ul>
                </div>`,
    },
  },
  {
    type: 'separator',
  },
  {
    id: 'requirements',
    type: 'two-columns',
    data: {
      left: {
        content: `<h4 class="bold">Requerimientos</h4>`,
      },
      right: {
        content: `<ul class="custom-list custom-list--bullets custom-list--big">
                    <li>Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos.</li>
                    <li>Inglés intermedio/avanzado</li>
                    <li>Conocimiento en metodologías ágiles (deseable)</li>
                  </ul>`,
      },
    },
  },
  {
    id: 'thanks',
    type: 'hero',
    data: {
      type: 'text',
      classnames: ['hero--center', 'hero--content-full'],
      content: `<div class="text-align-center">
                  <h3 class="bold">Gracias por <span class="text-primary">completar el ejercicio</span></h3>
                  <h4 class="hero__subtitle">Te invitamos a ver mas información</h4>
                  <a class="button button--primary" target="_blank" href="https://www.wolox.com.ar/">
                    <span>Conocer más</span>
                  </a>
                </div>`,
    },
  },
];
