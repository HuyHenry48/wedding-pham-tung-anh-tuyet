// Wedding Side Switcher - Chuyển đổi giữa nhà trai và nhà gái

(function() {
    // Đọc URL parameter
    function getURLParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Kiểm tra xem có phải view nhà gái không
    const viewMode = getURLParameter('view');
    const isBrideSide = viewMode === 'codau' || viewMode === 'bride' || viewMode === 'nha-gai';

    // Cập nhật dữ liệu dựa trên view mode
    if (isBrideSide && window.owiData) {
        console.log('Đang hiển thị phiên bản nhà gái');
        
        // Cập nhật ngày cho nhà gái
        window.owiData.ngaybatdau = window.owiData.ngaybatdauNhaGai;
        window.owiData.ngayketthuc = window.owiData.ngayketthucNhaGai;
        
        // Cập nhật timeline cho nhà gái
        window.owiData.timeline = {
            title: "Wedding Timeline",
             step1: {
                time: "9:30 Thứ Bảy, ngày 08.11.2025",
                title: "Chụp ảnh cùng gia đình"
            },
            step2: {
                time: "10:00 Thứ Bảy, ngày 08.11.2025",
                title: "Lễ Vu Quy"
            },
            step3: {
                time: "10:30 Thứ Bảy, ngày 08.11.2025",
                title: "Khai Tiệc"
            }
        };

        // Đảo thứ tự hiển thị - ưu tiên thông tin nhà gái
        window.owiData.prioritySide = 'bride';
        
        // Swapped địa điểm hiển thị mặc định cho nhà gái
        const temp = window.owiData.nhagai;
        window.owiData.defaultLocation = temp;
        window.owiData.secondaryLocation = window.owiData.nhatrai;
        
        // Có thể thêm class vào body để CSS có thể tùy chỉnh
        document.addEventListener('DOMContentLoaded', function() {
            document.body.classList.add('bride-view');
            
            // Tự động click vào nút "Nhà Gái" để hiển thị thông tin nhà gái
            setTimeout(function() {
                const brideButton = document.querySelector('#GROUP455');
                if (brideButton) {
                    brideButton.click();
                }
            }, 500);
            
            // Đảo thứ tự hiển thị nhà trai/nhà gái trong section giới thiệu
            swapGenderSections();
            
            // Cập nhật nội dung địa điểm tiệc cưới
            updateLocationContent();
        });
        
    } else {
        console.log('Đang hiển thị phiên bản nhà trai (mặc định)');
        
        // Cập nhật ngày cho nhà trai
        window.owiData.ngaybatdau = window.owiData.ngaybatdauNhaTrai;
        window.owiData.ngayketthuc = window.owiData.ngayketthucNhaTrai;
        
        // Cập nhật timeline cho nhà trai
        window.owiData.timeline = {
            title: "Wedding Timeline",
            step1: {
                time: "11:00 Thứ Bảy, ngày 08.11.2025",
                title: "Chụp ảnh cùng gia đình"
            },
            step2: {
                time: "11:30 Thứ Bảy, ngày 08.11.2025",
                title: "Lễ Thành Hôn"
            },
            step3: {
                time: "11:30 Thứ Bảy, ngày 08.11.2025",
                title: "Tiệc Lễ Thành Hôn"
            }
        };

        // Mặc định là nhà trai
        window.owiData.prioritySide = 'groom';
        window.owiData.defaultLocation = window.owiData.nhatrai;
        window.owiData.secondaryLocation = window.owiData.nhagai;
        
        document.addEventListener('DOMContentLoaded', function() {
            document.body.classList.add('groom-view');
            
            // Cập nhật nội dung địa điểm tiệc cười
            updateLocationContent();
        });
    }

    // Event listener cho resize window
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            const timelineTitle = document.querySelector('#timeline-title');
            if (timelineTitle) {
                timelineTitle.style.fontSize = '35px';
                timelineTitle.style.lineHeight = '1.3';
            }
        }
    });

    // Gọi lại sau khi page load đầy đủ
    window.addEventListener('load', function() {
        setTimeout(updateLocationContent, 500);
    });

    // Hàm helper để lấy dữ liệu theo thứ tự ưu tiên
    window.getWeddingData = function() {
        if (window.owiData.prioritySide === 'bride') {
            return {
                primary: window.owiData.nhagai,
                secondary: window.owiData.nhatrai,
                primaryLabel: 'Nhà Gái',
                secondaryLabel: 'Nhà Trai'
            };
        } else {
            return {
                primary: window.owiData.nhatrai,
                secondary: window.owiData.nhagai,
                secondaryLabel: 'Nhà Gái'
            };
        }
    };

    // Hàm highlight các ngày trong lịch
    function highlightCalendarDates() {
        // Xóa highlight cũ
        document.querySelectorAll('[id^="ngay"]').forEach(el => {
            el.style.color = '';
            el.style.background = '';
            el.style.borderRadius = '';
            el.style.fontWeight = '';
        });
        
        // Lấy ngày tương ứng với view hiện tại
        let startDate, endDate;
        
        if (window.owiData.prioritySide === 'bride') {
            startDate = new Date(window.owiData.ngaybatdauNhaGai);
            endDate = new Date(window.owiData.ngayketthucNhaGai);
        } else {
            startDate = new Date(window.owiData.ngaybatdauNhaTrai);
            endDate = new Date(window.owiData.ngayketthucNhaTrai);
        }
        
        // Highlight các ngày
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            let date = d.getDate();
            const dateElement = document.querySelector("#ngay" + date);
            if (dateElement) {
                Object.assign(dateElement.style, {
                    color: "rgb(255, 255, 255)",
                    background: "red",
                    borderRadius: "35px",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "20px",
                    fontWeight: "bold",
                    lineHeight: "1.6",
                    textAlign: "center",
                });
            }
        }
        
        // Cập nhật tháng/năm trong calendar
        const month = startDate.toLocaleString("en-US", { month: "long" });
        const year = startDate.getFullYear();
        const formattedMonthYear = String(startDate.getMonth() + 1).padStart(2, "0") + "/" + year;
        
        const monthEl = document.querySelector("#thangtronglich");
        const monthYearEl = document.querySelector("#thangvanamtronglich");
        
        if (monthEl) monthEl.textContent = month;
        if (monthYearEl) monthYearEl.textContent = formattedMonthYear;
        
        console.log('Highlighted calendar dates for:', window.owiData.prioritySide);
        console.log('Calendar month:', month, formattedMonthYear);
    }

    // Hàm cập nhật nội dung địa điểm tiệc cười
    function updateLocationContent() {
        // Cập nhật href cho các map buttons
        const nhatraiMapBtn = document.querySelector('.nhatraimap');
        const nhagaiMapBtn = document.querySelector('.nhagaimap');
        
        if (nhatraiMapBtn && window.owiData.nhatrai) {
            nhatraiMapBtn.href = window.owiData.nhatrai.map;
        }
        
        if (nhagaiMapBtn && window.owiData.nhagai) {
            nhagaiMapBtn.href = window.owiData.nhagai.map;
        }
        
        // Highlight các ngày trong lịch
        highlightCalendarDates();
        
        // Fix font-size cho timeline title trên mobile
        if (window.innerWidth <= 768) {
            const timelineTitle = document.querySelector('#timeline-title');
            if (timelineTitle) {
                timelineTitle.style.fontSize = '35px';
                timelineTitle.style.lineHeight = '1.3';
            }
        }
        
        console.log('Updated map links:');
        console.log('- Nhà trai:', window.owiData.nhatrai?.map);
        console.log('- Nhà gái:', window.owiData.nhagai?.map);
    }

    // Hàm để đảo thứ tự hiển thị nhà trai/nhà gái
    function swapGenderSections() {
        // Đảo thứ tự trong section GROUP516 (phần giới thiệu gia đình)
        const group516 = document.querySelector('#GROUP516 .ladi-group');
        if (group516) {
            const children = Array.from(group516.children);
            // Reverse children order
            children.reverse().forEach(child => {
                group516.appendChild(child);
            });
        }
        
        // Đảo thứ tự GROUP515 và GROUP517 (ảnh giới thiệu chú rể và cô dâu)
        const container = document.querySelector('#SECTION358 .ladi-container');
        if (container) {
            const group515 = document.querySelector('#GROUP515');
            const group517 = document.querySelector('#GROUP517');
            if (group515 && group517) {
                // Swap positions
                const parent = group515.parentNode;
                const group515Next = group515.nextSibling;
                parent.insertBefore(group517, group515);
                parent.insertBefore(group515, group515Next);
            }
        }
    }

    // Log để debug
    console.log('Wedding data loaded:', window.owiData);
    console.log('Priority side:', window.owiData.prioritySide);
})();

