let human1 = new Human();
let human2 = new Human();
let apple1 = new Apple();

human1.setName('Adam');
human1.getName();
human1.setGender(false);
human1.isMale();
human1.setWeight(70);
human1.getWeight();

human2.setName('Eva');
human2.getName();
human1.setGender(true);
human2.isMale();
human2.setWeight(50);
human2.getWeight();

human1.checkApple(apple1);
human2.checkApple(apple1);
human1.eat();
human2.eat();
