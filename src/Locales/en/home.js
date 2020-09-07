export default [
  {
    id: 'welcome',
    type: 'hero',
    data: {
      type: 'image',
      title: 'Welcome to your test',
      content: `<h3><div>Welcome to your </div>
                <div><strong>Technical Test</strong> at</div>
                <span class='text-secondary text-bold'>Wolox</span></h3>`,
      classnames: ['flip-image'],
      images: [
        { src: 'ic_ilustra_hero.png' },
        {
          src: 'ic_ilustra_hero@2x.png',
          size: '800vw',
        },
        {
          src: 'ic_ilustra_hero@3x.png',
          size: '1200vw',
        },
      ],
    },
  },
  {
    id: 'technologies',
    type: 'hero',
    data: {
      type: 'icon',
      title: 'We are hiring people',
      content: `<h3>We are looking for<br>
                to incorporate people</br>
                incredible for these<br>
                technologies:</h3>`,
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
                    <button class="button button--primary button--outline">
                      <span>Follow us</span>
                    </button>
                  </div>`,
      },
      right: {
        backgroundColor: '#f2f5fa',
        content: `<h3 class="semibold">We work to
                    <span class='text-primary'>turn</span> <span class='text-secondary'>ideas</span>
                    into products</h3>`,
      },
    },
  },
  {
    id: 'benefits',
    type: 'fullwidth',
    data: {
      content: `<div class="benefits">
                  <h4 class="semibold">Benefits we offer <span class="text-primary">;)</span></h4>
                  <ul class="custom-list custom-list--icons custom-list--big">
                    <li><i class="icon icon-hour"></i> <span>Flexible schedule.</span></li>
                    <li><i class="icon icon-homeoffice"></i> <span>Home Office.</span></li>
                    <li><i class="icon icon-workshops"></i> <span>Trainings and workshops.</span></li>
                    <li><i class="icon icon-drinksnacks"></i> <span>Free snacks, fruits and drinks.</span></li>
                    <li><i class="icon icon-laptop"></i> <span>Remote week.</span></li>
                    <li><i class="icon icon-brain"></i> <span>Work on latest technologies.</span></li>
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
        content: `<h4 class="bold">Requirements</h4>`,
      },
      right: {
        content: `<ul class="custom-list custom-list--bullets custom-list--big">
                    <li>Advanced or received students from careers in the computer, systems or electronic field.</li>
                    <li>Intermediate / Advanced English</li>
                    <li>Knowledge of agile methodologies (desirable)</li>
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
                  <h3 class="bold">Thanks for <span class="text-primary">finish the test</span></h3>
                  <h4 class="hero__subtitle">We invite you to see more information</h4>
                  <button class="button button--primary">
                    <span>Learn more</span>
                  </button>
                </div>`,
    },
  },
];
