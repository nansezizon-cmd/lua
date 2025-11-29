// 1) 메뉴 데이터
const menuData = {
  cocktail: [
    {
      name_ko: "갓파더",
      name_en: "Godfather",
      price: 15000,
      note: "위스키와 아마레또의 중후한 조화, 시나몬 향이 매력적인 칵테일.",
      tags: ["도수 높음", "시나몬", "중후함"],
      image: "갓파더.png"
    },
    {
      name_ko: "네그로니",
      name_en: "Negroni",
      price: 14000,
      note: "진, 캄파리, 스위트 베르무트의 달콤쌉쌀한 밸런스.",
      tags: ["식전주", "쌉쌀함", "클래식"],
      image: "네그로니.png"
    },
    {
      name_ko: "데킬라 선라이즈",
      name_en: "Tequila Sunrise",
      price: 12000,
      note: "오렌지 주스와 석류 시럽이 만들어내는 일출 같은 색감.",
      tags: ["달달함", "예쁨", "상큼함"],
      image: "데킬라선라이즈.png"
    },
    {
      name_ko: "롱 아일랜드 아이스 티",
      name_en: "Long Island Iced Tea",
      price: 13000,
      note: "홍차 맛이 나지만 4가지 술이 들어간 도수 높은 칵테일.",
      tags: ["도수 높음", "양 많음", "가성비"],
      image: "롱아이일랜드아이스티.png"
    },
    {
      name_ko: "모스크 뮬",
      name_en: "Moscow Mule",
      price: 13000,
      note: "보드카와 진저비어, 라임의 시원하고 알싸한 청량감.",
      tags: ["상큼함", "탄산", "구리잔"],
      image: "모스크뮬.png"
    },
    {
      name_ko: "미도리 사워",
      name_en: "Midori Sour",
      price: 12000,
      note: "멜론 리큐르의 달콤함과 레몬의 상큼함이 어우러진 칵테일.",
      tags: ["달달함", "초보자 추천", "멜론맛"],
      image: "미도리사워.png"
    },
    {
      name_ko: "블랙 러시안",
      name_en: "Black Russian",
      price: 13000,
      note: "보드카와 커피 리큐르의 진하고 달콤한 맛.",
      tags: ["도수 높음", "달달함", "커피향"],
      image: "블랙러시안.png"
    },
    {
      name_ko: "옥보단",
      name_en: "Okbodan",
      price: 12000,
      note: "잔 테두리의 설탕과 함께 즐기는 새콤달콤한 과일 맛.",
      tags: ["달달함", "여성 취향", "예쁨"],
      image: "옥보단.png"
    },
    {
      name_ko: "올드 패션드",
      name_en: "Old Fashioned",
      price: 15000,
      note: "위스키 칵테일의 클래식. 묵직하고 달콤한 풍미.",
      tags: ["클래식", "도수 높음", "위스키 베이스"],
      image: "올드패션드.png"
    },
    {
      name_ko: "진 토닉",
      name_en: "Gin & Tonic",
      price: 11000,
      note: "프리미엄 진과 토닉워터, 라임이 어우러진 깔끔한 맛.",
      tags: ["깔끔함", "기본", "시원함"],
      image: "진토닉.png"
    }
  ],
  highball: [
    {
      name_ko: "짐빔 하이볼",
      name_en: "Jim Beam Highball",
      price: 9000,
      note: "버번 위스키의 대명사 짐빔의 고소함과 청량감.",
      tags: ["고소함", "청량감", "가성비"],
      image: "짐빔하이볼.png"
    },
    {
      name_ko: "얼그레이 하이볼",
      name_en: "Earl Grey Highball",
      price: 10000,
      note: "진한 얼그레이 시럽의 향긋함과 위스키의 조화.",
      tags: ["달달함", "인기", "향긋함"],
      image: "얼그레이하이볼.png"
    },
    {
      name_ko: "제임슨 하이볼",
      name_en: "Jameson Highball",
      price: 11000,
      note: "부드러운 아이리쉬 위스키 제임슨을 베이스로 한 깔끔한 하이볼.",
      tags: ["깔끔함", "부드러움"],
      image: "제임슨하이볼.png"
    },
    {
      name_ko: "잭다니엘 하이볼",
      name_en: "Jack Daniel's Highball",
      price: 12000,
      note: "잭다니엘의 달콤한 바닐라 향과 탄산의 조화.",
      tags: ["바닐라향", "달콤함"],
      image: "잭다니엘하이볼.png"
    }
  ],
  wine: [
    {
      name_ko: "몬테스 알파 카베르네 소비뇽",
      name_en: "Montes Alpha Cabernet Sauvignon",
      price: 45000,
      note: "칠레 프리미엄 레드 와인의 정석. 진한 과실 향과 부드러운 오크 풍미.",
      tags: ["레드", "드라이", "베스트셀러"],
      sweetness: 1,
      acidity: 2,
      body: 3,
      peat: 0,
      sherry: 0,
      image: "몬테스 알파 카베르네 소비뇽.png"
    },
    {
      name_ko: "클라우디 베이 소비뇽 블랑",
      name_en: "Cloudy Bay Sauvignon Blanc",
      price: 62000,
      note: "뉴질랜드 소비뇽 블랑의 기준. 폭발적인 열대과일 향과 산뜻한 산미.",
      tags: ["화이트", "상큼함", "프리미엄"],
      sweetness: 1,
      acidity: 3,
      body: 2,
      peat: 0,
      sherry: 0,
      image: "클라우디 베이 소비뇽 블랑.png"
    },
    {
      name_ko: "반피 로사 리갈 브라케토 다퀴",
      name_en: "Banfi Rosa Regale Brachetto d'Acqui",
      price: 55000,
      note: "장미 향과 딸기 향이 가득한 달콤한 스파클링 레드 와인.",
      tags: ["스파클링", "달달함", "로맨틱"],
      sweetness: 3,
      acidity: 2,
      body: 1,
      peat: 0,
      sherry: 0,
      image: "반피 로사 리갈 브라케토 다퀴.png"
    },
    {
      name_ko: "콥케 루비 포트",
      name_en: "Kopke Ruby Port",
      price: 38000,
      note: "달콤하고 진한 포트 와인. 디저트나 치즈와 환상적인 궁합.",
      tags: ["포트", "달달함", "도수 높음"],
      sweetness: 3,
      acidity: 1,
      body: 3,
      peat: 0,
      sherry: 0,
      image: "콥케 루비 포트.png"
    },
    {
      name_ko: "옐로우테일 샤르도네",
      name_en: "Yellow Tail Chardonnay",
      price: 29000,
      note: "호주의 대중적인 화이트 와인. 신선한 복숭아 향과 부드러운 바닐라 터치.",
      tags: ["화이트", "가성비", "부드러움"],
      sweetness: 2,
      acidity: 2,
      body: 2,
      peat: 0,
      sherry: 0,
      image: "옐로우테일 샤르도네.png"
    }
  ],
  whisky: [
    {
      name_ko: "발렌타인 12년",
      name_en: "Ballantine's 12 Years",
      price: 10000,
      note: "부드러운 목 넘김과 달콤한 풍미. 대중적 사랑. (블렌디드, 40%)",
      tags: ["블렌디드", "입문용", "달콤함"],
      image: "발렌타인12.png"
    },
    {
      name_ko: "조니워커 블랙 라벨",
      name_en: "Johnnie Walker Black Label",
      price: 10000,
      note: "스모키함과 깊은 복합미. 클래식한 선택. (블렌디드, 40%)",
      tags: ["블렌디드", "스모키", "클래식"],
      image: "조니워커블랙라벨.png"
    },
    {
      name_ko: "글렌피딕 12년",
      name_en: "Glenfiddich 12 Years",
      price: 16000,
      note: "부드러운 사과와 배 향. 입문/데일리 싱글 몰트. (싱글 몰트, 40%)",
      tags: ["싱글 몰트", "과일향", "부드러움"],
      image: "글렉피딕12.png"
    },
    {
      name_ko: "맥캘란 12년 더블 캐스크",
      name_en: "The Macallan 12 Years Double Cask",
      price: 20000,
      note: "셰리 오크통 숙성. 깊은 과일과 스파이시함. 럭셔리 싱글 몰트. (싱글 몰트, 40%)",
      tags: ["싱글 몰트", "셰리", "럭셔리"],
      image: "맥캘란12더블캐스크.png"
    },
    {
      name_ko: "잭 다니엘스 No.7",
      name_en: "Jack Daniel's No.7",
      price: 8000,
      note: "바닐라, 캐러멜 향. 스트레이트와 온더락으로 인기. (테네시, 40%)",
      tags: ["테네시", "바닐라", "인기"],
      image: "잭다니엘7.png"
    },
    {
      name_ko: "제임슨 아이리쉬 위스키",
      name_en: "Jameson Irish Whiskey",
      price: 8000,
      note: "부드러운 목 넘김. 편안하게 즐기기 좋음. (아이리쉬, 40%)",
      tags: ["아이리쉬", "부드러움", "가성비"],
      image: "제임슨아이리쉬위스키.png"
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
      name_ko: "치즈 호두마루",
      name_en: "Cheese Walnut Maru",
      price: 12900,
      note: "고소한 호두와 부드러운 치즈의 조화.",
      tags: ["고소함", "시그니처"],
      image: "치즈 호두마루.png"
    },
    {
      name_ko: "샤코",
      name_en: "Shine Muscat + Coconut",
      price: 8900,
      note: "그냥 시원한 샤인 머스켓 샤베트에 코코넛 믹스에요 ㅋ",
      tags: ["와인 잘 어울림", "여럿이서"],
      image: "샤코.png"
    },
    {
      name_ko: "통구이 허니브리 치즈",
      name_en: "Roasted Honey Brie Cheese",
      price: 18900,
      note: "통째로 구운 브리 치즈 위에 꿀과 견과류를 듬뿍 올린 메뉴.",
      tags: ["달콤함"],
      image: "통구이 허니브리 치즈.png"
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

    // Image rendering
    let imageHtml = "";
    if (item.image) {
      imageHtml = `<div class="menu-img-wrap"><img src="${item.image}" alt="${item.name_ko}" class="menu-img"></div>`;
    }

    div.innerHTML = `
      ${imageHtml}
      <div class="menu-content">
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
      </div>
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

  // Image Modal Logic
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".modal-close");

  // Open modal on image click
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-img")) {
      modal.style.display = "flex";
      // Trigger reflow
      void modal.offsetWidth;
      modal.classList.add("show");
      modalImg.src = e.target.src;
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }
  });

  // Close modal function
  function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Restore scrolling
    }, 300);
  }

  // Close on X click
  closeBtn.addEventListener("click", closeModal);

  // Close on background click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
