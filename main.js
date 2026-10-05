// Cấu trúc danh sách các địa điểm hiển thị bên Sidebar
const locations = [
    {
        id: "o-quan-chuong",
        title: "Ô Quan Chưởng",
        icon: "fa-archway",
        shortDesc: "Vết sẹo thời gian, cửa ô duy nhất còn sót lại của Thăng Long xưa.",
        startScene: "oquanchuong_congchinh", // Scene sẽ load khi click vào sidebar
        lng: 105.85215,
        lat: 21.03964,
        intro: {
            title: "Ô Quan Chưởng",
            story: "Bạn đang đứng trước lằn ranh lịch sử của Kinh thành Thăng Long xưa. Gần 300 năm trước, đây từng là trạm gác phòng thủ tiền tiêu và thu thuế, ngăn cách khu phố Hàng Chiếu buôn bán sầm uất với bờ đê sông Hồng mênh mông bãi bồi. Qua vòm cổng này là bước vào 36 phố phường. Ngày nay, dù rào chắn bằng gỗ gai đã không còn, thay vào đó là biển hiệu quảng cáo và nhịp sống đô thị hối hả, Ô Quan Chưởng vẫn hiên ngang đứng đó như một 'người lính già gác cửa'. Bước xuyên qua cổng vòm này, là bạn đang bước xuyên qua hàng trăm năm lịch sử của Hà Nội.",
            icon: "fa-landmark",
            image: "oquanchuong/oquanchuong.jpg",
            audio: "oquanchuong/audio/oquanchuong.mp3"
        }
    },

    {
        id: "dong-xuan",
        title: "Chợ Đồng Xuân",
        icon: "fa-store",
        shortDesc: "Khu chợ sầm uất bậc nhất Bắc Kỳ và chứng nhân 60 ngày đêm khói lửa.",
        startScene: "dong-xuan",
        lng: 105.85044,
        lat: 21.03788,
        intro: {
            title: "Chợ Đồng Xuân",
            story: "Đây là đài quan sát sự vươn mình của nền kinh tế Kẻ Chợ. Từ một bãi đất trống hợp lưu của sông Tô Lịch và sông Hồng, khu vực này vươn lên thành trung tâm thương mại sầm uất bậc nhất Bắc Kỳ, nơi giao thương nhộn nhịp cảnh \"trên bến dưới thuyền\" và phân phối hàng hóa đi khắp cả nước.",
            icon: "fa-store",
            image: "chodongxuan/cho-dong-xuan.jpg",
            audio: "chodongxuan/audio/chodongxuan.mp3"
        }
    }
];

// Cấu trúc chi tiết tất cả các không gian 360 (Scenes)
const scenesData = {
    // ---- NHÓM: Ô QUAN CHƯỞNG ----
    "oquanchuong_congchinh": {
        locationId: "o-quan-chuong", // Để highlight sidebar
        title: "Cổng chính Ô Quan Chưởng",
        panorama: "oquanchuong/congchinh.jpg", 
        hotSpots: [
            {
                type: "info",
                pitch: 22, // Hạ xuống xíu
                yaw: -10,
                title: "Vọng Lâu",
                story: "Tầng trên cùng được xây theo kiến trúc vọng lâu bát giác, từng là đài quan sát của lính canh. Ẩn sau lớp mái uốn cong rêu phong hiện nay là một ban thờ nhỏ nghi ngút khói hương. Giữa nhịp sống ồn ào của máy nổ và còi xe bên dưới, Vọng lâu giữ lại một cõi tâm linh tĩnh lặng. Người dân phố Hàng Chiếu vẫn thường lên đây thắp hương, tưởng nhớ vị Chưởng cơ oanh liệt năm xưa.",
                icon: "fa-gopuram",
                image: "oquanchuong/vonglau.jpg",
                audio: "oquanchuong/audio/vonglau.mp3"
            },
            {
                type: "info",
                pitch: -3,
                yaw: -45, // Đẩy ra xa mép trái
                title: "Lối đi ngách trái",
                story: "Ngày xưa, cửa chính giữa dành cho quan lại đi ngựa, ngồi kiệu; hai cửa ngách nhỏ hơn dành cho dân thường gánh gồng qua lại. Ngày nay, những vòm cửa này ôm trọn lấy văn hóa vỉa hè Hà Nội. Chúng trở thành nơi chở che cho những gánh hàng rong, xe hoa quả hay quán trà đá. Ô Quan Chưởng không phải là một di tích đóng cửa im ỉm, mà vẫn ngày đêm 'thở' cùng nhịp mưu sinh nhộn nhịp của phố cổ.",
                icon: "fa-door-open",
                image: "oquanchuong/cuangach.jpg",
                audio: "oquanchuong/audio/ngach.mp3"
            },
            {
                type: "info",
                pitch: -3,
                yaw: 35, // Đẩy ra xa mép phải
                title: "Lối đi ngách phải",
                story: "Ngày xưa, cửa chính giữa dành cho quan lại đi ngựa, ngồi kiệu; hai cửa ngách nhỏ hơn dành cho dân thường gánh gồng qua lại. Ngày nay, những vòm cửa này ôm trọn lấy văn hóa vỉa hè Hà Nội. Chúng trở thành nơi chở che cho những gánh hàng rong, xe hoa quả hay quán trà đá. Ô Quan Chưởng không phải là một di tích đóng cửa im ỉm, mà vẫn ngày đêm 'thở' cùng nhịp mưu sinh nhộn nhịp của phố cổ.",
                icon: "fa-door-open",
                image: "oquanchuong/cuangach.jpg",
                audio: "oquanchuong/audio/ngach.mp3"
            },
            {
                type: "scene",
                pitch: -10, 
                yaw: 0,
                text: "Xem bia đá",
                icon: "fa-shoe-prints",
                sceneId: "oquanchuong_phienda",
                targetYaw: -105,
                targetPitch: 5
            }
        ]
    },
    "oquanchuong_phienda": {
        locationId: "o-quan-chuong",
        title: "Tấm bia đá lịch sử",
        panorama: "oquanchuong/phienda.jpg",
        hotSpots: [
            {
                type: "info",
                pitch: 5,
                yaw: -105, 
                title: "Tấm bia lệnh năm 1881",
                story: "Năm 1881, Tổng đốc Hoàng Diệu cho khắc tấm bia đá này, ban lệnh nghiêm cấm lính canh hạch sách, nhũng nhiễu hay thu tiền mãi lộ của người dân khi qua lại cửa ô, đặc biệt là những nhà có tang sự. Hơn một thế kỷ trôi qua, tấm bia vẫn nằm khiêm nhường trong hốc tường gạch, như một minh chứng cho nếp cai trị trọng dân, thương dân của những bậc quan phụ mẫu thuở trước.",
                icon: "fa-scroll",
                image: "oquanchuong/TongdocHoangDieu.jpg",
                extraImage: "oquanchuong/biada.jpg",
                audio: "oquanchuong/audio/phienda.mp3"
            },
            {
                type: "scene",
                pitch: -20,
                yaw: 160,
                text: "Quay ra mặt trước",
                icon: "fa-arrow-rotate-left",
                sceneId: "oquanchuong_congchinh",
                targetYaw: 0,
                targetPitch: 0
            },
            {
                type: "scene",
                pitch: -15,
                yaw: -20,
                text: "Đi xuyên qua cổng sau",
                icon: "fa-shoe-prints",
                sceneId: "oquanchuong_congsau",
                targetYaw: 180,
                targetPitch: 0
            }
        ]
    },
    "oquanchuong_congsau": {
        locationId: "o-quan-chuong",
        title: "Mặt sau Ô Quan Chưởng (Đông Hà Môn)",
        panorama: "oquanchuong/phanbang.jpg",
        hotSpots: [
            {
                type: "info",
                pitch: 15, 
                yaw: 180,
                title: "Đông Hà Môn",
                story: "Tên chính thức được đắp nổi trên cổng là Đông Hà Môn – Cửa ô phía Đông phường Đông Hà. Nhưng người dân chỉ gọi đây là Ô Quan Chưởng. Năm 1873, khi quân Pháp nổ súng đánh chiếm Hà Nội lần thứ nhất, một viên Chưởng cơ cùng hơn 100 binh sĩ nhà Nguyễn đã thề tử thủ tại đây. Họ chiến đấu đến giọt máu cuối cùng để bảo vệ thành. Cái tên Ô Quan Chưởng ra đời từ đó, cất lên từ lòng xót thương và tự hào của dân kinh kỳ.",
                icon: "fa-font",
                image: "oquanchuong/bangchu.png",
                audio: "oquanchuong/audio/bangchu.mp3"
            },
            {
                type: "scene",
                pitch: -20,
                yaw: 180,
                text: "Quay lại mặt trước",
                icon: "fa-arrow-rotate-left",
                sceneId: "oquanchuong_congchinh",
                targetYaw: 0,
                targetPitch: 0
            }
        ]
    },

    // ---- NHÓM: HỒ HOÀN KIẾM ----
    "hoan-kiem": {
        locationId: "hoan-kiem",
        title: "Hồ Hoàn Kiếm",
        panorama: "panorama.jpg", // Tạm dùng chung
        hotSpots: [
            {
                type: "info",
                pitch: 0,
                yaw: 10,
                title: "Tháp Rùa",
                story: "Ngọn tháp thiêng nằm giữa hồ, gắn với truyền thuyết vua Lê Thái Tổ hoàn gươm báu cho Rùa Thần sau khi đánh tan giặc Minh. Biểu tượng của khát vọng hòa bình của dân tộc Việt.",
                icon: "fa-monument",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hoan_Kiem_Lake%2C_Hanoi_%282019%29.jpg/800px-Hoan_Kiem_Lake%2C_Hanoi_%282019%29.jpg"
            },
            {
                type: "scene",
                pitch: -20,
                yaw: 180,
                text: "Quay lại Ô Quan Chưởng",
                icon: "fa-shoe-prints",
                sceneId: "oquanchuong_congchinh"
            }
        ]
    },

    // ---- NHÓM: CHỢ ĐỒNG XUÂN ----
    "dong-xuan": {
        locationId: "dong-xuan",
        title: "Chợ Đồng Xuân",
        panorama: "chodongxuan/chodongxuan.jpg",
        yaw: 90, // Tự động quay sang phải khi mới load
        hotSpots: [
            {
                type: "info",
                pitch: 5,
                yaw: 90,
                title: "Chợ Đồng Xuân",
                story: "Đây là đài quan sát sự vươn mình của nền kinh tế Kẻ Chợ. Từ một bãi đất trống hợp lưu của sông Tô Lịch và sông Hồng, khu vực này vươn lên thành trung tâm thương mại sầm uất bậc nhất Bắc Kỳ, nơi giao thương nhộn nhịp cảnh \"trên bến dưới thuyền\" và phân phối hàng hóa đi khắp cả nước.",
                icon: "fa-store",
                image: "chodongxuan/cho-dong-xuan.jpg",
                audio: "chodongxuan/audio/chodongxuan.mp3"
            },
            {
                type: "scene",
                pitch: 2,
                yaw: 30,
                text: "Xem Bức phù điêu",
                icon: "fa-shoe-prints",
                sceneId: "dongxuan_phudieu",
                targetYaw: 115,
                targetPitch: 0
            },
            {
                type: "scene",
                pitch: -20,
                yaw: 180,
                text: "Đến Hồ Hoàn Kiếm",
                icon: "fa-shoe-prints",
                sceneId: "hoan-kiem"
            },
            {
                type: "scene",
                pitch: -5,
                yaw: 90,
                text: "Vào trong",
                icon: "fa-door-open",
                sceneId: "dongxuan_bentrong"
            }
        ]
    },
    "dongxuan_bentrong": {
        locationId: "dong-xuan",
        title: "Bên trong Chợ Đồng Xuân",
        panorama: "chodongxuan/bentrong.jpg",
        yaw: -75,
        autoInfo: {
            title: "Bên trong Chợ Đồng Xuân",
            story: "Bước qua vòm cửa, bạn đang đứng tại trái tim giao thương của Phố cổ. Dưới mái vòm thép khổng lồ này, nhịp sống Kẻ Chợ đã chảy trôi suốt hơn một thế kỷ. Hãy hòa mình vào tiếng ngã giá xôn xao, mùi hương hồi quế phảng phất, và chạm vào các điểm sáng để khám phá những lớp lang lịch sử ẩn giấu ngay giữa đời thường!",
            image: "chodongxuan/bentrongchodongxuan.jpg",
            audio: "chodongxuan/audio/bentrong.mp3"
        },
        hotSpots: [
            {
                type: "info",
                pitch: 25,
                yaw: 0,
                targetHfov: 40,
                title: "Đại hỏa hoạn 1994",
                story: "Ngước nhìn lên hệ thống vì kèo thép kiên cố này, ít ai ngờ rằng nó từng bị nung chảy trong một biển lửa. Đêm ngày 14 tháng 7 năm 1994, trận đại hỏa hoạn tàn khốc nhất lịch sử Hà Nội đã thiêu rụi toàn bộ không gian bên trong chợ. Hàng nghìn tiểu thương trắng tay chỉ sau một đêm. Phép màu duy nhất là dãy mặt tiền 5 vòm cửa cuốn vẫn kiên cường trụ vững. Không gian sầm uất mà bạn đang thấy hôm nay là thành quả phục dựng từ đống tro tàn, một minh chứng vĩ đại cho sức sống mãnh liệt và khả năng gượng dậy của những con người bám trụ lại đất Kẻ Chợ.",
                icon: "fa-fire",
                image: "chodongxuan/chaychodongxuan.jpg",
                audio: "chodongxuan/audio/chaychodongxuan.mp3"
            },
            {
                type: "info",
                pitch: -45, // Nhìn xuống nền gạch
                yaw: 0,
                targetHfov: 40, // Zoom sâu xuống nền
                title: "Tô Lịch dưới nền gạch",
                story: "Ngay dưới lớp nền gạch bạn đang đứng từng là một ngã ba sông sầm uất. Trước năm 1889, nơi đây chính là khúc hợp lưu đổ ra sông Hồng của dòng sông Tô Lịch. Để quy hoạch lại thành phố, chính quyền Pháp đã quyết định lấp hẳn đoạn sông này để cất lên tòa nhà Chợ Đồng Xuân. Sự kiện lấp sông không chỉ làm thay đổi hoàn toàn diện mạo địa lý, mà còn vĩnh viễn khép lại kỷ nguyên giao thương 'trên bến dưới thuyền' truyền thống kéo dài hàng thế kỷ của kinh thành Thăng Long.",
                icon: "fa-water", // Biểu tượng dòng sông
                image: "chodongxuan/gachchodongxuan.jpg",
                audio: "chodongxuan/audio/gachchodongxuan.mp3"
            },
            {
                type: "scene",
                pitch: -15,
                yaw: 180,
                text: "Quay ra ngoài",
                icon: "fa-arrow-rotate-left",
                sceneId: "dong-xuan",
                targetYaw: 90,
                targetPitch: 0
            }
        ]
    },
    "dongxuan_phudieu": {
        locationId: "dong-xuan",
        title: "Bức phù điêu Hà Nội - Mùa đông 1946",
        panorama: "chodongxuan/hnmd1946.jpg",
        yaw: 115,
        hfov: 80, // Zoom lại gần bức phù điêu
        hotSpots: [
            {
                type: "info",
                pitch: -2,
                yaw: 115,
                targetHfov: 35,
                title: "Bức phù điêu Hà Nội - Mùa đông 1946",
                story: "Chợ Đồng Xuân không chỉ là nơi buôn bán, mà còn là một chứng nhân lịch sử bi tráng. Bức phù điêu bằng đồng này khắc ghi lại trận đánh giáp lá cà khốc liệt ngày 14 tháng 2 năm 1947. Trong những ngày \"Quyết tử để Tổ quốc quyết sinh\", những chàng trai, cô gái của Tiểu đoàn 101 Cảm tử quân đã biến chính các sạp hàng, bàn ghế nơi đây thành chiến lũy. Bằng bom ba càng và chai cháy, họ kiên cường đánh bật xe tăng và lính lê dương Pháp, lấy máu thịt mình cầm chân quân thù để đồng bào rút lui an toàn.",
                icon: "fa-monument",
                image: "chodongxuan/muadong1946.jpg",
                audio: "chodongxuan/audio/muadong1946.mp3"
            },
            {
                type: "scene",
                pitch: -20,
                yaw: 180,
                text: "Quay lại Chợ Đồng Xuân",
                icon: "fa-arrow-rotate-left",
                sceneId: "dong-xuan",
                targetYaw: 90,
                targetPitch: 0
            },
            {
                type: "scene",
                pitch: -5,
                yaw: 60, // Ngõ bên cạnh (trái)
                text: "Vào Chùa Huyền Thiên Quán",
                icon: "fa-vihara",
                sceneId: "dongxuan_chuahuyenthien",
                targetYaw: -90 // nhìn bên trái
            }
        ]
    },
    "dongxuan_chuahuyenthien": {
        locationId: "dong-xuan",
        title: "Chùa Huyền Thiên Quán",
        panorama: "chodongxuan/chuahuyenthienquan.jpg",
        yaw: -90, // nhìn bên trái
        autoInfo: {
            title: "Chùa Huyền Thiên Quán",
            story: "Sự kỳ diệu của Phố cổ chính là ranh giới mong manh giữa thần linh và người phàm. Nằm lọt thỏm giữa phố Hàng Khoai – nơi giao thương ồn ào và xô bồ bậc nhất, lại là Chùa Huyền Thiên (vốn là Huyền Thiên Quán, một trong Thăng Long Tứ Quán linh thiêng bảo vệ kinh thành). Chỉ bước qua một bậu cửa gỗ, bạn đã bỏ lại mọi náo nhiệt phía sau để bước vào không gian tâm linh tĩnh lặng đã tồn tại hàng ngàn năm.",
            image: "chodongxuan/chuahuyenthien.jpg",
            audio: "chodongxuan/audio/chuahuyenthien.mp3"
        },
        hotSpots: [
            {
                type: "scene",
                pitch: -15,
                yaw: 180,
                text: "Quay ra ngõ",
                icon: "fa-arrow-rotate-left",
                sceneId: "dongxuan_phudieu",
                targetYaw: -120,
                targetPitch: 0
            }
        ]
    }
};

let viewer = null;
let currentAudio = new Audio();
let isPlaying = false;
let introShown = { "o-quan-chuong": false };
let maplibreMap = null;

function initMap() {
    maplibreMap = new maplibregl.Map({
        container: 'maplibre-map',
        style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
        center: [105.851, 21.0385],
        zoom: 15.5,
        pitch: 60,
        bearing: -17.6,
        antialias: true
    });

    maplibreMap.on('load', () => {
        // Add 3D buildings layer
        const layers = maplibreMap.getStyle().layers;
        let labelLayerId;
        for (let i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                labelLayerId = layers[i].id;
                break;
            }
        }

        maplibreMap.addLayer({
            'id': '3d-buildings',
            'source': 'carto',
            'source-layer': 'building',
            'type': 'fill-extrusion',
            'minzoom': 14,
            'paint': {
                'fill-extrusion-color': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    14, '#1f2937',
                    22, '#374151'
                ],
                'fill-extrusion-height': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    14, 0,
                    15, 15
                ],
                'fill-extrusion-base': 0,
                'fill-extrusion-opacity': 0.8
            }
        }, labelLayerId);

        locations.forEach(loc => {
            const el = document.createElement('div');
            el.className = 'map-marker';
            el.innerHTML = `
                <div class="marker-pulse"></div>
                <div class="marker-icon-container"><i class="fas ${loc.icon}"></i></div>
                <div class="marker-label">${loc.title}</div>
            `;
            
            new maplibregl.Marker({ element: el })
                .setLngLat([loc.lng, loc.lat])
                .addTo(maplibreMap);
                
            el.addEventListener('click', () => {
                flyAndOpenViewer(loc.id);
            });
        });
    });
}

function renderMapSidebar() {
    const listContainer = document.getElementById('map-locations-list');
    const searchInput = document.getElementById('map-search');
    
    const renderList = (filter = "") => {
        listContainer.innerHTML = '';
        locations.forEach(loc => {
            if (loc.title.toLowerCase().includes(filter.toLowerCase()) || loc.shortDesc.toLowerCase().includes(filter.toLowerCase())) {
                const card = document.createElement('div');
                card.className = 'dash-loc-card';
                card.innerHTML = `
                    <div class="dash-loc-icon"><i class="fas ${loc.icon}"></i></div>
                    <div class="dash-loc-info">
                        <h3>${loc.title}</h3>
                        <p>${loc.shortDesc}</p>
                    </div>
                `;
                card.addEventListener('click', () => {
                    flyAndOpenViewer(loc.id);
                });
                listContainer.appendChild(card);
            }
        });
    };
    
    renderList();
    
    searchInput.addEventListener('input', (e) => {
        renderList(e.target.value);
    });
}

function flyAndOpenViewer(locId) {
    const loc = locations.find(l => l.id === locId);
    
    // Zoom sát xuống đất, bay nhanh hơn (speed 1.5)
    maplibreMap.flyTo({ center: [loc.lng, loc.lat], zoom: 20, pitch: 75, speed: 1.5, curve: 1.2 });
    
    // Fade out và scale in ngay trong lúc đang bay (sau 600ms)
    setTimeout(() => {
        const homeView = document.getElementById('home-view');
        homeView.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        homeView.style.opacity = '0';
        homeView.style.transform = 'scale(1.2)';
        
        // Mở 360 viewer nối tiếp liền mạch
        setTimeout(() => {
            open360Viewer(locId);
        }, 500);
    }, 600);
}

function open360Viewer(locId) {
    const homeView = document.getElementById('home-view');
    const viewerView = document.getElementById('viewer-view');

    homeView.classList.add('hidden');
    viewerView.classList.remove('hidden');
    
    // Reset lại Home View để lần sau dùng
    homeView.style.opacity = '1';
    homeView.style.transform = 'scale(1)';
    
    // Animation mở 360 Viewer mượt mà
    viewerView.style.opacity = '0';
    viewerView.style.transform = 'scale(0.9)';
    viewerView.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    // Ép trình duyệt render lại (reflow)
    void viewerView.offsetWidth;
    
    viewerView.style.opacity = '1';
    viewerView.style.transform = 'scale(1)';
    
    const loc = locations.find(l => l.id === locId);
    
    if (!viewer) {
        initPannellum(loc.startScene);
    } else {
        const targetPitch = scenesData[loc.startScene].pitch !== undefined ? scenesData[loc.startScene].pitch : 0;
        const targetYaw = scenesData[loc.startScene].yaw !== undefined ? scenesData[loc.startScene].yaw : 0;
        const targetHfov = scenesData[loc.startScene].hfov !== undefined ? scenesData[loc.startScene].hfov : 100;
        viewer.loadScene(loc.startScene, targetPitch, targetYaw, targetHfov);
    }
    
    if (loc.intro) {
        setTimeout(() => {
            showInfoOverlay(loc.intro);
            introShown[locId] = true;
        }, 1000);
    }
    
    updateSidebarActive(locId);
}

window.addEventListener('load', () => {
    initMap();
    renderMapSidebar();
    renderSidebar(); // Sidebar cũ của Pannellum
});

function initPannellum(startScene) {
    let pannellumScenes = {};
    
    for (let key in scenesData) {
        let sceneData = scenesData[key];
        let sceneHotSpots = sceneData.hotSpots.map(spot => {
            if (spot.type === 'info') {
                return {
                    pitch: spot.pitch,
                    yaw: spot.yaw,
                    cssClass: "custom-marker-container", // Class rỗng để chặn Pannellum
                    createTooltipFunc: renderInfoHotspot,
                    createTooltipArgs: { sceneId: key, spot: spot }
                };
            } else if (spot.type === 'scene') {
                return {
                    pitch: spot.pitch,
                    yaw: spot.yaw,
                    cssClass: "custom-marker-container",
                    createTooltipFunc: renderSceneHotspot,
                    createTooltipArgs: { sceneId: spot.sceneId, text: spot.text, icon: spot.icon, targetPitch: spot.targetPitch, targetYaw: spot.targetYaw }
                };
            }
        });

        pannellumScenes[key] = {
            title: sceneData.title,
            type: "equirectangular",
            panorama: sceneData.panorama,
            autoLoad: true,
            hotSpots: sceneHotSpots
        };
    }

    viewer = pannellum.viewer('map-3d', {
        default: {
            firstScene: startScene,
            sceneFadeDuration: 1000,
            compass: false,
            showControls: false,
            autoLoad: true
        },
        scenes: pannellumScenes
    });

    // Bắt sự kiện khi người dùng chuyển scene trong 360 để cập nhật Sidebar
    viewer.on('scenechange', function(sceneId) {
        const locId = scenesData[sceneId].locationId;
        updateSidebarActive(locId);
        
        // Nếu cảnh này có thông tin tự động hiện, thì hiện luôn (không cần chờ click)
        if (scenesData[sceneId].autoInfo) {
            setTimeout(() => {
                showInfoOverlay(scenesData[sceneId].autoInfo);
            }, 800);
        } else {
            // Nếu không, kiểm tra xem có cần hiện popup giới thiệu của địa điểm lớn không
            if (!introShown[locId]) {
                let loc = locations.find(l => l.id === locId);
                if (loc && loc.intro) {
                    setTimeout(() => {
                        showInfoOverlay(loc.intro);
                    }, 800);
                    introShown[locId] = true;
                }
            }
        }
    });

    // Zoom ra xa (hfov: 100) khi người dùng di chuyển (click/touch) quanh map
    const zoomOut = (e) => {
        if (!e.target.closest('.custom-marker-container') && !e.target.closest('.info-overlay') && !e.target.closest('.sidebar')) {
            if (viewer.getHfov() < 100) {
                viewer.lookAt(viewer.getPitch(), viewer.getYaw(), 100, 1500); // Zoom mượt trong 1.5s
            }
        }
    };
    const mapEl = document.getElementById('map-3d');
    mapEl.addEventListener('mousedown', zoomOut);
    mapEl.addEventListener('touchstart', zoomOut, { passive: true });
}

function renderInfoHotspot(hotSpotDiv, args) {
    const spot = args.spot;
    // Bọc nội dung vào 1 div con để tránh xung đột transition với Pannellum
    hotSpotDiv.innerHTML = `<div class="custom-marker-content"><i class="fas ${spot.icon} marker-icon"></i> <span>${spot.title}</span></div>`;
    
    hotSpotDiv.addEventListener('click', function(e) {
        const targetZoom = spot.targetHfov || 50;
        
        // Bước 1: Dịch chuyển qua (pan) mà giữ nguyên zoom
        viewer.lookAt(spot.pitch, spot.yaw, viewer.getHfov(), 800);
        
        // Bước 2: Sau khi dịch chuyển xong mới bắt đầu zoom sâu
        setTimeout(() => {
            viewer.lookAt(spot.pitch, spot.yaw, targetZoom, 1000);
            showInfoOverlay(spot);
        }, 800);
    });
}

function renderSceneHotspot(hotSpotDiv, args) {
    // Dùng chung giao diện với info hotspot để dễ nhận biết
    hotSpotDiv.innerHTML = `<div class="custom-marker-content scene-type"><i class="fas ${args.icon} marker-icon"></i> <span>${args.text}</span></div>`;
    
    hotSpotDiv.addEventListener('click', function(e) {
        const targetPitch = args.targetPitch !== undefined ? args.targetPitch : (scenesData[args.sceneId].pitch || 0);
        const targetYaw = args.targetYaw !== undefined ? args.targetYaw : (scenesData[args.sceneId].yaw || 0);
        const targetHfov = scenesData[args.sceneId].hfov || 100;
        
        // Dịch chuyển sang cảnh mới (với góc nhìn bình thường hfov 100)
        viewer.loadScene(args.sceneId, targetPitch, targetYaw, 100); // Load với hfov rộng
        
        // Chờ 1 giây để cảnh mới load xong, SAU ĐÓ mới bắt đầu zoom sâu vào
        setTimeout(() => {
            viewer.lookAt(targetPitch, targetYaw, targetHfov, 1500);
        }, 1000);
    });
}

function renderSidebar() {
    const listContainer = document.getElementById('locations-list');
    listContainer.innerHTML = ''; 
    
    locations.forEach(loc => {
        const card = document.createElement('div');
        card.className = 'location-card';
        card.id = `card-${loc.id}`;
        
        card.innerHTML = `
            <div class="location-icon"><i class="fas ${loc.icon}"></i></div>
            <div class="location-info">
                <h3>${loc.title}</h3>
                <p>${loc.shortDesc}</p>
            </div>
        `;
        
        card.addEventListener('click', () => {
            const currentSceneId = viewer.getScene();
            
            // Nếu scene hiện tại không phải là scene mặc định của địa điểm này, thì load scene mặc định
            if (currentSceneId !== loc.startScene) {
                const targetPitch = scenesData[loc.startScene].pitch !== undefined ? scenesData[loc.startScene].pitch : 0;
                const targetYaw = scenesData[loc.startScene].yaw !== undefined ? scenesData[loc.startScene].yaw : 0;
                const targetHfov = scenesData[loc.startScene].hfov !== undefined ? scenesData[loc.startScene].hfov : 100;
                viewer.loadScene(loc.startScene, targetPitch, targetYaw, targetHfov);
            } else {
                // Nếu đang ở cùng địa điểm mà click lại thì hiện intro (như nút Help/Info)
                if (loc.intro) {
                    showInfoOverlay(loc.intro);
                }
            }
        });
        
        listContainer.appendChild(card);
    });
    
    // Đánh dấu active mặc định
    updateSidebarActive("o-quan-chuong");
    
    // Xóa đoạn auto show intro trên dashboard
    updateSidebarActive("o-quan-chuong");
}

function updateSidebarActive(locationId) {
    document.querySelectorAll('.location-card').forEach(c => c.classList.remove('active'));
    let activeCard = document.getElementById(`card-${locationId}`);
    if (activeCard) {
        activeCard.classList.add('active');
    }
}

function showInfoOverlay(spot) {
    const overlay = document.getElementById('info-overlay');
    
    // FIX: Sử dụng background-image cho thẻ header
    const headerBg = document.getElementById('info-header-bg');
    if (headerBg) {
        headerBg.style.backgroundImage = `url('${spot.image}')`;
    }
    
    document.getElementById('info-title').textContent = spot.title;
    document.getElementById('info-description').textContent = spot.story;
    
    // Handle extra image
    const extraImg = document.getElementById('info-extra-image');
    if (spot.extraImage) {
        extraImg.src = spot.extraImage;
        extraImg.style.display = 'block';
    } else {
        extraImg.style.display = 'none';
        extraImg.src = '';
    }
    
    // Khởi tạo/Cập nhật Audio UI
    const audioContainer = document.getElementById('audio-controls-container');
    const eq = document.getElementById('audio-equalizer');
    const playIcon = document.getElementById('audio-play-icon');
    const playText = document.getElementById('audio-play-text');
    const ripple = document.getElementById('audio-ripple');

    if (spot.audio) {
        audioContainer.style.display = 'block';
        
        // Cùng một file audio thì không phát lại từ đầu
        if (currentAudio.src.endsWith(spot.audio)) {
            if (!currentAudio.paused) {
                isPlaying = true;
                eq.style.display = 'flex';
                ripple.style.display = 'block';
                playIcon.className = 'fas fa-pause';
                playText.textContent = 'Đang phát...';
            } else {
                isPlaying = false;
                eq.style.display = 'none';
                ripple.style.display = 'none';
                playIcon.className = 'fas fa-play';
                playText.textContent = 'Nghe thuyết minh';
            }
        } else {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio.src = spot.audio;
            
            let playPromise = currentAudio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isPlaying = true;
                    eq.style.display = 'flex';
                    ripple.style.display = 'block';
                    playIcon.className = 'fas fa-pause';
                    playText.textContent = 'Đang phát...';
                }).catch(error => {
                    console.log("Trình duyệt chặn autoplay", error);
                    isPlaying = false;
                    eq.style.display = 'none';
                    ripple.style.display = 'none';
                    playIcon.className = 'fas fa-play';
                    playText.textContent = 'Nghe thuyết minh';
                });
            }
        }
    } else {
        audioContainer.style.display = 'none';
        currentAudio.pause();
        currentAudio.currentTime = 0;
        isPlaying = false;
    }
    
    overlay.classList.remove('hidden');
}

// Xử lý nút Play/Pause audio
document.getElementById('audio-play-btn').addEventListener('click', () => {
    const eq = document.getElementById('audio-equalizer');
    const playIcon = document.getElementById('audio-play-icon');
    const playText = document.getElementById('audio-play-text');
    const ripple = document.getElementById('audio-ripple');
    
    if (isPlaying) {
        currentAudio.pause();
        isPlaying = false;
        eq.style.display = 'none';
        ripple.style.display = 'none';
        playIcon.className = 'fas fa-play';
        playText.textContent = 'Nghe thuyết minh';
    } else {
        currentAudio.play();
        isPlaying = true;
        eq.style.display = 'flex';
        ripple.style.display = 'block';
        playIcon.className = 'fas fa-pause';
        playText.textContent = 'Đang phát...';
    }
});

// Xử lý khi audio kết thúc
currentAudio.addEventListener('ended', () => {
    const eq = document.getElementById('audio-equalizer');
    const playIcon = document.getElementById('audio-play-icon');
    const playText = document.getElementById('audio-play-text');
    const ripple = document.getElementById('audio-ripple');
    
    isPlaying = false;
    eq.style.display = 'none';
    ripple.style.display = 'none';
    playIcon.className = 'fas fa-play';
    playText.textContent = 'Nghe thuyết minh';
});


document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('info-overlay').classList.add('hidden');
    currentAudio.pause(); // Tắt nhạc khi đóng bảng
    viewer.setHfov(100, 500);
});

// Sự kiện cho nút Quay lại map
document.getElementById('back-to-map-btn').addEventListener('click', () => {
    const homeView = document.getElementById('home-view');
    const viewerView = document.getElementById('viewer-view');
    
    viewerView.style.opacity = '0';
    viewerView.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        viewerView.classList.add('hidden');
        homeView.classList.remove('hidden');
        
        homeView.style.opacity = '0';
        homeView.style.transform = 'scale(1.2)';
        void homeView.offsetWidth; // reflow
        
        homeView.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        homeView.style.opacity = '1';
        homeView.style.transform = 'scale(1)';
        
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause();
            const playBtn = document.getElementById('audio-play-btn');
            const playIcon = document.getElementById('audio-play-icon');
            const ripple = document.getElementById('audio-ripple');
            playBtn.classList.remove('playing');
            playIcon.className = 'fas fa-play';
            ripple.style.display = 'none';
            clearInterval(currentEqInterval);
            document.getElementById('audio-equalizer').style.display = 'none';
            document.getElementById('audio-play-text').textContent = "Nghe thuyết minh";
        }
        
        // Bay ra xa để tạo cảm giác thoát ra
        maplibreMap.flyTo({ zoom: 15.5, pitch: 60, speed: 1.5, curve: 1 });
    }, 800);
});

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if(currentTheme === 'light') {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
                // Switch map to dark
                if(maplibreMap) maplibreMap.setStyle('https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
                // Switch map to light
                if(maplibreMap) maplibreMap.setStyle('https://basemaps.cartocdn.com/gl/positron-gl-style/style.json');
            }
        });
    }
});

