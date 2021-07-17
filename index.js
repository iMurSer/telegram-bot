require('dotenv').config();
const { Telegraf } = require('telegraf');

const {
  startButtons,
  restartGoBtn,
  moodBtns,
  characterBtns,
  badMoodContinue,
  charactersMore,
  afterHelpBtn,
} = require('./inlineButtons');

const bot = new Telegraf(process.env.BOT_TOKEN);
const clickCharacter = {
  beauty: false,
  mind: false,
  energy: false,
  sex: false,
  care: false,
  home: false,
};

let clickCharactersCount = 0;

bot.telegram.setMyCommands([
  { command: '/start', description: 'Запустить игру сначала' },
  { command: '/help', description: 'Серёжа, помоги!' },
  { command: '/kiss', description: 'Получить поцелуйчик!' },
  { command: '/joke', description: 'Приколдес' },
]);
bot.command('kiss', async (ctx) => {
  ctx.deleteMessage();
  await ctx.replyWithSticker(
    'https://tlgrm.ru/_/stickers/f0a/792/f0a792ab-cdaf-3891-8535-1fd3b582576e/6.webp'
  );
});
bot.command('joke', async (ctx) => {
  ctx.deleteMessage();
  await ctx.replyWithSticker(
    'https://tlgrm.ru/_/stickers/cbe/e09/cbee092b-2911-4290-b015-f8eb4f6c7ec4/192/20.webp'
  );
});

bot.start(async (ctx) => {
  for (var prop in clickCharacter) {
    clickCharacter[prop] = false;
  }
  clickCharactersCount = 0;
  ctx.deleteMessage();
  await ctx.replyWithSticker(
    'https://tlgrm.ru/_/stickers/1f9/b87/1f9b8736-fed1-3322-a520-441a873962ac/1.webp'
  );
  const message =
    'Ну привет, принцесса 👸! Раз ты в свой день рождения далеко, решил приподнять тебе настроение с утра вот так! Ты ведь согласна? А если хочешь получить поцелуй, то выбери в Меню нужный пункт или введи /kiss';

  bot.telegram.sendMessage(ctx.chat.id, message, startButtons);
});
bot.help((ctx) => {
  ctx.deleteMessage();
  const message =
    'Не переживай, всё отлично! Тебе нужно будет лишь нажимать на кнопки и получать заряд милоты. И не стесняйся пройти по второму разу, но только с другими вариантами ответов!😉';
  bot.telegram.sendMessage(ctx.chat.id, message, afterHelpBtn);
});
bot.action('go', (ctx) => {
  const message = 'Отлично! Тогда скажи, как твоё настроение?';
  bot.telegram.sendMessage(ctx.chat.id, message, moodBtns);
});

bot.action('nope', async (ctx) => {
  await ctx.replyWithPhoto('https://disk.yandex.ru/i/0YS5UKezXHpmtg');
  const message = 'А я так старался! Тебе понравится, обещаю!';
  bot.telegram.sendMessage(ctx.chat.id, message, restartGoBtn);
});

bot.action('goodMood', async (ctx) => {
  ctx.reply(
    'Я очень рад этому! Перед тем как начнём, посмотри какие мы крутые!'
  );
  await ctx.replyWithPhoto('https://disk.yandex.ru/i/UX1RI46U29HvXw');

  const message =
    'А сейчас я хочу рассказать о том, какая ты у меня великолепная! Я выбрал несколько из множества твоих качеств, которые я в тебе очень люблю! Выбирай по очереди!';
  await bot.telegram.sendMessage(ctx.chat.id, message, characterBtns);
});
bot.action('badMood', async (ctx) => {
  const message =
    'Солнышко моё, принцессам негоже грустить! Давай прогоним тоску и грусть, чтобы они не мешали встречать день рождения! Посмотри, какие мы смешные!';
  await ctx.replyWithPhoto('https://disk.yandex.ru/i/DIATrYO-c-taeQ');
  await bot.telegram.sendMessage(ctx.chat.id, message, badMoodContinue);
});

bot.action('beauty', async (ctx) => {
  const message = `Твою чарующую красоту не сможет описать ни один поэт и бард, ибо истинная красота требует тишины для любования ею!
  Твои глаза цвета лазурного моря 🌊 завораживают и не отпускают. Глядя в этот манящий омут, можно ненароком в нём утонуть, но я этого не боюсь, а, наоборат, желаю!
  А от твоей улыбки на душе становится легко и тепло, будто в летний солнечный день ☀️, и хочется делать так, чтобы ты всегда улыбалась!
  `;
  await bot.telegram.sendMessage(ctx.chat.id, message, charactersMore);
  if (!clickCharacter.beauty) {
    clickCharacter.beauty = true;
    clickCharactersCount++;
  }
});

bot.action('mind', async (ctx) => {
  const message = `Ты очень умная и мудрая девушка! Есть о чём поговорить, есть какие книги обсудить! Вечно побеждаешь меня в спорах 😁.
  Ты уважаешь и разделяешь чужое мнение, даже если оно не сходится с твоим! Да ты у меня итальянский универ закончила, всем теперь хвастаюсь, какая у меня крутая принцесса! 😎
  `;
  await bot.telegram.sendMessage(ctx.chat.id, message, charactersMore);
  if (!clickCharacter.mind) {
    clickCharacter.mind = true;
    clickCharactersCount++;
  }
});

bot.action('energy', async (ctx) => {
  const message = `Ты невероятно энергичная, задорная, смешная, озорная, подвижная девчушка, с которой нельзя заскучать! 
Твои приставания до моей жопы в общественных местах, предложения заняться сексом везде, где только можно, легкий подъём на любую движуху, нахождение общего языка в компании - просто пушка, обожаю тебя, крутышка моя! 🍍
Отдельного внимания и уважения заслуживает твоё желание что-либо менять в своей жизни, а я с огромным удовольствием поддержу и помогу тебе в этом!`;
  await bot.telegram.sendMessage(ctx.chat.id, message, charactersMore);
  if (!clickCharacter.energy) {
    clickCharacter.energy = true;
    clickCharactersCount++;
  }
});
bot.action('sex', async (ctx) => {
  const message = `Твоя сексуальность за гранью реального! Порой, ты так страстно на меня смотришь, что меня сшибает сексуальной волной! 
Когда ты танцуешь 💃, мне хочется, чтобы это не кончалось и твоё горячее тело соприкасалось с моим и мы кружили в страстном танце. Твою нежную кожу, пахнущую весной, хочется целовать начиная с губ и шеи, плавно переходя к груди и медленно спускаться всё ниже и ниже...😏
Нежность губ твоих сравнима с сахарной ватой, при соприкосновении с которой, она начинает таять!
`;
  await bot.telegram.sendMessage(ctx.chat.id, message, charactersMore);
  if (!clickCharacter.sex) {
    clickCharacter.sex = true;
    clickCharactersCount++;
  }
});
bot.action('care', async (ctx) => {
  const message = `Спасибо тебе, что ты готова меня выслушать и поддержать! Твоя забота очень ценна для меня, даже когда ты сонная пытаешься проснуться со мной к завтраку, но сон побеждает, я гляжу на тебя сонную и на душе становится очень хорошо!
Когда даёшь мне на обед свою вкусную еду, чтобы я не умер с голоду на работе 🙈!
`;
  await bot.telegram.sendMessage(ctx.chat.id, message, charactersMore);
  if (!clickCharacter.care) {
    clickCharacter.care = true;
    clickCharactersCount++;
  }
});
bot.action('home', async (ctx) => {
  const message = `Под этим словом я подразумеваю то, что с тобой очень уютно проводить время дома! Просто валяясь и смотря телевизор, или даже залипая в тик-ток, смотря всякую ересь!
Вместе просыпаться в субботу и бежать смотреть квартирный вопрос, а в воскресенье дачный ответ! Просто сидеть на кухне и говорить о всякой всячине, мечтать и делиться планами!
Стоять на балконе обнявшись, слушать Матранга и курить сигарету. Из этих мелких, почти незаметных деталей и складывается домашность, которую я очень ценю в тебе!
`;
  await bot.telegram.sendMessage(ctx.chat.id, message, charactersMore);
  if (!clickCharacter.home) {
    clickCharacter.home = true;
    clickCharactersCount++;
  }
});
bot.action('moreCharacters', async (ctx) => {
  if (clickCharactersCount === 6) {
    await ctx.replyWithSticker(
      'https://tlgrm.ru/_/stickers/b26/a7c/b26a7c51-e997-3cfc-8a53-1b232ff8b036/8.webp'
    );
    return ctx.reply(
      'На этом мой небольшой мини-интерактив для тебя закончен! Надеюсь, тебе понравилось! Напиши, вот этому человечку @seregmaksim, что ты его прошла!'
    );
  } else {
    bot.telegram.sendMessage(ctx.chat.id, 'А вот это! ❤️', characterBtns);
  }
});
bot.launch();
