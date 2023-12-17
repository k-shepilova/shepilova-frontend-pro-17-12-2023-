function getYearInfo(birthYear) {
  if (birthYear === null || birthYear === '' || birthYear === 0) {
    return 'Шкода, що ти не захотів(ла) ввести свій рік народження.';
  } else if (isNaN(birthYear)) {
    return 'Будь ласка введи рік народження цифрами.';
  }
  return `Твій рік народження: ${birthYear}`;
}

function getCityInfo(city) {
  const capitals = [
    {
      city: 'Київ',
      message: 'Ти живеш у столиці України.'
    },
    {
      city: 'Вашингтон',
      message: 'Ти живеш у столиці США.'
    },
    {
      city: 'Лондон',
      message: 'Ти живеш у столиці Великобританії.'
    },
  ];

  if (city === null || city === '') {
    return 'Шкода, що ти не захотів(ла) ввести своє місто проживання.'
  } else {
    for (let i = 0; i < capitals.length; i++) {
      if (city === capitals[i].city) {
        return capitals[i].message;
      }
    }
    return `Ти живеш у місті ${city}`;
  }
}

function getSportInfo(sport) {
  const sports = [
    {
      sport: 'теніс',
      message: 'Круто! Хочеш стати Сереною Вільямс?'
    },
    {
      sport: 'хокей',
      message: 'Круто! Хочеш стати Вейном Грецкі?'
    },
    {
      sport: 'баскетбол',
      message: 'Круто! Хочеш стати Майклом Джорданом?'
    },
  ];

  if (sport === null || sport === '') {
    return 'Шкода, що ти не захотів(ла) ввести свій улюблений вид спорту.'
  } else {
    for (let i = 0; i < sports.length; i++) {
      if (sport.toLowerCase() === sports[i].sport) {
        return sports[i].message;
      }
    }
    return 'Так тримати! Гарний вибір.';
  }
}

function showUserInfo() {
  const questions = {
    birthYear: +prompt('Який рік твого народження?'),
    city: prompt('У якому місті ти живеш?'),
    sport: prompt('Який твій улюблений вид спорту?')
  }

  const year = getYearInfo(questions.birthYear);
  const place = getCityInfo(questions.city);
  const sportsmen = getSportInfo(questions.sport);

  alert(`${year} \n${place} \n${sportsmen}`);
}

showUserInfo();
