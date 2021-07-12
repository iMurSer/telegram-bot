const startButtons = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Естественно!',
          callback_data: 'go',
        },
        {
          text: 'Да ну тебя!',
          callback_data: 'nope',
        },
      ],
    ],
  },
};
const restartGoBtn = {
  reply_markup: {
    inline_keyboard: [[{ text: 'Ну ладно, уговорил!', callback_data: 'go' }]],
  },
};
const moodBtns = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: 'Прекрасное!', callback_data: 'goodMood' },
        { text: 'Могло бы быть лучше', callback_data: 'badMood' },
      ],
    ],
  },
};
const characterBtns = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: 'Красота', callback_data: 'beauty' },
        { text: 'Ум', callback_data: 'mind' },
      ],
      [
        { text: 'Жизненная энергия', callback_data: 'energy' },
        { text: 'Сексуальность', callback_data: 'sex' },
      ],
      [
        { text: 'Забота', callback_data: 'care' },
        { text: 'Домашность', callback_data: 'home' },
      ],
    ],
  },
};
const badMoodContinue = {
  reply_markup: {
    inline_keyboard: [
      [{ text: 'Мне стало лучше!', callback_data: 'goodMood' }],
    ],
  },
};
const charactersMore = {
  reply_markup: {
    inline_keyboard: [
      [{ text: 'А что еще? ☺️', callback_data: 'moreCharacters' }],
    ],
  },
};
module.exports = {
  startButtons,
  restartGoBtn,
  moodBtns,
  characterBtns,
  badMoodContinue,
  charactersMore,
};
