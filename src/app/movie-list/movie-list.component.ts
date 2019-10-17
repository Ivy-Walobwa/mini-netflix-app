import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  template: `
  <div></div>
  <app-carousel-holder  [movies]='moviesArray'></app-carousel-holder>
  `,
  styles: [`
  div{
    height: 40px;
  }
  `]
})
export class MovieListComponent {
  moviesArray = [
      {
          objectId: 'n4mV28e42t',
          image: {
              __type: 'File',
              name: 'c6b7a11f-d1cb-427f-b784-4475f033fc48_1.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/c6b7a11f-d1cb-427f-b784-4475f033fc48_1.jpg'
          },
          createdAt: '2016-10-10T13:26:10.427Z',
          updatedAt: '2016-12-14T12:00:50.408Z',
          title: 'Dawn of the Planet of the Apes',
          releaseYear: '2014',
          genre: [
              'Action',
              'Drama',
              'Sci-Fi'
          ],
          rating: 8.3,
          description: `A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is
          wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes`
      },
      {
          objectId: 'kULDFy4qlt',
          title: 'X-Men: Days of Future Past',
          createdAt: '2016-10-10T13:42:01.686Z',
          updatedAt: '2016-12-14T12:02:24.981Z',
          genre: [
              'Action',
              'Sci-Fi',
              'Thriller'
          ],
          releaseYear: '2014',
          rating: 8,
          image: {
              __type: 'File',
              name: '652565bb-02ad-487f-929e-78308085ca1e_4.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/652565bb-02ad-487f-929e-78308085ca1e_4.jpg'
          },
          description: `The ultimate X-Men ensemble fights a war for the survival of the species across two time
           periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.`
      },
      {
          objectId: '4ZsUqwmNT1',
          title: 'Despicable Me 2',
          createdAt: '2016-10-10T13:53:34.666Z',
          updatedAt: '2016-12-14T12:10:55.693Z',
          releaseYear: '2013',
          genre: [
              'Animation',
              'Comedy',
              'Family'
          ],
          rating: 7.3,
          image: {
              __type: 'File',
              name: '43b8cf94-8074-4e72-b58f-de6a3d067464_11.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/43b8cf94-8074-4e72-b58f-de6a3d067464_11.jpg'
          },
          description: 'Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.'
      },
      {
          objectId: '9zqDewYByp',
          title: 'A Bug\'s Life',
          createdAt: '2016-10-10T13:55:37.972Z',
          updatedAt: '2016-12-14T12:11:38.383Z',
          releaseYear: '1998',
          genre: [
              'Animation',
              'Adventure',
              'Comedy'
          ],
          rating: 7.2,
          image: {
              __type: 'File',
              name: '92b4aed5-ef06-4065-af9a-1bb65e3d36d5_13.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/92b4aed5-ef06-4065-af9a-1bb65e3d36d5_13.jpg'
          },
          description: `On behalf of "oppressed bugs everywhere," an inventive ant named Flik hires a troupe of warrior bugs
          to defend his bustling colony from a horde of freeloading grasshoppers led by the evil-minded Hopper.`
      },
      {
          objectId: 'RgFKtXEMMq',
          title: 'District 9',
          createdAt: '2016-10-10T13:38:50.113Z',
          updatedAt: '2016-12-14T12:01:34.706Z',
          releaseYear: '2009',
          genre: [
              'Action',
              'Sci-Fi',
              'Thriller'
          ],
          image: {
              __type: 'File',
              name: '7a53a11c-9dae-48b4-ac36-38916bcf0096_2.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/7a53a11c-9dae-48b4-ac36-38916bcf0096_2.jpg'
          },
          rating: 8,
          description: `Aliens land in South Africa and have no way home. Years later after living in a slum and wearing out
          their welcome the "Non-Humans" are being moved to a new tent city overseen by Multi-National United (MNU). The movie follows
          an MNU employee tasked with leading the relocation and his relationship with one of the alien leaders.`
      },
      {
          objectId: 'qcfhtrSRCg',
          title: 'Rush',
          createdAt: '2016-10-10T13:50:59.878Z',
          updatedAt: '2016-12-14T12:09:51.249Z',
          rating: 8.3,
          genre: [
              'Animation',
              'Comedy',
              'Family'
          ],
          releaseYear: '2013',
          image: {
              __type: 'File',
              name: '43982238-a5d0-42ab-b12e-2459429bcdf6_9.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/43982238-a5d0-42ab-b12e-2459429bcdf6_9.jpg'
          },
          description: `A biographical drama centered on the rivalry between Formula 1 drivers James Hunt and Niki Lauda
           during the 1976 Formula One motor-racing season.`
      },
      {
          objectId: 'suQBXtfa7c',
          title: 'Life of Brian',
          createdAt: '2016-10-10T13:56:39.547Z',
          updatedAt: '2016-12-14T12:11:58.920Z',
          releaseYear: '1972',
          genre: [
              'Comedy'
          ],
          rating: 7.2,
          image: {
              __type: 'File',
              name: '4ba2afbe-61b4-4780-a3d8-9487524cb5c1_14.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/4ba2afbe-61b4-4780-a3d8-9487524cb5c1_14.jpg'
          },
          description: `A brilliant parody from the British comedy group Monty Python about the history of (not Jesus but the boy born
            right next door to The Manger, Brian). A Terry Jones directed film from 1979 that has since gained cult status.`
      },
      {
          objectId: 'Il8PQYM3zG',
          title: 'Transformers: Age of Extinction',
          createdAt: '2016-10-10T13:40:10.432Z',
          updatedAt: '2016-12-14T12:01:59.255Z',
          rating: 6.3,
          genre: [
              'Action',
              'Adventure',
              'Sci-Fi'
          ],
          image: {
              __type: 'File',
              name: 'b2610bfc-c8b7-48e0-8577-15ed47952a26_3.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/b2610bfc-c8b7-48e0-8577-15ed47952a26_3.jpg'
          },
          releaseYear: '2014',
          description: `As humanity picks up the pieces, following the conclusion of "Transformers: Dark of the Moon,"
           Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman
            and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can
             control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.`
      },
      {
          objectId: 'HCnDLxqVcF',
          title: 'The Machinist',
          createdAt: '2016-10-10T13:43:16.122Z',
          updatedAt: '2016-12-14T12:02:51.299Z',
          genre: [
              'Drama',
              'Thriller'
          ],
          releaseYear: '2004',
          rating: 6.8,
          image: {
              __type: 'File',
              name: 'db4e5018-a345-4535-a99a-b77689f83d0a_5.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/db4e5018-a345-4535-a99a-b77689f83d0a_5.jpg'
          },
          description: `The Machinist is the story of Trevor Reznik, a lathe-operator who is dying of insomnia. In a
          machine shop, occupational hazards are bad enough under normal circumstances; yet for Trevor the risks are
          compounded by fatigue. Trevor has lost the ability to sleep. This is no ordinary insomnia...`
      },
      {
          objectId: '2CHpf9cRjq',
          title: 'The Last Samurai',
          createdAt: '2016-10-10T13:44:14.084Z',
          updatedAt: '2016-12-14T12:08:35.810Z',
          releaseYear: '2003',
          genre: [
              'Action',
              'Drama',
              'History'
          ],
          rating: 7.7,
          image: {
              __type: 'File',
              name: '3552b586-2580-4d95-b244-103d520d1cda_6.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/3552b586-2580-4d95-b244-103d520d1cda_6.jpg'
          },
          description: `Nathan Algren is an American hired to instruct the Japanese army in the ways of modern
           warfare, which finds him learning to respect the samurai and the honorable principles that rule them.
            Pressed to destroy the samurai\'s way of life in the name of modernization and open trade, Algren decides
             to become an ultimate warrior himself and to fight for their right to exist.`
      },
      {
          objectId: 'cUoHgJt6Dr',
          title: 'The Amazing Spider-Man 2',
          createdAt: '2016-10-10T13:45:15.724Z',
          updatedAt: '2016-12-14T12:09:05.747Z',
          releaseYear: '2014',
          genre: [
              'Action',
              'Adventure',
              'Fantasy'
          ],
          rating: 7.7,
          image: {
              __type: 'File',
              name: 'fc92ca2c-bb7d-4020-b92e-f5fa0915181b_7.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/fc92ca2c-bb7d-4020-b92e-f5fa0915181b_7.jpg'
          },
          description: ` Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending
          time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has
          not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a
          promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend,
           Harry Osborn, returns, and Peter uncovers new clues about his past.`
      },
      {
          objectId: 'KzAt7A1qkn',
          title: 'Tangled',
          createdAt: '2016-10-10T13:46:22.991Z',
          updatedAt: '2016-12-14T12:09:31.008Z',
          releaseYear: '2010',
          genre: [
              'Action',
              'Drama',
              'Sci-Fi'
          ],
          rating: 7.7,
          image: {
              __type: 'File',
              name: '7e5d4fec-2f54-4edf-b815-3d58ce2ca188_8.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/7e5d4fec-2f54-4edf-b815-3d58ce2ca188_8.jpg'
          },
          description: `When the kingdom\'s most wanted-and most charming-bandit Flynn Rider hides out in a
          mysterious tower, he\'s taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet
          of magical, golden hair. Flynn\'s curious captor, who\'s looking for her ticket out of the tower where she\'s
           been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed
            escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.\n`
      },
      {
          objectId: 'mldzfGkpek',
          title: 'Drag Me to Hell',
          createdAt: '2016-10-10T13:52:16.741Z',
          updatedAt: '2016-12-14T12:10:14.189Z',
          releaseYear: '2009',
          genre: [
              'Horror',
              'Thriller'
          ],
          rating: 6.7,
          image: {
              __type: 'File',
              name: 'eee9d012-a5c1-42e2-8f38-0efc1729d89b_10.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/eee9d012-a5c1-42e2-8f38-0efc1729d89b_10.jpg'
          },
          description: `After denying a woman the extension she needs to keep her home, loan officer Christine
           Brown sees her once-promising life take a startling turn for the worse. Christine is convinced she\'s
           been cursed by a Gypsy, but her boyfriend is skeptical. Her only hope seems to lie in a psychic who
            claims he can help her lift the curse and keep her soul from being dragged straight to hell.`
      },
      {
          objectId: 'tqC5BJEMTi',
          title: 'Kill Bill: Vol. 1',
          createdAt: '2016-10-10T13:54:35.880Z',
          updatedAt: '2016-12-14T13:07:03.064Z',
          releaseYear: '2003',
          genre: [
              'Action',
              'Crime'
          ],
          rating: 7.5,
          image: {
              __type: 'File',
              name: '9e75bdc4-c4d5-4696-92e9-042c75844ae8_12.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/9e75bdc4-c4d5-4696-92e9-042c75844ae8_12.jpg'
          },
          description: `An assassin is shot at the altar by her ruthless employer, Bill and other members
           of their assassination circle – but \'The Bride\' lives to plot her vengeance. Setting out for
           some payback, she makes a death list and hunts down those who wronged her, saving Bill for last.`
      },
      {
          objectId: 'EoGqzhNu3F',
          title: 'How to Train Your Dragon',
          createdAt: '2016-10-10T13:57:52.439Z',
          updatedAt: '2016-12-14T12:12:25.692Z',
          genre: [
              'Animation',
              'Adventure',
              'Family'
          ],
          rating: 8.2,
          image: {
              __type: 'File',
              name: '2e92274a-ea2b-4104-b700-3a01cd7c99ec_15.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/2e92274a-ea2b-4104-b700-3a01cd7c99ec_15.jpg'
          },
          releaseYear: '2010',
          description: `As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock
           III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing
            a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the
             beast – which he names Toothless – much to the chagrin of his warrior father`
      }
  ];
}
