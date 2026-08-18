/**
 * Long An Travel Planner 2026 - Interactive Application Logic
 * Supports Mode 1 (Morning Start) & Mode 2 (Noon Start)
 * Dynamic Destination Customization, Real-time Budget Estimator & Smart Timeline
 */

// ==========================================
// 1. DATA SOURCE: DESTINATIONS IN LONG AN
// ==========================================
const destinationsData = {
  "happyland": {
    id: "happyland",
    name: "KDL Sinh Thái Happyland",
    distance: 15,
    distanceText: "15 km từ Tân An",
    driveTime: "20 - 25 phút",
    ticketPrice: 100000,
    priceText: "100.000đ - 180.000đ / vé",
    category: "vui-choi",
    categoryName: "Vui chơi & Văn hóa",
    theme: "fun-theme",
    location: "Xã Thạnh Đức, Huyện Bến Lức, Long An",
    summary: "Quần thể du lịch văn hóa kết hợp giải trí đa dạng bậc nhất Long An. Tái hiện trọn vẹn nét văn hóa 3 miền Bắc - Trung - Nam, chợ nổi miệt vườn, chùa Một Cột, phố cổ Hội An thu nhỏ và cánh đồng hoa rực rỡ sắc màu.",
    highlights: [
      "Khu làng văn hóa 3 miền & chợ nổi sông nước",
      "Vườn hoa bạt ngàn góc chụp ảnh check-in sống ảo tuyệt đẹp",
      "Nằm ngay trên trục QL1A, cực kỳ thuận tiện ghé trên đường từ HCM về Tân An"
    ],
    googleMapsUrl: "https://www.google.com/maps/search/Khu+du+l%E1%BB%8Bch+Happyland+B%E1%BA%BFn+L%E1%BB%A9c+Long+An"
  },
  "tan-lap": {
    id: "tan-lap",
    name: "KDL Làng Nổi Tân Lập",
    distance: 65,
    distanceText: "65 km từ Tân An",
    driveTime: "1h15 - 1h30",
    ticketPrice: 170000,
    priceText: "70.000đ (vé cổng) + 100.000đ (xuồng / cano)",
    category: "sinh-thai",
    categoryName: "Sinh Thái / Rừng Tràm",
    theme: "nature-theme",
    location: "Quốc lộ 62, Xã Tân Lập, Huyện Mộc Hóa, Long An",
    summary: "Biểu tượng sinh thái rừng tràm ngập nước đặc trưng của vùng Đồng Tháp Mười. Tháng 10 đang là mùa nước nổi tuyệt đẹp để trải nghiệm đi xuồng ba lá len lỏi trong rừng và ngắm nhìn thảm thực vật xanh mướt.",
    highlights: [
      "Cung đường đan xuyên rừng tràm dài 5km chụp ảnh huyền ảo",
      "Tháp quan sát cao 38m ngắm trọn toàn cảnh rừng tràm bạt ngàn",
      "Chèo xuồng ba lá & cano khám phá chim trời, hoa sen, hoa súng nở rộ"
    ],
    googleMapsUrl: "https://www.google.com/maps/search/L%C3%A0ng+n%E1%BB%95i+T%C3%A2n+L%E1%BA%ADp+M%E1%BB%99c+H%C3%B3a+Long+An"
  },
  "my-quynh-safari": {
    id: "my-quynh-safari",
    name: "Vườn Thú Mỹ Quỳnh Safari",
    distance: 50,
    distanceText: "50 km từ Tân An",
    driveTime: "1h00 - 1h15",
    ticketPrice: 120000,
    priceText: "100.000đ - 140.000đ / vé",
    category: "vui-choi",
    categoryName: "Vui Chơi / Safari",
    theme: "fun-theme",
    location: "Ấp Bàu Công, Xã Tân Mỹ, Huyện Đức Hòa, Long An",
    summary: "Vườn thú bán hoang dã chuẩn Safari quy mô lớn tại Long An. Du khách được ngồi trên xe chuyên dụng ngắm nhìn hổ, sư tử, hươu cao cổ, ngựa vằn sinh sống tự do, kết hợp công viên nước và khu trò chơi.",
    highlights: [
      "Xe bus Safari ngắm thú bán hoang dã cự ly gần",
      "Khu cho thú ăn tương tác thân thiện với hươu sao, dê, cừu",
      "Khu trò chơi trong nhà và công viên nước giải trí"
    ],
    googleMapsUrl: "https://www.google.com/maps/search/M%E1%BB%B9+Qu%E1%BB%B3nh+Safari+%C4%90%E1%BB%A9c+H%C3%B2a+Long+An"
  },
  "cat-tuong-phu-sinh": {
    id: "cat-tuong-phu-sinh",
    name: "Công Viên 7 Kỳ Quan (Cát Tường Phú Sinh)",
    distance: 45,
    distanceText: "45 km từ Tân An",
    driveTime: "50 - 60 phút",
    ticketPrice: 0,
    priceText: "Miễn phí vé cổng (chỉ tốn cafe/ăn uống)",
    category: "vui-choi",
    categoryName: "Vui Chơi / Check-in",
    theme: "fun-theme",
    location: "Xã Mỹ Hạnh Bắc, Huyện Đức Hòa, Long An",
    summary: "Công viên thu nhỏ mô phỏng tinh xảo 7 kỳ quan nổi tiếng thế giới. Địa điểm check-in sống ảo cực kỳ nổi tiếng với tháp Eiffel, tượng Nữ thần Tự do, tháp nghiêng Pisa, nhà hát Opera Sydney...",
    highlights: [
      "Bộ ảnh sống ảo vòng quanh thế giới chỉ trong 1 buổi",
      "Miễn phí 100% vé vào cổng",
      "Khuôn viên công viên ven hồ thoáng đãng, nhiều quán nước nghỉ chân"
    ],
    googleMapsUrl: "https://www.google.com/maps/search/C%C3%B4ng+vi%C3%AAn+7+K%E1%BB%B3+Quan+C%C3%A1t+T%C6%B0%E1%BB%9Dng+Ph%C3%BA+Sinh+Long+An"
  },
  "canh-dong-bat-tan": {
    id: "canh-dong-bat-tan",
    name: "KDL Cánh Đồng Bất Tận (Rừng Dược Liệu)",
    distance: 68,
    distanceText: "68 km từ Tân An",
    driveTime: "1h20 - 1h30",
    ticketPrice: 300000,
    priceText: "250.000đ - 350.000đ / tour trọn gói",
    category: "sinh-thai",
    categoryName: "Sinh Thái / Rừng Tràm",
    theme: "nature-theme",
    location: "Khu bảo tồn dược liệu Đồng Tháp Mười, Bình Phong Thạnh, Mộc Hóa",
    summary: "Bối cảnh chính trong bộ phim kinh điển 'Cánh Đồng Bất Tận'. Nơi đây lưu giữ cánh rừng tràm gió nguyên sinh hơn trăm năm tuổi, hệ sinh thái dược liệu quý giá và trải nghiệm chăm sóc sức khỏe độc nhất vô nhị.",
    highlights: [
      "Đi tắc ráng len lỏi giữa rừng tràm nguyên sinh thơm mùi tinh dầu gió",
      "Trải nghiệm tắm ngâm thảo dược, xông hơi tinh dầu thiên nhiên",
      "Chèo thuyền Kayak trên hồ nước trong vắt màu nước trà đặc trưng"
    ],
    googleMapsUrl: "https://www.google.com/maps/search/KDL+C%C3%A1nh+%C4%90%E1%BB%93ng+B%E1%BA%A5t+T%E1%BA%ADn+Long+An"
  },
  "vuon-thanh-long": {
    id: "vuon-thanh-long",
    name: "Vườn Thanh Long & Trái Cây Châu Thành",
    distance: 12,
    distanceText: "12 km từ Tân An",
    driveTime: "15 - 20 phút",
    ticketPrice: 40000,
    priceText: "30.000đ - 50.000đ (thưởng thức tại vườn)",
    category: "vuon-trai-cay",
    categoryName: "Vườn Cây / Nông Nghiệp",
    theme: "fruit-theme",
    location: "Huyện Châu Thành, Long An (cạnh TP Tân An)",
    summary: "Châu Thành là 'thủ phủ thanh long' của miền Tây Nam Bộ nổi tiếng với giống thanh long ruột đỏ ngọt đậm, căng bóng. Trải nghiệm dạo vườn, tự tay hái quả và thưởng thức thanh long tươi rói vừa hái trên cây.",
    highlights: [
      "Khoảng cách siêu gần TP. Tân An (chỉ 15 phút chạy xe)",
      "Chụp ảnh với hàng ngàn trụ thanh long xanh mát bạt ngàn",
      "Mua thanh long ruột đỏ tươi ngon loại 1 với giá gốc nhà vườn làm quà"
    ],
    googleMapsUrl: "https://www.google.com/maps/search/V%C6%B0%E1%BB%9Dn+thanh+long+Ch%C3%A2u+Th%C3%A0nh+Long+An"
  },
  "ruou-go-den": {
    id: "ruou-go-den",
    name: "Lò Rượu Đế Gò Đen & Chợ Đệm Bến Lức",
    distance: 22,
    distanceText: "22 km từ Tân An",
    driveTime: "25 - 30 phút",
    ticketPrice: 0,
    priceText: "Tham quan miễn phí / Mua quà tùy chọn",
    category: "van-hoa",
    categoryName: "Di Tích / Ẩm Thực",
    theme: "culture-theme",
    location: "Xã Phước Lợi & Mỹ Yên, Huyện Bến Lức, Long An",
    summary: "Khám phá cái nôi của loại danh tửu 'Đế Gò Đen' lừng danh đất phương Nam với bí quyết ủ men lá truyền thống từ nếp than và nếp mỡ. Kết hợp thưởng thức lạp xưởng tươi nướng than giòn sần sật.",
    highlights: [
      "Tìm hiểu trực tiếp quy trình nấu rượu nếp gia truyền",
      "Thưởng thức nem nướng, lạp xưởng tươi thơm nức mũi",
      "Mua rượu nếp Gò Đen chính hiệu phục vụ cho tiệc BBQ tối tại gia"
    ],
    googleMapsUrl: "https://www.google.com/maps/search/L%C3%B2+r%C6%B0%E1%BB%A3u+%C4%90%E1%BA%BF+G%C3%B2+%C4%90en+B%E1%BA%BFn+L%E1%BB%A9c"
  },
  "lang-sen": {
    id: "lang-sen",
    name: "Khu Bảo Tồn Đất Ngập Nước Láng Sen",
    distance: 85,
    distanceText: "85 km từ Tân An",
    driveTime: "1h45 - 2h00",
    ticketPrice: 100000,
    priceText: "50.000đ - 150.000đ (vé + thuyền ngắm chim)",
    category: "sinh-thai",
    categoryName: "Sinh Thái / Rừng Tràm",
    theme: "nature-theme",
    location: "Xã Vĩnh Lợi & Vĩnh Đại, Huyện Tân Hưng, Long An",
    summary: "Khu Ramsar thế giới thứ 2.227 và là khu bảo tồn thiên nhiên hoang dã độc đáo bậc nhất đồng bằng sông Cửu Long với hơn 150 loài thực vật, 112 loài chim quý hiếm và đầm sen tự nhiên rộng lớn.",
    highlights: [
      "Chiêm ngưỡng đàn chim nước quý hiếm bay rợp trời mùa nước nổi tháng 10",
      "Đầm sen bạt ngàn thơm ngát",
      "Không gian hoang sơ tĩnh lặng tuyệt đối, lý tưởng cho người yêu thiên nhiên"
    ],
    googleMapsUrl: "https://www.google.com/maps/search/Khu+b%E1%BA%A3o+t%E1%BB%93n+%C4%91%E1%BA%A5t+ng%E1%BA%ADp+n%C6%B0%E1%BB%9Bc+L%C3%A1ng+Sen"
  },
  "chua-ton-thanh": {
    id: "chua-ton-thanh",
    name: "Chùa Tôn Thạnh (Di Tích Nguyễn Đình Chiểu)",
    distance: 35,
    distanceText: "35 km từ Tân An",
    driveTime: "40 - 50 phút",
    ticketPrice: 0,
    priceText: "Miễn phí viếng thăm",
    category: "van-hoa",
    categoryName: "Di Tích / Văn Hóa",
    theme: "culture-theme",
    location: "Xã Mỹ Lộc, Huyện Cần Giuộc, Long An",
    summary: "Ngôi chùa cổ nhất Long An được xây dựng từ năm 1808. Nơi đây nhà thơ yêu nước Nguyễn Đình Chiểu từng sinh sống dạy học, bốc thuốc và sáng tác áng văn bất hủ 'Văn tế Nghĩa sĩ Cần Giuộc'.",
    highlights: [
      "Di tích lịch sử cấp Quốc gia với pho tượng Phật bà Quan Âm nghìn mắt nghìn tay cổ",
      "Cây thiên tuế cổ thụ hàng trăm năm tuổi",
      "Không gian thanh tịnh, trầm mặc và tôn nghiêm"
    ],
    googleMapsUrl: "https://www.google.com/maps/search/Ch%C3%B9a+T%C3%B4n+Th%E1%BA%A1nh+C%E1%BA%A7n+Giu%E1%BB%99c"
  },
  "ho-boi-bien-dong": {
    id: "ho-boi-bien-dong",
    name: "Hồ Bơi Biển Đông (Công Viên Tân An)",
    distance: 0,
    distanceText: "0 km (Ngay trung tâm TP. Tân An)",
    driveTime: "3 - 5 phút nội ô",
    ticketPrice: 40000,
    priceText: "30.000đ - 50.000đ / vé",
    category: "vui-choi",
    categoryName: "Bơi Lội / Thư Giãn",
    theme: "pool-theme",
    location: "Công viên TP. Tân An, Phường 3, TP. Tân An, Long An",
    summary: "Tọa độ giải trí trung tâm dành cho buổi chiều ngày 10/10/2026. Bể bơi rộng, nước được xử lý sạch sẽ, khuôn viên rợp bóng cây xanh của công viên Tân An, có máng trượt nước và các tiện ích giải khát.",
    highlights: [
      "Tâm điểm vui chơi cố định trong lịch trình cả 2 chế độ vào chiều 10/10/2026",
      "Giải nhiệt sảng khoái sau quãng đường di chuyển và vui chơi buổi trưa",
      "Vị trí ngay nội ô TP. Tân An, bơi xong tiện ghé chợ mua hải sản làm tiệc tối tại gia"
    ],
    googleMapsUrl: "https://www.google.com/maps/search/H%E1%BB%93+b%C6%A1i+Bi%E1%BB%83n+%C4%90%C3%B4ng+c%C3%B4ng+vi%C3%AAn+T%C3%A2n+An"
  }
};

// ==========================================
// 2. APPLICATION STATE
// ==========================================
let appState = {
  currentMode: 1, // 1: Sáng 10/10, 2: Trưa 10/10
  currentDayTab: 1, // 1: 10/10/2026, 2: 11/10/2026
  selectedNoonDay1: "happyland", // Destination for Noon Day 1 (Mode 1)
  selectedMorningDay2: "tan-lap", // Destination for Morning Day 2 (Mode 1 & 2)
  memberCount: 4,
  vehicleType: "motorbike", // Default: Xe máy (di chuyển theo QL1A)
  partyBudgetPerPerson: 200000,
  filterCategory: "all",
  sortBy: "dist-asc"
};

// ==========================================
// 3. INITIALIZATION & LIFECYCLE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initThemeToggle();
  populateDestinationSelects();
  renderModeView();
  renderTimeline();
  renderDestinationsGrid();
  updateBudgetCalculation();

  // Print button listener
  document.getElementById("quickPrintBtn").addEventListener("click", () => {
    window.print();
  });
});

// ==========================================
// 4. COUNTDOWN TIMER (Target: 10/10/2026 07:30)
// ==========================================
function initCountdown() {
  const targetDate = new Date("2026-10-10T07:30:00+07:00").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("countDays").innerText = "00";
      document.getElementById("countHours").innerText = "00";
      document.getElementById("countMins").innerText = "00";
      document.getElementById("countSecs").innerText = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countDays").innerText = String(days).padStart(2, "0");
    document.getElementById("countHours").innerText = String(hours).padStart(2, "0");
    document.getElementById("countMins").innerText = String(mins).padStart(2, "0");
    document.getElementById("countSecs").innerText = String(secs).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// ==========================================
// 5. THEME TOGGLE (DARK / LIGHT)
// ==========================================
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("longan_theme") || "light";
  
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem("longan_theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      localStorage.setItem("longan_theme", "dark");
    }
  });
}

// ==========================================
// 6. POPULATE SELECT DROPDOWNS
// ==========================================
function populateDestinationSelects() {
  const noonSelect = document.getElementById("selectNoonDay1");
  const morningSelect = document.getElementById("selectMorningDay2");

  // Valid candidates for custom slots (exclude pool which is fixed)
  const candidateKeys = Object.keys(destinationsData).filter(k => k !== "ho-boi-bien-dong");

  noonSelect.innerHTML = "";
  morningSelect.innerHTML = "";

  candidateKeys.forEach(key => {
    const d = destinationsData[key];
    const option1 = document.createElement("option");
    option1.value = key;
    option1.textContent = `${d.name} (${d.distanceText})`;
    if (key === appState.selectedNoonDay1) option1.selected = true;
    noonSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = key;
    option2.textContent = `${d.name} (${d.distanceText})`;
    if (key === appState.selectedMorningDay2) option2.selected = true;
    morningSelect.appendChild(option2);
  });

  updateSlotInfoDisplays();
}

function updateSlotInfoDisplays() {
  const noonDest = destinationsData[appState.selectedNoonDay1];
  const morningDest = destinationsData[appState.selectedMorningDay2];

  const noonInfoEl = document.getElementById("slotNoonDay1Info");
  if (noonInfoEl && noonDest) {
    noonInfoEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> Cách Tân An: <strong>${noonDest.distanceText}</strong> (~${noonDest.driveTime}) | Giá vé: <strong>${noonDest.priceText}</strong>`;
  }

  const morningInfoEl = document.getElementById("slotMorningDay2Info");
  if (morningInfoEl && morningDest) {
    morningInfoEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> Cách Tân An: <strong>${morningDest.distanceText}</strong> (~${morningDest.driveTime}) | Giá vé: <strong>${morningDest.priceText}</strong>`;
  }
}

// ==========================================
// 7. MODE SWITCHING LOGIC
// ==========================================
function switchMode(modeNumber) {
  if (appState.currentMode === modeNumber) return;
  appState.currentMode = modeNumber;
  renderModeView();
  renderTimeline();
  updateBudgetCalculation();
}

function renderModeView() {
  const card1 = document.getElementById("modeCard1");
  const card2 = document.getElementById("modeCard2");
  const slotNoonDay1Container = document.getElementById("slotNoonDay1Container");
  const timelineTitle = document.getElementById("timelineTitle");
  const timelineDesc = document.getElementById("timelineDesc");
  const budgetModeIndicator = document.getElementById("budgetModeIndicator");

  if (appState.currentMode === 1) {
    card1.classList.add("active");
    card2.classList.remove("active");
    card1.querySelector(".btn-select-mode").innerHTML = '<span class="radio-indicator"></span> Đang chọn Chế độ 1';
    card2.querySelector(".btn-select-mode").innerHTML = '<span class="radio-indicator"></span> Chọn Chế độ 2';

    // Show Slot Noon Day 1
    slotNoonDay1Container.style.opacity = "1";
    slotNoonDay1Container.style.pointerEvents = "auto";
    slotNoonDay1Container.querySelector(".slot-badge").innerHTML = '<i class="fa-solid fa-sun"></i> Điểm trưa 10/10 (Ngày 1)';

    timelineTitle.innerHTML = 'Chi Tiết Lịch Trình (<span style="color:var(--primary-600);">Chế Độ 1: Khởi hành Sáng 10/10</span>)';
    timelineDesc.innerHTML = 'Lộ trình tối đa hóa 2 ngày: Sáng xuất phát sớm ➔ Trưa ghé <strong>' + destinationsData[appState.selectedNoonDay1].name + '</strong> ➔ Chiều tắm mát <strong>Hồ bơi Biển Đông Tân An</strong> ➔ Tối mở tiệc tại gia ➔ Sáng 11/10 khám phá <strong>' + destinationsData[appState.selectedMorningDay2].name + '</strong> ➔ Chiều về TP.HCM.';
    budgetModeIndicator.textContent = "Chế độ 1 (Khởi hành Sáng)";
  } else {
    card1.classList.remove("active");
    card2.classList.add("active");
    card1.querySelector(".btn-select-mode").innerHTML = '<span class="radio-indicator"></span> Chọn Chế độ 1';
    card2.querySelector(".btn-select-mode").innerHTML = '<span class="radio-indicator"></span> Đang chọn Chế độ 2';

    // Dim Slot Noon Day 1 in Mode 2 because departure is noon
    slotNoonDay1Container.style.opacity = "0.45";
    slotNoonDay1Container.style.pointerEvents = "none";
    slotNoonDay1Container.querySelector(".slot-badge").innerHTML = '<i class="fa-solid fa-ban"></i> Nghỉ trưa tại HCM (Chế độ 2)';

    timelineTitle.innerHTML = 'Chi Tiết Lịch Trình (<span style="color:var(--cyan-700);">Chế Độ 2: Khởi hành Trưa 10/10</span>)';
    timelineDesc.innerHTML = 'Lộ trình thư thả: Trưa ăn uống tại HCM rồi xuất phát về thẳng Tân An ➔ Chiều bơi lội tại <strong>Hồ bơi Biển Đông Công viên Tân An</strong> ➔ Tối thưởng thức tiệc món ngon chế biến sẵn mua về ➔ Sáng 11/10 tham quan <strong>' + destinationsData[appState.selectedMorningDay2].name + '</strong> ➔ Chiều về TP.HCM.';
    budgetModeIndicator.textContent = "Chế độ 2 (Khởi hành Trưa)";
  }
}

function onDestinationChange() {
  appState.selectedNoonDay1 = document.getElementById("selectNoonDay1").value;
  appState.selectedMorningDay2 = document.getElementById("selectMorningDay2").value;
  updateSlotInfoDisplays();
  renderModeView();
  renderTimeline();
  updateBudgetCalculation();
}

function resetDefaultDestinations() {
  appState.selectedNoonDay1 = "happyland";
  appState.selectedMorningDay2 = "tan-lap";
  document.getElementById("selectNoonDay1").value = "happyland";
  document.getElementById("selectMorningDay2").value = "tan-lap";
  onDestinationChange();
}

// ==========================================
// 8. TIMELINE RENDERING
// ==========================================
function showTimelineDay(dayNum) {
  appState.currentDayTab = dayNum;
  document.getElementById("btnDay1").classList.toggle("active", dayNum === 1);
  document.getElementById("btnDay2").classList.toggle("active", dayNum === 2);
  renderTimeline();
}

function renderTimeline() {
  const container = document.getElementById("timelineStream");
  const mode = appState.currentMode;
  const day = appState.currentDayTab;

  const destNoon = destinationsData[appState.selectedNoonDay1];
  const destMorning = destinationsData[appState.selectedMorningDay2];

  let items = [];

  if (day === 1) {
    if (mode === 1) {
      // MODE 1 - DAY 1 (Morning departure)
      items = [
        {
          time: "07:30 - 09:00",
          location: "TP.HCM ➔ Long An (Quốc Lộ 1A)",
          dotClass: "",
          title: "Khởi hành xe máy từ TP.HCM về Long An",
          desc: "Tập trung tại điểm hẹn TP.HCM (Vòng xoay An Lạc / Bình Tân), di chuyển xe máy theo trục Quốc Lộ 1A qua Bình Chánh ➔ Cầu Bến Lức ➔ TP. Tân An. Trên đường có thể dừng chân thưởng thức bánh canh Bến Lức hoặc uống nước mía/nước dừa tươi ven đường.",
          tip: "🛵 Tuyến xe máy: Đi thẳng theo Quốc Lộ 1A (không đi vào cao tốc). Đường nhựa phẳng đẹp, chạy đúng làn xe máy và giữ tốc độ 40-50 km/h an toàn."
        },
        {
          time: "09:30 - 13:30",
          location: `${destNoon.name} (${destNoon.distanceText})`,
          dotClass: "gold-dot",
          title: `Tham quan ${destNoon.name} & Thưởng thức Bữa Trưa`,
          desc: `Ghé thăm điểm du lịch <strong>${destNoon.name}</strong>. Trải nghiệm các hoạt động nổi bật: ${destNoon.highlights.join(", ")}. Sau đó dùng bữa trưa miệt vườn với các món đặc sản địa phương (Cá lóc đồng, canh chua, rau xanh).`,
          tip: `🎫 Chi phí vé ước tính: ${destNoon.priceText}. Thời gian vui chơi khoảng 2 - 3 tiếng.`
        },
        {
          time: "14:00 - 15:00",
          location: "Di chuyển xe máy về Trung tâm TP. Tân An",
          dotClass: "",
          title: "Về nhà tại Tân An nhận phòng, cất hành lý & nghỉ ngơi",
          desc: "Chạy xe máy về trung tâm TP. Tân An. Check-in cất đồ đạc, thay trang phục đồ bơi, chuẩn bị khăn tắm, kính bơi và nón bơi sẵn sàng cho buổi chiều thể thao dưới nước.",
          tip: "🏠 Chuẩn bị sẵn túi chống nước đựng điện thoại để thoải mái chụp ảnh tại hồ bơi."
        },
        {
          time: "15:30 - 17:30",
          location: "Hồ Bơi Biển Đông - Công Viên TP. Tân An (0 km)",
          dotClass: "cyan-dot",
          title: "Tắm Mát & Vui Chơi Tại Hồ Bơi Biển Đông Tân An",
          desc: "Đắm mình trong làn nước mát rượi tại <strong>Hồ bơi Biển Đông (Công viên Tân An)</strong>. Trải nghiệm bơi lội, chơi máng trượt nước, thư giãn dưới tán cây xanh rợp bóng mát của công viên trung tâm thành phố.",
          tip: "🏊 Điểm hẹn giải nhiệt lý tưởng nhất chiều Thứ Bảy. Vé vào cổng khoảng 30k - 50k/người."
        },
        {
          time: "17:45 - 18:30",
          location: "Các tiệm ăn / Chợ TP. Tân An",
          dotClass: "",
          title: "Mua các món ăn chế biến sẵn nóng hổi mang về",
          desc: "Chạy xe ghé các quán ngon Tân An mua các món ăn chế biến sẵn tiện lợi: vịt quay sốt tiêu da giòn, cá lóc nướng trui cuốn bánh tráng làm sẵn, set lẩu đóng gói sẵn, gỏi cuốn, bánh tráng và đồ uống.",
          tip: "🥡 Mua đồ chế biến sẵn giúp tiết kiệm thời gian, về nhà chỉ cần bày ra đĩa là dùng ngay, không phải nấu nướng vất vả."
        },
        {
          time: "19:00 - 22:30",
          location: "Không gian ấm cúng tại gia (Tân An)",
          dotClass: "gold-dot",
          title: "Đại Tiệc Ăn Uống Tại Gia & Giao Lưu Vui Vẻ",
          desc: "Bày biện bàn tiệc với các món ngon mua sẵn, bật bếp hâm nóng nồi lẩu, cuốn bánh tráng thưởng thức cùng bia mát lạnh. Kết hợp đàn hát acoustic, chơi boardgame và trò chuyện rôm rả đầm ấm.",
          tip: "🍻 Không gian riêng tư, ấm cúng và thoải mái không bị giới hạn thời gian như quán ăn bên ngoài."
        }
      ];
    } else {
      // MODE 2 - DAY 1 (Noon departure)
      items = [
        {
          time: "11:30 - 12:30",
          location: "TP.HCM",
          dotClass: "",
          title: "Ăn trưa nhẹ tại Sài Gòn & Chuẩn bị hành trang",
          desc: "Thong thả ăn trưa tại Sài Gòn, kiểm tra xăng xe máy, lốp xe, chuẩn bị áo khoác chống nắng, kính râm và đồ bơi trước khi lên đường.",
          tip: "🎒 Đổ đầy bình xăng xe máy từ trước để hành trình chạy xe liền mạch."
        },
        {
          time: "12:45 - 14:15",
          location: "TP.HCM ➔ TP. Tân An (~50 km theo QL1A)",
          dotClass: "",
          title: "Khởi hành xe máy theo Quốc Lộ 1A về TP. Tân An",
          desc: "Di chuyển xe máy theo Quốc Lộ 1A về thẳng TP. Tân An. Đường đi buổi trưa thông thoáng, mất khoảng 1h15 - 1h30 phút chạy xe thư thả.",
          tip: "🛵 Đi đúng làn đường xe 2 bánh, mang đầy đủ giấy tờ xe (bằng lái, bảo hiểm xe máy) và chạy đúng tốc độ quy định."
        },
        {
          time: "14:30 - 15:15",
          location: "TP. Tân An",
          dotClass: "",
          title: "Đến nhà tại Tân An, cất hành lý & chuẩn bị đi bơi",
          desc: "Đến nơi nghỉ ngơi uống nước mát, soạn sẵn đồ bơi, kính bơi và khăn tắm sẵn sàng xuất phát ra hồ bơi Biển Đông công viên Tân An.",
          tip: "👕 Mặc sẵn đồ bơi bên trong đồ dạo phố để đến hồ bơi không mất thời gian thay đồ."
        },
        {
          time: "15:30 - 17:30",
          location: "Hồ Bơi Biển Đông - Công Viên TP. Tân An (0 km)",
          dotClass: "cyan-dot",
          title: "Bơi Lội & Vui Chơi Tại Hồ Bơi Biển Đông Tân An",
          desc: "Trải nghiệm bơi lội sảng khoái và vui chơi máng trượt nước tại <strong>Hồ bơi Biển Đông (nằm trong khuôn viên Công viên TP. Tân An)</strong>. Nước mát trong lành, không khí trong lành nhiều cây xanh.",
          tip: "🏊 Vé vào cổng: ~30.000đ - 50.000đ/người. Bơi lội xong vừa đói bụng ăn tiệc tối cực ngon miệng!"
        },
        {
          time: "18:00 - 19:00",
          location: "Tân An",
          dotClass: "",
          title: "Ghé mua các món ăn chế biến sẵn & đồ uống về nhà",
          desc: "Tắm tráng nước ngọt xong, ghé mua vịt quay nóng hổi, cá lóc cuốn bánh tráng, set lẩu làm sẵn kèm bún rau và bia/nước ngọt mang về nhà chuẩn bị bàn tiệc.",
          tip: "🛍️ Đồ ăn mua sẵn tiện lợi, không phải nhóm than hay ướp nướng, giữ cho cả đoàn luôn thảnh thơi."
        },
        {
          time: "19:00 - 22:30",
          location: "Không gian tại gia (Tân An)",
          dotClass: "gold-dot",
          title: "Thưởng Thức Tiệc Tại Gia & Sinh Hoạt Vui Vẻ",
          desc: "Bày biện các món ngon mua sẵn, đun nóng nồi lẩu, thưởng thức bữa tối rôm rả kèm bia mát lạnh. Vui chơi văn nghệ, hát karaoke/acoustic và trò chuyện thâu đêm.",
          tip: "🎉 Bữa tiệc điểm nhấn tuyệt vời nhất kết nối tất cả các thành viên."
        }
      ];
    }
  } else {
    // DAY 2 (11/10/2026 - Sunday) - Applies for both modes
    items = [
      {
        time: "07:00 - 08:15",
        location: "Trung tâm TP. Tân An",
        dotClass: "",
        title: "Ăn sáng đặc sản Tân An & Thưởng thức Cà phê sáng",
        desc: "Thưởng thức điểm tâm sáng nức tiếng Tân An: <strong>Bún xiêm lo</strong> cá lóc nghệ vàng ươm, hoặc Hủ tiếu mì xá xíu giò heo. Sau đó ghé quán cà phê sân vườn thoáng đãng nhâm nhi ly cà phê sáng.",
        tip: "🍜 Bún xiêm lo là món ăn truyền thống đặc sắc giao thoa văn hóa Khmer - Việt tại Long An."
      },
      {
        time: "08:30 - 12:00",
        location: `${destMorning.name} (${destMorning.distanceText})`,
        dotClass: "gold-dot",
        title: `Khám phá Địa Điểm Du Lịch: ${destMorning.name}`,
        desc: `Di chuyển đến <strong>${destMorning.name}</strong>. Tham gia các hoạt động nổi bật: ${destMorning.highlights.join(", ")}. Tận hưởng không khí trong lành và chụp những bộ ảnh lưu niệm tuyệt đẹp.`,
        tip: `🌿 Khoảng cách: ${destMorning.distanceText} (~${destMorning.driveTime}). Giá vé: ${destMorning.priceText}.`
      },
      {
        time: "12:15 - 13:45",
        location: "Nhà hàng miệt vườn / Nhà vườn sinh thái",
        dotClass: "",
        title: "Bữa Trưa Dân Dã Đậm Chất Nam Bộ",
        desc: "Thưởng thức bữa trưa ngày Chủ Nhật với cơm niêu cá kho tộ, canh chua bông súng cá lóc đồng, tép mương xào bông điên điển, sườn ram mặn và trái cây tráng miệng.",
        tip: "🍚 Hương vị dân dã miền Tây vừa ngon miệng vừa bồi bổ sức khỏe cho chuyến về."
      },
      {
        time: "14:15 - 15:30",
        location: "Bến Lức / Châu Thành / Tân An",
        dotClass: "",
        title: "Mua Sắm Đặc Sản Làm Quà & Trả Phòng",
        desc: "Ghé mua sắm đặc sản Long An mang về TP.HCM: Thanh long ruột đỏ Châu Thành tươi ngọt, Rượu Đế Gò Đen chính hiệu, Lạp xưởng tươi Cần Đước, Đậu phộng Đức Hòa giòn bùi.",
        tip: "🎁 Mua trực tiếp tại lò hoặc nhà vườn vừa được giá sỉ rẻ vừa đảm bảo chất lượng ngon nhất."
      },
      {
        time: "16:00 - 17:30",
        location: "Long An ➔ TP.HCM (Quốc Lộ 1A)",
        dotClass: "cyan-dot",
        title: "Khởi hành xe máy trở về Sài Gòn - Kết thúc chuyến đi",
        desc: "Chạy xe máy theo trục Quốc Lộ 1A về lại TP.HCM. Đến nơi vào khoảng 17:30 chiều Chủ Nhật, kịp thời tắm rửa nghỉ ngơi và phục hồi năng lượng để chuẩn bị cho tuần mới tràn đầy hứng khởi!",
        tip: "🛵 Đi xe máy theo QL1A nên xuất phát trước 16:30 để tránh ùn ứ tại đoạn Cầu Bình Điền / Vòng xoay An Lạc chiều Chủ Nhật."
      }
    ];
  }

  // Render items to HTML
  container.innerHTML = items.map((item, index) => `
    <div class="timeline-item">
      <div class="timeline-dot ${item.dotClass}">
        <i class="fa-solid ${item.dotClass === 'cyan-dot' ? 'fa-water' : item.dotClass === 'gold-dot' ? 'fa-star' : 'fa-check'}" style="font-size:0.6rem; color:var(--primary-600);"></i>
      </div>
      <div class="timeline-card">
        <div class="timeline-meta">
          <span class="timeline-time"><i class="fa-regular fa-clock"></i> ${item.time}</span>
          <span class="timeline-location-tag"><i class="fa-solid fa-map-pin"></i> ${item.location}</span>
        </div>
        <h4 class="timeline-item-title">${item.title}</h4>
        <p class="timeline-item-desc">${item.desc}</p>
        ${item.tip ? `<div class="timeline-tips-badge"><i class="fa-solid fa-lightbulb"></i> ${item.tip}</div>` : ''}
      </div>
    </div>
  `).join('');
}

// ==========================================
// 9. DESTINATIONS CATALOG RENDERING
// ==========================================
function filterDestinations(type, btnElement) {
  appState.filterCategory = type;
  document.querySelectorAll("#typeFilter .chip").forEach(c => c.classList.remove("active"));
  btnElement.classList.add("active");
  renderDestinationsGrid();
}

function sortDestinations(sortBy) {
  appState.sortBy = sortBy;
  renderDestinationsGrid();
}

function renderDestinationsGrid() {
  const grid = document.getElementById("destinationsGrid");
  let items = Object.values(destinationsData);

  // Filter
  if (appState.filterCategory !== "all") {
    items = items.filter(d => d.category === appState.filterCategory);
  }

  // Sort
  items.sort((a, b) => {
    if (appState.sortBy === "dist-asc") return a.distance - b.distance;
    if (appState.sortBy === "dist-desc") return b.distance - a.distance;
    if (appState.sortBy === "price-asc") return a.ticketPrice - b.ticketPrice;
    if (appState.sortBy === "price-desc") return b.ticketPrice - a.ticketPrice;
    return 0;
  });

  grid.innerHTML = items.map(d => `
    <div class="dest-card">
      <div class="dest-card-banner ${d.theme}">
        <div class="dest-badge-row">
          <span class="dest-type-badge">${d.categoryName}</span>
          <span class="dest-distance-pill"><i class="fa-solid fa-route"></i> ${d.distance === 0 ? 'Trung tâm Tân An (0 km)' : d.distanceText}</span>
        </div>
        <div class="dest-title-overlay">
          <h3 class="dest-card-name">${d.name}</h3>
        </div>
      </div>

      <div class="dest-card-body">
        <div class="dest-info-metrics">
          <div class="dest-metric-item">
            <span class="dest-metric-lbl">Giá vé tham quan:</span>
            <span class="dest-metric-val">${d.priceText}</span>
          </div>
          <div class="dest-metric-item">
            <span class="dest-metric-lbl">Thời gian di chuyển:</span>
            <span class="dest-metric-val">${d.driveTime}</span>
          </div>
        </div>

        <p class="dest-card-summary">${d.summary}</p>

        <ul class="dest-highlights-list">
          ${d.highlights.slice(0, 2).map(h => `<li><i class="fa-solid fa-circle-check"></i> <span>${h}</span></li>`).join('')}
        </ul>

        <div class="dest-card-actions">
          ${d.id !== 'ho-boi-bien-dong' ? `
            <button class="btn-card-action btn-card-pick" onclick="pickDestinationToSlot('${d.id}')">
              <i class="fa-solid fa-plus"></i> Chọn vào lịch trình
            </button>
          ` : `
            <span class="btn-card-action" style="background:var(--cyan-100); color:var(--cyan-700); cursor:default;">
              <i class="fa-solid fa-lock"></i> Đã cố định chiều 10/10
            </span>
          `}
          <a href="${d.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-map" title="Mở Google Maps">
            <i class="fa-solid fa-diamond-turn-right"></i> Maps
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function pickDestinationToSlot(destId) {
  if (appState.currentMode === 1) {
    // Mode 1: Offer option or set to day 2
    appState.selectedMorningDay2 = destId;
    document.getElementById("selectMorningDay2").value = destId;
  } else {
    // Mode 2: Set to Day 2 morning
    appState.selectedMorningDay2 = destId;
    document.getElementById("selectMorningDay2").value = destId;
  }
  onDestinationChange();
  
  // Scroll to customizer
  document.getElementById("customizerBox").scrollIntoView({ behavior: 'smooth' });
  showToast(`Đã chọn "${destinationsData[destId].name}" vào lịch trình sáng ngày 11/10!`);
}

// ==========================================
// 10. SMART BUDGET CALCULATOR
// ==========================================
function changeMemberCount(delta) {
  const newCount = appState.memberCount + delta;
  if (newCount >= 1 && newCount <= 30) {
    appState.memberCount = newCount;
    document.getElementById("memberCountDisplay").textContent = newCount;
    updateBudgetCalculation();
  }
}

function updateBudgetSlider(val) {
  appState.partyBudgetPerPerson = parseInt(val, 10);
  const formatted = new Intl.NumberFormat('vi-VN').format(appState.partyBudgetPerPerson);
  let tierName = "Món mua sẵn cơ bản";
  if (appState.partyBudgetPerPerson >= 300000) tierName = "Cao cấp (Hải sản mua sẵn + Vịt quay + Lẩu)";
  else if (appState.partyBudgetPerPerson >= 200000) tierName = "Thịnh soạn (Vịt quay, lẩu sẵn, gỏi, nem nướng)";
  
  document.getElementById("partyTierLabel").textContent = `${tierName} (${formatted}đ/người)`;
  updateBudgetCalculation();
}

function updateBudgetCalculation() {
  const members = appState.memberCount;
  const mode = appState.currentMode;
  
  // Vehicle radio value
  const selectedVehicleRadio = document.querySelector('input[name="vehicleChoice"]:checked');
  if (selectedVehicleRadio) {
    appState.vehicleType = selectedVehicleRadio.value;
  }

  // 1. Entrance Tickets
  const poolTicket = 40000 * members; // Hồ bơi Biển Đông
  const day2DestTicket = destinationsData[appState.selectedMorningDay2].ticketPrice * members;
  const day1DestTicket = (mode === 1) ? (destinationsData[appState.selectedNoonDay1].ticketPrice * members) : 0;
  const totalTickets = poolTicket + day2DestTicket + day1DestTicket;

  // 2. Meals along the road
  const lunchDay1Cost = (mode === 1) ? (90000 * members) : 0; // Mode 2 eats at home/HCM before start
  const breakfastDay2Cost = 45000 * members; // Bún xiêm lo + cafe
  const lunchDay2Cost = 100000 * members; // Bữa trưa dân dã ngày 2
  const totalMeals = lunchDay1Cost + breakfastDay2Cost + lunchDay2Cost;

  // 3. Home Party Budget (Tối 10/10) - Ready-made food
  const totalHomeParty = appState.partyBudgetPerPerson * members;

  // 4. Transportation / Gas / Toll
  let transportCost = 0;
  let transportDesc = "";
  if (appState.vehicleType === "motorbike") {
    const bikesNeeded = Math.ceil(members / 2);
    transportCost = bikesNeeded * 120000; // Xăng xe máy khứ hồi
    transportDesc = `Xe máy (${bikesNeeded} xe × 120.000đ xăng)`;
  } else if (appState.vehicleType === "car") {
    const carsNeeded = Math.ceil(members / 5);
    transportCost = carsNeeded * 550000; // Xăng + Phí cao tốc
    transportDesc = `Ô tô riêng (${carsNeeded} xe: Xăng + Phí cao tốc)`;
  } else if (appState.vehicleType === "rental") {
    transportCost = (members <= 7) ? 1800000 : 2800000; // Thuê xe 7-16 chỗ 2 ngày
    transportDesc = `Thuê xe dịch vụ ${members <= 7 ? '7 chỗ' : '16 chỗ'} trọn gói 2 ngày`;
  }

  // Grand Total
  const grandTotal = totalTickets + totalMeals + totalHomeParty + transportCost;
  const perPerson = Math.round(grandTotal / members);

  // Render breakdown items
  const formatMoney = (num) => new Intl.NumberFormat('vi-VN').format(num) + ' VNĐ';

  const itemsListEl = document.getElementById("budgetItemsList");
  itemsListEl.innerHTML = `
    <div class="budget-line-item">
      <span><i class="fa-solid fa-water"></i> Vé Hồ bơi Biển Đông Tân An (${members} người):</span>
      <strong>${formatMoney(poolTicket)}</strong>
    </div>
    ${mode === 1 ? `
    <div class="budget-line-item">
      <span><i class="fa-solid fa-ticket"></i> Vé tham quan Trưa 10/10 (${destinationsData[appState.selectedNoonDay1].name}):</span>
      <strong>${formatMoney(day1DestTicket)}</strong>
    </div>
    ` : ''}
    <div class="budget-line-item">
      <span><i class="fa-solid fa-ticket"></i> Vé tham quan Sáng 11/10 (${destinationsData[appState.selectedMorningDay2].name}):</span>
      <strong>${formatMoney(day2DestTicket)}</strong>
    </div>
    <div class="budget-line-item">
      <span><i class="fa-solid fa-utensils"></i> Ăn uống dọc đường (Ăn trưa ${mode === 1 ? 'N1+N2' : 'N2'} & Ăn sáng N2):</span>
      <strong>${formatMoney(totalMeals)}</strong>
    </div>
    <div class="budget-line-item">
      <span><i class="fa-solid fa-bag-shopping"></i> Món ăn chế biến sẵn mua về tiệc tối 10/10:</span>
      <strong>${formatMoney(totalHomeParty)}</strong>
    </div>
    <div class="budget-line-item">
      <span><i class="fa-solid fa-gas-pump"></i> Di chuyển & Cầu đường (${transportDesc}):</span>
      <strong>${formatMoney(transportCost)}</strong>
    </div>
  `;

  document.getElementById("grandTotalPrice").textContent = formatMoney(grandTotal);
  document.getElementById("perPersonPrice").textContent = `${formatMoney(perPerson)} / người`;
}

// ==========================================
// 11. COPY SCHEDULE & SHARING
// ==========================================
function copyScheduleText() {
  const modeName = appState.currentMode === 1 ? "CHẾ ĐỘ 1 (Khởi hành SÁNG 10/10/2026 - Đi Xe Máy)" : "CHẾ ĐỘ 2 (Khởi hành TRƯA 10/10/2026 - Đi Xe Máy)";
  const destNoon = destinationsData[appState.selectedNoonDay1].name;
  const destMorning = destinationsData[appState.selectedMorningDay2].name;

  let text = `🌟 KẾ HOẠCH DU LỊCH HCM ➔ LONG AN (10/10/2026 - 11/10/2026) 🌟\n`;
  text += `👉 ${modeName}\n\n`;
  
  if (appState.currentMode === 1) {
    text += `📅 NGÀY 1 (Thứ 7 - 10/10/2026):\n`;
    text += `- 07:30: Xuất phát xe máy theo Quốc Lộ 1A từ TP.HCM về Long An\n`;
    text += `- 09:30 - 13:30: Tham quan ${destNoon} & Ăn trưa đặc sản\n`;
    text += `- 14:00 - 15:00: Về trung tâm TP. Tân An nhận phòng, cất hành lý\n`;
    text += `- 15:30 - 17:30: Tắm mát & Vui chơi tại HỒ BƠI BIỂN ĐÔNG (Công viên TP. Tân An)\n`;
    text += `- 17:45 - 18:30: Mua món ăn chế biến sẵn nóng hổi (vịt quay, cá lóc cuốn bánh tráng, lẩu sẵn)\n`;
    text += `- 19:00+: Tiệc tại gia đầm ấm với các món mua sẵn tiện lợi, đàn hát vui chơi\n\n`;
  } else {
    text += `📅 NGÀY 1 (Thứ 7 - 10/10/2026):\n`;
    text += `- 12:45: Xuất phát xe máy theo Quốc Lộ 1A về thẳng TP. Tân An\n`;
    text += `- 14:30: Về đến nhà tại Tân An, cất hành lý & chuẩn bị đồ bơi\n`;
    text += `- 15:30 - 17:30: Bơi lội giải nhiệt tại HỒ BƠI BIỂN ĐÔNG (Công viên TP. Tân An)\n`;
    text += `- 18:00 - 19:00: Mua món ăn chế biến sẵn nóng hổi & đồ uống về nhà\n`;
    text += `- 19:00+: Thưởng thức tiệc tại gia với các món mua sẵn, trò chuyện văn nghệ sum vầy\n\n`;
  }

  text += `📅 NGÀY 2 (Chủ Nhật - 11/10/2026):\n`;
  text += `- 07:00: Điểm tâm sáng bún xiêm lo Tân An & Cà phê sáng\n`;
  text += `- 08:30 - 12:00: Tham quan vui chơi tại ${destMorning}\n`;
  text += `- 12:15 - 13:45: Ăn trưa cơm quê miệt vườn Nam Bộ\n`;
  text += `- 14:15 - 15:30: Mua quà đặc sản (Rượu Gò Đen, Thanh long Châu Thành)\n`;
  text += `- 16:00: Khởi hành xe máy theo Quốc Lộ 1A về lại TP.HCM. Kết thúc chuyến đi tuyệt vời!\n\n`;
  text += `💰 Dự toán chi phí bình quân: ${document.getElementById("perPersonPrice").textContent}\n`;

  navigator.clipboard.writeText(text).then(() => {
    showToast("Đã sao chép lịch trình! Hãy dán vào Zalo/Messenger nhóm nhé!");
  }).catch(err => {
    console.error("Copy failed", err);
    showToast("Đã chọn toàn bộ lịch trình!");
  });
}

function showToast(message) {
  const toast = document.getElementById("shareToast");
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
