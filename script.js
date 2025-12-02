// 1) 메뉴 데이터
const menuData = {
  cocktail: [
    {
      category: "Modern Twist",
      name_ko: "메로나 사워",
      name_en: "Melona Sour",
      price: 10000,
      note: "달콤한 메론 맛과 부드러운 거품이 어우러진 시그니처 칵테일.",
      tags: ["시그니처", "달달함", "메론맛"],
      image: "메론사워.png"
    },
    {
      category: "Modern Twist",
      name_ko: "옥보단",
      name_en: "Okbodan",
      price: 13000,
      note: "잔 테두리의 설탕과 함께 즐기는 새콤달콤한 과일 맛.",
      tags: ["달달함", "여성 취향", "예쁨"],
      image: "옥보단.png"
    },
    {
      category: "Classic",
      name_ko: "갓파더",
      name_en: "Godfather",
      price: 13000,
      note: "위스키와 아마레또의 중후한 조화, 시나몬 향이 매력적인 칵테일.",
      tags: ["도수 높음", "시나몬", "중후함"],
      image: "갓파더.png"
    },
    {
      category: "Classic",
      name_ko: "올드 패션드",
      name_en: "Old Fashioned",
      price: 13000,
      note: "위스키 칵테일의 클래식. 묵직하고 달콤한 풍미.",
      tags: ["클래식", "도수 높음", "위스키 베이스"],
      image: "올드패션드.png"
    },
    {
      category: "Classic",
      name_ko: "네그로니",
      name_en: "Negroni",
      price: 16000,
      note: "진, 캄파리, 스위트 베르무트의 달콤쌉쌀한 밸런스.",
      tags: ["클래식", "도수 높음", "쌉쌀함"],
      image: "네그로니.png"
    },
    {
      category: "Classic",
      name_ko: "마가리타",
      name_en: "Margarita",
      price: 14000,
      note: "데킬라 베이스의 상큼하고 짭짤한 클래식 칵테일.",
      tags: ["상큼함", "클래식", "소금"],
      image: "마가리타.jpg"
    },
    {
      category: "Classic",
      name_ko: "데킬라 선라이즈",
      name_en: "Tequila Sunrise",
      price: 12000,
      note: "데킬라와 오렌지 주스, 그레나딘 시럽이 만드는 일출의 색감.",
      tags: ["상큼함", "예쁨", "오렌지"],
      image: "데킬라선라이즈.png"
    },
    {
      category: "Classic",
      name_ko: "롱 아일랜드 아이스티",
      name_en: "Long Island Iced Tea",
      price: 15000,
      note: "보드카, 럼, 진, 데킬라가 들어간 강력한 아이스티 맛 칵테일.",
      tags: ["도수 높음", "파티", "아이스티"],
      image: "롱아이일랜드아이스티.png"
    },
    {
      category: "Classic",
      name_ko: "블랙 러시안",
      name_en: "Black Russian",
      price: 13000,
      note: "보드카와 커피 리큐르의 진하고 달콤한 맛.",
      tags: ["도수 높음", "달달함", "커피향"],
      image: "블랙러시안.png"
    },
    {
      category: "Classic",
      name_ko: "모스크 뮬",
      name_en: "Moscow Mule",
      price: 13000,
      note: "보드카와 진저비어, 라임의 시원하고 알싸한 청량감.",
      tags: ["상큼함", "탄산", "구리잔"],
      image: "모스크뮬.png"
    },
    {
      category: "Classic",
      name_ko: "진 토닉",
      name_en: "Gin & Tonic",
      price: 12000,
      note: "프리미엄 진과 토닉워터, 라임이 어우러진 깔끔한 맛.",
      tags: ["깔끔함", "기본", "시원함"],
      image: "진토닉.png"
    }
  ],
  highball: [
    {
      name_ko: "산토리 가쿠빈 하이볼",
      name_en: "Suntory Kakubin Highball",
      price: 11000,
      note: "하이볼의 원조, 산토리 위스키의 깔끔하고 청량한 맛.",
      tags: ["깔끔함", "청량감", "오리지널"],
      image: "산토리하이볼.png"
    },
    {
      name_ko: "얼그레이 하이볼",
      name_en: "Earl Grey Highball",
      price: 11000,
      note: "진한 얼그레이 시럽의 향긋함과 위스키의 조화.",
      tags: ["달달함", "인기", "향긋함"],
      image: "얼그레이하이볼.png"
    },
    {
      name_ko: "제임슨 진저 하이볼",
      name_en: "Jameson Ginger Highball",
      price: 10900,
      note: "제임슨 위스키와 진저에일의 달콤하고 알싸한 조화.",
      tags: ["달달함", "알싸함", "인기"],
      image: "제임슨진저하이볼.png"
    },
    {
      name_ko: "잭 콕",
      name_en: "Jack Coke",
      price: 11000,
      note: "잭 다니엘과 콜라의 환상적인 조합. 달콤하고 시원한 클래식.",
      tags: ["달달함", "콜라", "클래식"],
      image: "잭다니엘7.png"
    },
    {
      name_ko: "콥케 포트 토닉",
      name_en: "Kopke Port Tonic",
      price: 10900,
      note: "달콤한 포트 와인과 토닉워터의 색다른 만남.",
      tags: ["달달함", "와인 베이스", "이색적"],
      image: "콥케 루비 포트.png"
    }
  ],
  wine: [
    {
      category: "Port",
      name_ko: "콥케 포트 (루비/화이트)",
      name_en: "Kopke Port",
      price: "9,900 / 63,900",
      note: "달콤하고 진한 포트 와인. 디저트나 치즈와 환상적인 궁합.",
      tags: ["포트", "달달함", "도수 높음"],
      sweetness: 3,
      acidity: 1,
      body: 3,
      peat: 0,
      sherry: 0,
      image: "콥케 루비 포트.png"
    }
  ],
  whisky: [
    {
      category: "Irish",
      name_ko: "제임슨",
      name_en: "Jameson",
      price: "11,000 / 139,000",
      note: "부드럽고 달콤한 아일랜드 위스키. 누구나 즐기기 좋은 맛.",
      tags: ["아이리쉬", "부드러움", "가성비"],
      image: "제임슨아이리쉬위스키.png"
    },
    {
      category: "Blended",
      name_ko: "조니워커 블랙 라벨",
      name_en: "Johnnie Walker Black Label",
      price: "16,000 / 179,000",
      note: "스모키함과 깊은 복합미. 클래식한 선택. (블렌디드, 40%)",
      tags: ["블렌디드", "스모키", "클래식"],
      image: "조니워커블랙라벨.png"
    },
    {
      category: "Bourbon",
      name_ko: "메이커스 마크",
      name_en: "Maker's Mark",
      price: "16,000 / 189,000",
      note: "붉은 밀랍 봉인의 프리미엄 버번 위스키. 부드러운 바닐라와 카라멜 향.",
      tags: ["버번", "부드러움", "바닐라"],
      image: "메이커스마크.png"
    },
    {
      category: "Single Malt",
      name_ko: "글렌피딕 12년 (Glass)",
      name_en: "Glenfiddich 12 Years",
      price: "21,900 / 259,000",
      note: "세계에서 가장 사랑받는 싱글 몰트. 서양배의 신선한 향.",
      tags: ["싱글 몰트", "과일향", "입문용"],
      image: "글렉피딕12.png"
    },
    {
      category: "Single Malt",
      name_ko: "라프로익 10년",
      name_en: "Laphroaig 10 Years",
      price: "19,900 / 229,000",
      note: "강렬한 피트 향과 바다의 풍미. 호불호가 갈리는 매니아의 위스키.",
      tags: ["싱글 몰트", "피트", "스모키"],
      image: "라프로익 10년.png"
    }
  ],
  beer: [
    {
      name_ko: "기네스",
      name_en: "Guinness",
      price: 12000,
      note: "오래 로스팅한 맥아를 사용, 진한 루비색을 띤 은은히 풍기는 맥아향과 커피향의 조화를 이룬 맥주. (4.2%/330ml/아일랜드)",
      tags: ["흑맥주", "커피향", "아일랜드"],
      image: "기네스.png"
    },
    {
      name_ko: "하이네켄",
      name_en: "Heineken",
      price: 10000,
      note: "쌉싸름한 탄산감과 맑고 깨끗한 맛에서 나오는 시원한 청량감이 매력적인 맥주. (5%/330ml/네덜란드)",
      tags: ["라거", "청량감", "네덜란드"],
      image: "하이네켄.jpg"
    }
  ],
  food: [
    {
      name_ko: "통구이 허니브리 치즈",
      name_en: "Roasted Honey Brie Cheese",
      price: 18900,
      note: "통째로 구운 브리 치즈 위에 꿀과 견과류를 듬뿍 올린 메뉴.",
      tags: ["달콤함"],
      image: "통구이 허니브리 치즈.png"
    },
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

  // Group items by category
  let currentCategory = "";

  items.forEach(item => {
    // Insert category header if changed
    if (item.category && item.category !== currentCategory) {
      currentCategory = item.category;
      const headerDiv = document.createElement("div");
      headerDiv.className = "category-header";
      headerDiv.textContent = currentCategory;
      listEl.appendChild(headerDiv);
    }

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
          <div class="menu-price">${typeof item.price === 'number' ? item.price.toLocaleString() : item.price}</div>
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
