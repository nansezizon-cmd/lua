// 1) 메뉴 데이터
const menuData = {
  cocktail: [
    {
      name_ko: "루아 시그니처 칵테일",
      name_en: "LUA Signature Cocktail",
      price: 14000,
      note: "달콤한 과일 향과 가벼운 산미, 처음 칵테일을 드시는 분도 편하게 즐길 수 있는 잔.",
      tags: ["달달함", "시그니처", "초보자 추천"],
      peat: 0,
      sherry: 0
    },
    {
      name_ko: "애플 마티니",
      name_en: "Apple Martini",
      price: 13000,
      note: "사과 향이 선명하고 산뜻한 단맛, 깔끔하게 떨어지는 마무리.",
      tags: ["달달함", "상큼함"],
      peat: 0,
      sherry: 0
    },
    {
      name_ko: "마가리타",
      name_en: "Margarita",
      price: 13000,
      note: "라임의 산미와 소금 림이 어우러지는 클래식 테킬라 칵테일.",
      tags: ["산미", "클래식"],
      peat: 0,
      sherry: 0
    }
  ],
  highball: [
    {
      name_ko: "시나몬 하이볼",
      name_en: "Cinnamon Highball",
      price: 12000,
      note: "탄산감 위에 시나몬 향이 은은하게 올라오는 달콤한 하이볼.",
      tags: ["달달함", "초보자 추천"],
      peat: 0,
      sherry: 0
    },
    {
      name_ko: "클래식 하이볼",
      name_en: "Classic Whisky Highball",
      price: 11000,
      note: "탄산수와 위스키 본연의 곡물 향이 살아 있는 기본 하이볼.",
      tags: ["깔끔함"],
      peat: 1,
      sherry: 0
    }
  ],
  wine: [
    {
      name_ko: "산타 알리샤 까베르네 소비뇽",
      name_en: "Santa Alicia Cabernet Sauvignon",
      price: 46000,
      note: "검붉은 과일 향과 부드러운 탄닌, 고기와 잘 어울리는 드라이 레드.",
      tags: ["드라이", "고기 잘 어울림"],
      sweetness: 1,
      acidity: 2,
      body: 2,
      peat: 0,
      sherry: 0
    },
    {
      name_ko: "샤르도네 하우스 와인",
      name_en: "House Chardonnay",
      price: 42000,
      note: "부드러운 열대과일 향과 크리미한 질감, 가볍게 즐기기 좋은 화이트.",
      tags: ["부드러움", "초보자 추천"],
      sweetness: 2,
      acidity: 2,
      body: 1,
      peat: 0,
      sherry: 0
    }
  ],
  whisky: [
    {
      name_ko: "라가불린 16년",
      name_en: "Lagavulin 16 Years",
      price: 22000,
      note: "강한 스모키와 바다 향, 두꺼운 바디감으로 진한 피트 위스키의 대표격.",
      tags: ["스모키", "피트 강함", "싱글 몰트"],
      sweetness: 1,
      body: 3,
      peat: 3,
      sherry: 0
    },
    {
      name_ko: "글렌드로낙 12년",
      name_en: "Glendronach 12 Years",
      price: 19000,
      note: "건과일과 다크 초콜릿 느낌의 진한 쉐리 풍미, 부드러운 단맛.",
      tags: ["쉐리", "달달함", "싱글 몰트"],
      sweetness: 2,
      body: 2,
      peat: 0,
      sherry: 3
    },
    {
      name_ko: "발베니 더블우드 12년",
      name_en: "The Balvenie DoubleWood 12 Years",
      price: 19000,
      note: "꿀과 바닐라, 부드러운 오크 향이 어우러진 균형 잡힌 몰트.",
      tags: ["달달함", "초보자 추천", "싱글 몰트"],
      sweetness: 2,
      body: 2,
      peat: 0,
      sherry: 1
    }
  ],
  nonalc: [
    {
      name_ko: "논알콜 자몽 칵테일",
      name_en: "Non-alcohol Grapefruit Cocktail",
      price: 12000,
      note: "자몽 특유의 쌉싸름한 향과 탄산이 어우러진 상큼한 무알콜 칵테일.",
      tags: ["상큼함", "논알콜"],
      peat: 0,
      sherry: 0
    }
  ],
  food: [
    {
      name_ko: "나초",
      name_en: "Nachos",
      price: 10000,
      note: "따뜻한 또띠아 칩에 치즈와 살사를 곁들인 가벼운 안주.",
      tags: ["가벼운 안주"]
    },
    {
      name_ko: "소시지 & 포테이토",
      name_en: "Sausage & Potato",
      price: 10000,
      note: "구운 소시지와 감자를 함께 즐기는 플레이트.",
      tags: ["든든함"]
    },
    {
      name_ko: "치즈·과일 플래터",
      name_en: "Cheese & Fruit Platter",
      price: 18000,
      note: "여러 가지 치즈와 제철 과일을 곁들인 와인 전용 플레이트.",
      tags: ["와인 잘 어울림"]
    },
    {
      name_ko: "멜론 프로슈토",
      name_en: "Melon Prosciutto",
      price: 17000,
      note: "달콤한 멜론과 짭조름한 생햄의 클래식 조합.",
      tags: ["와인 잘 어울림", "가벼운 안주"]
    }
  ]
};

// 2) 공통 함수
function createScaleDots(value = 0, max = 3) {
  const dots = [];
  for (let i = 1; i <= max; i++) {
    dots.push('<span class="scale-dot ' + (i <= value ? "on" : "") + '"></span>');
  }
  return dots.join("");
}

function renderCategory(key) {
  const listEl = document.getElementById("list-" + key);
  if (!listEl) return;
  const items = menuData[key] || [];
  listEl.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";

    // 태그 클래스 매핑
    const tagHtml = (item.tags || []).map(tag => {
      let extra = "";
      const t = String(tag);
      if (t.includes("피트")) extra = " tag-peat";
      if (t.includes("쉐리")) extra = " tag-sherry";
      if (t.includes("달달")) extra = " tag-sweet";
      if (t.includes("드라이")) extra = " tag-dry";
      if (t.includes("초보자")) extra = " tag-beginner";
      return `<span class="tag${extra}">${tag}</span>`;
    }).join("");

    // Scale rendering (Sweetness, Body, etc.)
    let scaleHtml = "";
    if (item.sweetness) scaleHtml += `<div class="scale-bar"><span class="scale-label">당도</span>${createScaleDots(item.sweetness)}</div>`;
    if (item.acidity) scaleHtml += `<div class="scale-bar"><span class="scale-label">산미</span>${createScaleDots(item.acidity)}</div>`;
    if (item.body) scaleHtml += `<div class="scale-bar"><span class="scale-label">바디</span>${createScaleDots(item.body)}</div>`;
    if (item.peat) scaleHtml += `<div class="scale-bar"><span class="scale-label">피트</span>${createScaleDots(item.peat)}</div>`;
    if (item.sherry) scaleHtml += `<div class="scale-bar"><span class="scale-label">쉐리</span>${createScaleDots(item.sherry)}</div>`;

    let scaleRow = "";
    if (scaleHtml) {
      scaleRow = `<div class="scale-row">${scaleHtml}</div>`;
    }

    div.innerHTML = `
      <div class="menu-header">
        <div class="menu-names">
          <div class="menu-name-ko">${item.name_ko}</div>
          <div class="menu-name-en">${item.name_en}</div>
        </div>
        <div class="menu-price">${item.price.toLocaleString()}</div>
      </div>
      <div class="menu-note">${item.note}</div>
      <div class="tag-row">${tagHtml}</div>
      ${scaleRow}
    `;
    listEl.appendChild(div);
  });
}

// 3) 초기화
document.addEventListener("DOMContentLoaded", () => {
  // Render all categories
  Object.keys(menuData).forEach(key => renderCategory(key));

  // Navigation logic
  const navBtns = document.querySelectorAll(".index-btn");

  // Intersection Observer for scroll spy
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Active when element is near top
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id.replace('section-', '');
        navBtns.forEach(btn => {
          if (btn.dataset.target === id) {
            btn.classList.add('active');
            // Scroll nav to keep active button in view
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } else {
            btn.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Click handler
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      const section = document.getElementById("section-" + target);
      if (section) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const top = section.offsetTop - headerHeight + 1; // +1 to ensure it crosses threshold
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
});
