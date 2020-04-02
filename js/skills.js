$(document).ready(function() {
  var skillSet = [
    {
      name: 'Obvious',
      list: [
        {
          name: 'HTML'
        },
        {
          name: 'CSS'
        },
        {
          name: 'JavaScript'
        },
        {
          name: 'JQuery'
        },

        {
          name: 'Git'
        },
        {
          name: 'Sass'
        },
        {
          name: 'Less'
        },
        {
          name: 'BEM'
        }
      ]
    },
    {
      name: 'Less Obvious',
      list: [
        {
          name: 'RxJS'
        },
        {
          name: 'NgRx'
        },
        {
          name: 'Redux'
        },
        {
          name: 'Vuex'
        }
      ]
    },
    {
      name: 'UI Frameworks',
      list: [
        {
          name: 'React, okaaay it is a library...'
        },
        {
          name: 'Vue'
        },
        {
          name: 'Angular 2-latest'
        }
      ]
    },
    {
      name: 'CSS frameworks',
      list: [
        {
          name: 'Bootsrap'
        },
        {
          name: 'Reactstrap'
        },
        {
          name: 'Tailwind CSS'
        },
        {
          name: 'Materialize'
        },
        {
          name: 'Vuetify'
        },
        {
          name: 'Quasar'
        }
      ]
    },
    {
      name: 'Mobile frameworks',
      list: [
        {
          name: 'React Native'
        },
        {
          name: 'Native Script'
        },
        {
          name: 'Ionic'
        }
      ]
    },
    {
      name: 'Have experience with',
      list: [
        {
          name: 'Nest.js'
        },
        {
          name: 'Ruby on rails'
        }
      ]
    }
  ];

  var content = $('.page-content');

  skillSet.forEach(set => {
    let section = $(`<section/>`)
      .addClass('section')
      .appendTo(content);
    let name = $('<div/>')
      .addClass('name')
      .text(set.name)
      .appendTo($(section));

    let list = $('<div/>')
      .addClass('list')
      .appendTo(section);

    set.list.forEach(skill => {
      $('<div/>')
        .addClass('skill')
        .text(skill.name)
        .appendTo(list);
    });
  });
});
