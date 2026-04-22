const questions = [
  {
    axis: "能量来源",
    text: "周末突然空出一天，你更想怎么安排？",
    options: [
      { text: "约朋友出门，越热闹越容易回血", scores: { E: 2 } },
      { text: "找个安静角落，慢慢把电量充回来", scores: { I: 2 } },
      { text: "先看心情，也许临时参加有趣活动", scores: { P: 1, E: 1 } },
      { text: "把积压的小事清掉，晚上轻松一点", scores: { J: 1, I: 1 } },
    ],
  },
  {
    axis: "观察方式",
    text: "进入一个陌生城市时，你最先注意到什么？",
    options: [
      { text: "街道细节、交通节奏和好吃的店", scores: { S: 2 } },
      { text: "这个地方的气质、故事和隐藏可能", scores: { N: 2 } },
      { text: "哪里能最快融入当地人的日常", scores: { E: 1, S: 1 } },
      { text: "哪些路线能连成一套探索计划", scores: { J: 1, N: 1 } },
    ],
  },
  {
    axis: "决策风格",
    text: "朋友来找你商量难题，你通常会先做什么？",
    options: [
      { text: "拆清楚问题，找出最有效的解法", scores: { T: 2 } },
      { text: "先接住情绪，再一起想下一步", scores: { F: 2 } },
      { text: "问几个关键问题，确认真正卡点", scores: { T: 1, I: 1 } },
      { text: "给对方一点信心，再推动行动", scores: { F: 1, E: 1 } },
    ],
  },
  {
    axis: "行动节奏",
    text: "面对一个新项目，你更自然的状态是？",
    options: [
      { text: "先定目标、拆步骤、排时间", scores: { J: 2 } },
      { text: "先试起来，边做边调整方向", scores: { P: 2 } },
      { text: "找资料和范例，心里有底再启动", scores: { S: 1, J: 1 } },
      { text: "先想清楚它能变成什么样", scores: { N: 1, P: 1 } },
    ],
  },
  {
    axis: "社交姿态",
    text: "在多人讨论里，你最像哪种角色？",
    options: [
      { text: "主动抛话题，让大家都参与进来", scores: { E: 2, F: 1 } },
      { text: "安静听完，等想法成熟再发言", scores: { I: 2, T: 1 } },
      { text: "快速抓重点，推动大家别跑偏", scores: { J: 1, T: 1 } },
      { text: "丢出新角度，让讨论变得有趣", scores: { P: 1, N: 1 } },
    ],
  },
  {
    axis: "信息偏好",
    text: "挑一款游戏或应用时，你更看重？",
    options: [
      { text: "手感、稳定性和真实体验反馈", scores: { S: 2 } },
      { text: "世界观、创意和长期想象空间", scores: { N: 2 } },
      { text: "有没有朋友一起玩或交流", scores: { E: 1, F: 1 } },
      { text: "系统深度，能不能研究出套路", scores: { I: 1, T: 1 } },
    ],
  },
  {
    axis: "压力反应",
    text: "事情突然失控时，你第一反应更接近？",
    options: [
      { text: "冷静排序，先处理最危险的部分", scores: { T: 2, J: 1 } },
      { text: "关注人有没有被影响，先稳住气氛", scores: { F: 2, E: 1 } },
      { text: "退一步观察，找到没人看到的出口", scores: { I: 1, N: 1 } },
      { text: "马上试一个可行办法，现场修正", scores: { P: 2 } },
    ],
  },
  {
    axis: "生活偏好",
    text: "你的房间或桌面更可能是什么状态？",
    options: [
      { text: "常用物品有固定位置，找东西很快", scores: { J: 2, S: 1 } },
      { text: "看似随意，但我知道每样东西在哪", scores: { P: 2 } },
      { text: "会摆一些能代表心情的小物件", scores: { F: 1, S: 1 } },
      { text: "堆着灵感、草稿和未完成的想法", scores: { N: 1, P: 1 } },
    ],
  },
  {
    axis: "关系模式",
    text: "一段稳定关系里，你最珍惜什么？",
    options: [
      { text: "彼此可靠，说到做到", scores: { J: 1, S: 1 } },
      { text: "能理解我的感受，不用解释太多", scores: { F: 2 } },
      { text: "思想同步，可以聊很深的问题", scores: { N: 1, I: 1 } },
      { text: "一起行动、一起玩、一起冒险", scores: { E: 1, P: 1 } },
    ],
  },
  {
    axis: "竞争方式",
    text: "如果参加宝可梦对战，你会偏向？",
    options: [
      { text: "研究队伍配置，靠判断压制对手", scores: { T: 2, J: 1 } },
      { text: "灵活换招，抓住现场机会翻盘", scores: { P: 2 } },
      { text: "相信伙伴配合，打出稳定节奏", scores: { F: 1, S: 1 } },
      { text: "用出人意料的套路制造惊喜", scores: { N: 2 } },
    ],
  },
  {
    axis: "学习方式",
    text: "学一项新技能时，你通常？",
    options: [
      { text: "看教程、做笔记、按阶段练习", scores: { J: 2, S: 1 } },
      { text: "直接上手，失败几次就懂了", scores: { P: 2, S: 1 } },
      { text: "先弄懂原理，再建立自己的方法", scores: { T: 1, N: 1 } },
      { text: "找人一起学，互相反馈更有动力", scores: { E: 1, F: 1 } },
    ],
  },
  {
    axis: "表达习惯",
    text: "别人评价你说话方式，最可能是？",
    options: [
      { text: "直接、清楚、重点明确", scores: { T: 2 } },
      { text: "温和、照顾感受、有安抚力", scores: { F: 2 } },
      { text: "跳跃、有画面感、经常联想", scores: { N: 1, P: 1 } },
      { text: "谨慎、少废话、信息密度高", scores: { I: 1, J: 1 } },
    ],
  },
  {
    axis: "冒险倾向",
    text: "遇到一条没走过的小路，你会？",
    options: [
      { text: "确认安全和方向，再决定要不要走", scores: { J: 1, S: 1 } },
      { text: "很好奇，走一段看看会通向哪里", scores: { P: 1, N: 1 } },
      { text: "拉上同伴一起探索更有意思", scores: { E: 1, F: 1 } },
      { text: "独自走走，享受不被打扰的发现", scores: { I: 1, N: 1 } },
    ],
  },
  {
    axis: "价值排序",
    text: "必须做取舍时，你更常问自己？",
    options: [
      { text: "哪一个选择最合理、代价最低？", scores: { T: 2 } },
      { text: "哪一个选择对重要的人更好？", scores: { F: 2 } },
      { text: "哪一个选择更符合长期目标？", scores: { J: 1, N: 1 } },
      { text: "哪一个选择还能保留更多可能？", scores: { P: 1, N: 1 } },
    ],
  },
  {
    axis: "自我画像",
    text: "下面哪句话最像你？",
    options: [
      { text: "我喜欢把混乱的事情整理成秩序", scores: { J: 2, T: 1 } },
      { text: "我能感知气氛，也愿意照顾别人", scores: { F: 2, E: 1 } },
      { text: "我常被新点子吸引，讨厌太快定型", scores: { N: 1, P: 2 } },
      { text: "我需要独处，才能听清真正的想法", scores: { I: 2 } },
    ],
  },
];

const pokemonResults = {
  INTJ: {
    name: "超梦",
    id: 150,
    type: "超能力",
    traits: ["战略家", "独立", "高压冷静"],
    description:
      "你像超梦一样擅长站在高处看全局。你不太依赖外界认可，更在意判断是否准确、计划是否能落地。别人眼里的距离感，常常只是你在保护专注力。",
  },
  INTP: {
    name: "胡地",
    id: 65,
    type: "超能力",
    traits: ["分析", "好奇", "逻辑优先"],
    description:
      "你像胡地一样用思考打开世界。你喜欢拆解系统、追问原理，也愿意为了一个有趣问题钻得很深。你的强项是看见规则背后的规则。",
  },
  ENTJ: {
    name: "喷火龙",
    id: 6,
    type: "火 / 飞行",
    traits: ["领导", "果断", "目标感"],
    description:
      "你像喷火龙一样带着清晰的方向感。遇到挑战时，你倾向于迅速判断局势、分配资源、推动结果。你的气场来自行动，而不是口号。",
  },
  ENTP: {
    name: "耿鬼",
    id: 94,
    type: "幽灵 / 毒",
    traits: ["机智", "反套路", "点子多"],
    description:
      "你像耿鬼一样擅长制造意外。你讨厌无聊和僵硬规则，喜欢用新角度打破局面。越复杂的场景，越能激发你的反应速度。",
  },
  INFJ: {
    name: "沙奈朵",
    id: 282,
    type: "超能力 / 妖精",
    traits: ["洞察", "守护", "理想感"],
    description:
      "你像沙奈朵一样敏锐又坚定。你能读到别人没说出口的情绪，也会为了重要的人和价值站出来。温柔不是退让，而是你选择的力量形式。",
  },
  INFP: {
    name: "伊布",
    id: 133,
    type: "一般",
    traits: ["真诚", "可塑", "重视内心"],
    description:
      "你像伊布一样拥有很多可能性。你不喜欢被单一定义，真正的动力来自内心认同。只要环境足够合适，你会进化出很鲜明的光芒。",
  },
  ENFJ: {
    name: "路卡利欧",
    id: 448,
    type: "格斗 / 钢",
    traits: ["共鸣", "带队", "信念"],
    description:
      "你像路卡利欧一样能感知他人的状态，也愿意把大家带向更好的方向。你重视连接与承诺，常常在关键时刻成为团队的精神支点。",
  },
  ENFP: {
    name: "皮卡丘",
    id: 25,
    type: "电",
    traits: ["热情", "感染力", "自由"],
    description:
      "你像皮卡丘一样有天然的亲和力和电流般的灵感。你容易被新鲜事点亮，也能把气氛带起来。你的能量来自连接、探索和被真实喜欢的事物吸引。",
  },
  ISTJ: {
    name: "巨金怪",
    id: 376,
    type: "钢 / 超能力",
    traits: ["可靠", "秩序", "执行力"],
    description:
      "你像巨金怪一样稳定、精确、值得托付。你不爱空谈，习惯用事实和结果说话。越是复杂任务，你越能靠结构感把事情压住。",
  },
  ISFJ: {
    name: "幸福蛋",
    id: 242,
    type: "一般",
    traits: ["照顾", "耐心", "稳定"],
    description:
      "你像幸福蛋一样擅长提供踏实的支持。你记得别人的需要，也愿意在细节里表达关心。你的温和有重量，因为它长期、稳定、说到做到。",
  },
  ESTJ: {
    name: "怪力",
    id: 68,
    type: "格斗",
    traits: ["负责", "效率", "执行"],
    description:
      "你像怪力一样重视行动和责任。你看不惯拖延与含糊，遇到问题会直接扛起来处理。你适合把混乱的局面变成可执行的方案。",
  },
  ESFJ: {
    name: "快龙",
    id: 149,
    type: "龙 / 飞行",
    traits: ["友善", "保护欲", "凝聚力"],
    description:
      "你像快龙一样亲切可靠。你享受让身边人安心，也擅长在关系里建立温度。你的强大不是压迫感，而是让人愿意靠近。",
  },
  ISTP: {
    name: "甲贺忍蛙",
    id: 658,
    type: "水 / 恶",
    traits: ["冷静", "技巧", "临场"],
    description:
      "你像甲贺忍蛙一样反应快、判断准。你不一定话多，但很会在关键瞬间做出有效动作。比起预设剧本，你更相信现场手感。",
  },
  ISFP: {
    name: "仙子伊布",
    id: 700,
    type: "妖精",
    traits: ["审美", "温柔", "自我节奏"],
    description:
      "你像仙子伊布一样有细腻的感受力。你在意氛围、质感和真心，不喜欢被粗暴推动。你的魅力来自柔软与清楚的边界同时存在。",
  },
  ESTP: {
    name: "烈焰猴",
    id: 392,
    type: "火 / 格斗",
    traits: ["行动派", "胆量", "现场感"],
    description:
      "你像烈焰猴一样敢冲、会打、反应快。机会出现时你不喜欢等太久，擅长在变化里抓住窗口。你越投入，越能把压力烧成表现力。",
  },
  ESFP: {
    name: "胖丁",
    id: 39,
    type: "一般 / 妖精",
    traits: ["表现力", "亲近", "气氛担当"],
    description:
      "你像胖丁一样有鲜明的存在感。你能感受到当下的节奏，也懂得用轻松方式拉近距离。你适合把普通时刻变成值得记住的片段。",
  },
};

const scores = {
  E: 0,
  I: 0,
  N: 0,
  S: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0,
};

let currentQuestion = 0;
let answers = [];

const startScreen = document.querySelector("#startScreen");
const quizScreen = document.querySelector("#quizScreen");
const resultScreen = document.querySelector("#resultScreen");
const progressText = document.querySelector("#progressText");
const meterFill = document.querySelector("#meterFill");
const questionAxis = document.querySelector("#questionAxis");
const questionTitle = document.querySelector("#questionTitle");
const choices = document.querySelector("#choices");
const backButton = document.querySelector("#backButton");
const copyStatus = document.querySelector("#copyStatus");

document.querySelector("#startButton").addEventListener("click", startQuiz);
document.querySelector("#restartButton").addEventListener("click", resetQuiz);
document.querySelector("#againButton").addEventListener("click", resetQuiz);
document.querySelector("#backButton").addEventListener("click", goBack);
document.querySelector("#shareButton").addEventListener("click", copyResult);

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach((item) => {
    item.classList.toggle("is-active", item === screen);
  });
}

function startQuiz() {
  showScreen(quizScreen);
  renderQuestion();
}

function resetQuiz() {
  currentQuestion = 0;
  answers = [];
  Object.keys(scores).forEach((key) => {
    scores[key] = 0;
  });
  copyStatus.textContent = "";
  showScreen(startScreen);
  progressText.textContent = `第 1 / ${questions.length} 题`;
}

function renderQuestion() {
  const question = questions[currentQuestion];
  questionAxis.textContent = question.axis;
  questionTitle.textContent = question.text;
  progressText.textContent = `第 ${currentQuestion + 1} / ${questions.length} 题`;
  meterFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
  backButton.disabled = currentQuestion === 0;
  choices.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `
      <span class="choice-mark">${String.fromCharCode(65 + index)}</span>
      <span>${option.text}</span>
    `;
    button.addEventListener("click", () => chooseOption(option));
    choices.appendChild(button);
  });
}

function chooseOption(option) {
  answers[currentQuestion] = option;
  applyScores(option.scores, 1);
  currentQuestion += 1;

  if (currentQuestion >= questions.length) {
    meterFill.style.width = "100%";
    renderResult();
    return;
  }

  renderQuestion();
}

function goBack() {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  const previous = answers[currentQuestion];
  if (previous) {
    applyScores(previous.scores, -1);
    answers[currentQuestion] = undefined;
  }
  renderQuestion();
}

function applyScores(optionScores, direction) {
  Object.entries(optionScores).forEach(([key, value]) => {
    scores[key] += value * direction;
  });
}

function buildCode() {
  return [
    scores.E >= scores.I ? "E" : "I",
    scores.N >= scores.S ? "N" : "S",
    scores.T >= scores.F ? "T" : "F",
    scores.J >= scores.P ? "J" : "P",
  ].join("");
}

function renderResult() {
  const code = buildCode();
  const result = pokemonResults[code] || pokemonResults.ENFP;
  const pokedexId = String(result.id).padStart(3, "0");
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokedexId}.png`;

  document.querySelector("#resultImage").src = imageUrl;
  document.querySelector("#resultImage").alt = result.name;
  document.querySelector("#resultName").textContent = result.name;
  document.querySelector("#resultType").textContent = `属性：${result.type}`;
  document.querySelector("#resultCode").textContent = `性格代码：${code}`;
  document.querySelector("#resultDescription").textContent = result.description;

  const traitList = document.querySelector("#traitList");
  traitList.innerHTML = "";
  result.traits.forEach((trait) => {
    const item = document.createElement("span");
    item.textContent = trait;
    traitList.appendChild(item);
  });

  progressText.textContent = "测试完成";
  copyStatus.textContent = "";
  showScreen(resultScreen);
}

async function copyResult() {
  const name = document.querySelector("#resultName").textContent;
  const code = document.querySelector("#resultCode").textContent.replace("性格代码：", "");
  const description = document.querySelector("#resultDescription").textContent;
  const shareText = `我的 BokeTI 宝可梦人格是：${name}（${code}）。${description}`;

  try {
    await navigator.clipboard.writeText(shareText);
    copyStatus.textContent = "结果已复制";
  } catch {
    copyStatus.textContent = shareText;
  }
}
