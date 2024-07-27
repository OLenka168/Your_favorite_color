const hide = document.querySelector("#hide");
const heading = document.querySelector("#heading");
const par = document.querySelector("#par");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const color = document.querySelector(".color");

hide.addEventListener("click", function resultHide() {
  location.reload();
});

document.querySelector("#red").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('red.jpg')";
  container.style.display = "none";
  header.style.display = "none";
  color.style.display = "none";
  hide.style.display = "block";
  hide.style.backgroundColor = "#53BF9D";
  heading.style.color = "#53BF9D";
  heading.textContent = "TEST RESULTS:";
  par.style.color = "white";
  par.textContent = `It is the color of health, energy and passion. It is loved by people who are open, sociable, full of interest in life, thirsty for adventure, brave and determined. As a rule, these are passionate natures, and this manifests itself in all areas of life - in love, in friendship, and in work. Lovers of red cannot stand monotony. As a rule, these people cannot live without extreme sports - car racing, active sports, hunting, horse racing, hiking. If a calm person likes red, this indicates his need for warmth, strength and other qualities that this color can provide. But among lovers of red, there are quite aggressive, hot-tempered, rude, domineering people, inclined to make hasty conclusions about people, unable to notice and admit their shortcomings.`;
});

document.querySelector("#yellow").addEventListener("click", () => {
  container.style.display = "none";
  document.body.style.backgroundImage = "url('yellow.jpg')";
  color.style.display = "none";
  header.style.display = "none";
  hide.style.display = "block";
  hide.style.backgroundColor = "#D4D925";
  heading.textContent = "TEST RESULTS:";
  par.style.color = "#F77E21";
  heading.style.color = "#F77E21";
  par.textContent = `This is the color of optimism, calmness and freedom. It is chosen by people who are sociable, strong-willed, and ambitious. They know how to direct their energies in the right direction, communicate with people at ease, and easily adapt to everything new and unusual. Yellow lovers love adventure, have a rich imagination, and are always in search of knowledge. They get pleasure when they feel that others like them, but they deservedly enjoy the recognition of friends and colleagues, since they know how to work “until they sweat.” These people are creative, optimistic, generous, open, and often have a business streak. They can achieve success in science, art, and business. True, yellow lovers tend to avoid responsibility, since they love freedom in both thoughts and actions.`;
});

document.querySelector("#green").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('green.jpg')";
  container.style.display = "none";
  color.style.display = "none";
  header.style.display = "none";
  hide.style.display = "block";
  hide.style.backgroundColor = "#F9D923";
  heading.textContent = "TEST RESULTS:";
  par.style.color = "#064635";
  heading.style.color = "#D4D925";
  par.textContent = `This is the color of renewal of nature, spring and harmony. It is preferred by people who are sincere, calm, open, sociable, and, as a rule, socially active, although there are rare modest people among them, kind and patient, who love solitude. Green lovers, as a rule, are afraid of other people's influence and try by any means to maintain peace and tranquility around them. Lovers of dark green tones are distinguished by stubbornness, secrecy, strong will, and a developed sense of beauty. They evoke a feeling of security in close people: those around them are like behind a stone wall. True, lovers of dark green often lack real friends: due to rigidity in their views and excessive adherence to principles, it is difficult for them to put themselves in the place of other people. Lovers of light green tones are soft, friendly, gentle, open and sociable. They are smart, charming, punctual, value cooperation, can be good diplomats, and have a developed sense of justice. Their only drawback is their inability to refuse others.`;
});

document.querySelector("#darkBlue").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('darkblue.jpg')";
  container.style.display = "none";
  color.style.display = "none";
  header.style.display = "none";
  hide.style.display = "block";
  hide.style.backgroundColor = "#FEF5AC";
  heading.style.color = "#5F6F94";
  par.style.color = "#97D2EC";
  heading.textContent = "TEST RESULTS:";
  par.textContent = `It is the color of peace, caution and conservatism. It calms, radiates care and compassion, so the need for this color increases with overwork and illness. Blue usually appeals to people who are modest, conscientious, patient, persistent, reliable and organized. They are loved and respected for their inherent wisdom and strong character. As a rule, these people get tired easily and quickly, so they need frequent rest. Among blue lovers there are also people who are prone to melancholy, distrustful, overly cautious, and often tormented by doubts, for whom it is extremely important to feel the goodwill of others.`;
});

document.querySelector("#purple").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('purple.jpg')";
  container.style.display = "none";
  color.style.display = "none";
  header.style.display = "none";
  hide.style.display = "block";
  hide.style.backgroundColor = "#FEF5AC";
  heading.style.color = "#FFCC8F";
  par.style.color = "#97D2EC";
  heading.textContent = "TEST RESULTS:";
  par.textContent = `It is the color of fantasy, mysticism and spirituality. It is liked by bright, extraordinary personalities who always strive to be different from others. They are drawn to everything inexplicable and mysterious. These are, as a rule, temperamental, artistic, witty, demanding, and sometimes picky natures. True, among them there are also sarcastic, cold, arrogant personalities. People who like the purple love to dream, they are emotional, freedom-loving, independent and harmoniously developed, they have a subtle mind, but at the same time they may have poor health. The spiritual side of life is very important for them.`;
});

document.querySelector("#pink").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('pink.jpg')";
  container.style.display = "none";
  color.style.display = "none";
  header.style.display = "none";
  hide.style.display = "block";
  hide.style.backgroundColor = "#FEF5AC";
  heading.style.color = "#FFFFDE";
  par.style.color = "#F4E06D";
  heading.textContent = "TEST RESULTS:";
  par.textContent = `This color personifies the most delicate and calm features of red. People who prefer it strive for an orderly life, love homeliness and comfort. Lovers of pink feel the need for protection, they need the feeling that they are loved and protected, so sometimes they try to seem more fragile than they really are. Usually these are gentle, charming, soft natures, they can get agitated over trifles, and tend to make promises that they are unable to keep. Many among them are dreamers and daydreamers, living in a world of dreams and unrealistic hopes, thirsting for sublime love, which only happens in novels and fairy tales. True, immersion in their fabulous inner world helps them more easily endure the blows of fate and calmly react to quarrels, scandals and problems.`;
});

document.querySelector("#white").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('white.jpg')";
  container.style.display = "none";
  color.style.display = "none";
  header.style.display = "none";
  hide.style.display = "block";
  hide.style.backgroundColor = "#FEF5AC";
  heading.style.color = "#062C30";
  par.style.color = "#041562";
  heading.textContent = "TEST RESULTS:";
  par.textContent = `White is a symbol of purity, virtue and freedom. Everyone who is in love with this color is distinguished by self-confidence, a desire for self-realization, increased accuracy and insight. They are distinguished by ideal taste, fundamental honesty and responsiveness. Most likely, for them to lie is to go against themselves. They readily respond to requests for help and support. At the same time, they strive for success and love public recognition. They generate new ideas all the time. They need constant admiration. Their shortcomings are excessive criticality and fastidiousness.`;
});

document.querySelector("#black").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('black.jpg')";
  container.style.display = "none";
  color.style.display = "none";
  header.style.display = "none";
  hide.style.display = "block";
  hide.style.backgroundColor = "#8758FF";
  heading.style.color = "#8758FF";
  par.style.color = "#F2F2F2";
  heading.textContent = "TEST RESULTS:";
  par.textContent = `This color symbolizes uncertainty, denial, rebellion. People who prefer it often rebel against fate, they are hot-tempered, passionate, always ready to go ahead. Very often, lovers of black perceive life in gloomy colors; they are prone to depression, unhappy, and unsure of themselves. They may suffer because they overestimate their strength. Unable to cope with their emotions, black lovers become hostages of their own feelings; they can either love with all their souls or hate mortally. Black color in clothes is sometimes chosen by people who love to impress and want to add a little mystery to their image.`;
});

document.querySelector("#grey").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('grey.jpg')";
  container.style.display = "none";
  color.style.display = "none";
  header.style.display = "none";
  hide.style.display = "block";
  hide.style.backgroundColor = "#6D8299";
  heading.style.color = "#6D8299";
  par.style.color = "#316B83";
  heading.textContent = "TEST RESULTS:";
  par.textContent = `This is the color of caution and compromise. People who prefer it often have business qualities and can work very hard and persistently, even sometimes for free. They do not like noisy companies and can be slightly detached from life and closed. Lovers of gray strive for solitude and peace, prefer a quiet life, easily endure life's troubles, and are very fond of order, not only in things, but also in thoughts. Behind the apparent calm and coldness, a rich inner world is often hidden: lovers of dark gray can be very timid and impressionable. They are also truly creative people; they always have a sea of ​​interesting ideas in their heads.`;
});

document.querySelector("#brown").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('brown.jpg')";
  container.style.display = "none";
  color.style.display = "none";
  header.style.display = "none";
  hide.style.display = "block";
  hide.style.backgroundColor = "#FFEBC1";
  heading.style.color = "#FFEBC1";
  par.style.color = "#D7A86E";
  heading.textContent = "TEST RESULTS:";
  par.textContent = `This is the color of health and physical strength. People who prefer it are distinguished by conservatism, independence, firmness of conviction, endurance and patience. They are usually taciturn, reliable, good-natured, but they can also be tactless, very stubborn, and inflexible. As a rule, lovers of brown shades stand firmly on their feet and achieve their goals persistently and systematically. These are stern, balanced, persistent people who value silence, solitude and peace. They always strive for knowledge, strive for power with all their might, think through their actions in advance, and treat things very carefully.`;
});

document.querySelector("#orange").addEventListener("click", () => {
  container.style.display = "none";
  document.body.style.backgroundImage = "url('orange.jpg')";
  header.style.display = "none";
  color.style.display = "none";
  hide.style.backgroundColor = "#CD104D";
  hide.style.display = "block";
  par.style.color = "#9C2C77";
  heading.style.color = "#CD104D";
  heading.textContent = "TEST RESULTS:";
  par.textContent = `The color of friendliness, which is preferred by active, impulsive people. Optimists in life, accept all manifestations of life as a necessity. They are not inclined to worry about trifles and quickly fall into negative psychological states. They are very sociable, and with their presence they are able to cheer up other people. They know how to direct their energies in the right direction, communicate with people at ease, and easily adapt to everything new and unusual. Orange lovers love adventure, have a rich imagination, and are always in search of knowledge. They get pleasure when they feel that others like them, but they deservedly enjoy the recognition of friends and colleagues, since they know how to work “until they sweat.” These people are creative, optimistic, generous, open, and often have a business streak. They can achieve success in science, art, and business. True, orange lovers tend to avoid responsibility, as they love freedom in both thoughts and actions.`;
});

document.querySelector("#blue").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('blue.jpg')";
  container.style.display = "none";
  color.style.display = "none";
  header.style.display = "none";
  hide.style.display = "block";
  hide.style.backgroundColor = "#DFF6FF";
  heading.style.color = "#DFF6FF";
  par.style.color = "#06283D";
  heading.textContent = "TEST RESULTS:";
  par.textContent = `This is the color of devotion and tranquility. It is usually liked by vulnerable and sensitive people who strive for stability in relationships, have a hard time with separation, and do not like conflicts. Light blue color represents femininity, motherhood, and the strength of family relationships. People who prefer it are dreamy, romantic, and travel-loving. They are especially drawn to water. Blue lovers are friendly, sociable, and always have a lot of friends. As a rule, these people are very close to their mothers and love and respect them endlessly. And in relationships with the opposite sex, they put the emotional and intellectual side of life first.`;
});
