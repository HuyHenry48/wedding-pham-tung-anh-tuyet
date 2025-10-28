# 💒 Wedding Website - Phạm Tùng & Ánh Tuyết

Website thiệp cưới online với tính năng chuyển đổi giữa view nhà trai và nhà gái.

## 🌐 Link Truy Cập

- **Nhà Trai (mặc định):** https://huyhenry48.github.io/huy-uyen-wedding/
- **Nhà Gái:** https://huyhenry48.github.io/huy-uyen-wedding/?view=bride

## ✨ Tính Năng

- ✅ Tự động chuyển đổi thông tin theo nhà trai/nhà gái
- ✅ Timeline events riêng biệt cho từng bên
- ✅ Highlight ngày trong lịch tự động
- ✅ Google Maps links cho cả 2 địa điểm
- ✅ QR Code thanh toán riêng
- ✅ Responsive mobile-friendly
- ✅ Preview đẹp khi share link (Facebook, Zalo, Telegram)

## 🔗 Preview Khi Share Link

Khi bạn share link website trên:
- **Facebook/Messenger**: Hiển thị ảnh, tiêu đề và mô tả
- **Zalo**: Hiển thị thumbnail và text preview  
- **Telegram/WhatsApp**: Hiển thị rich preview
- **iMessage**: Hiển thị preview card

### Kiểm Tra Preview

1. **Facebook Debugger:**
   - Truy cập: https://developers.facebook.com/tools/debug/
   - Nhập URL: `https://huyhenry48.github.io/huy-uyen-wedding/`
   - Click "Debug" để xem preview

2. **LinkedIn Post Inspector:**
   - Truy cập: https://www.linkedin.com/post-inspector/
   - Nhập URL và kiểm tra

3. **Twitter Card Validator:**
   - Truy cập: https://cards-dev.twitter.com/validator
   - Nhập URL và xem preview

### Cập Nhật Preview Content

Nếu muốn thay đổi nội dung preview, edit các meta tags trong `index.html`:

```html
<!-- Dòng 157 -->
<meta property="og:title" content="💑 Thiệp mời đám cưới - Phạm Tùng & Ánh Tuyết">

<!-- Dòng 158 -->
<meta property="og:description" content="🌸 Trân trọng kính mời...">

<!-- Dòng 159 - Thay ảnh preview -->
<meta property="og:image" content="URL_ẢNH_CỦA_BẠN">
```

## 📝 Cập Nhật Thông Tin

### Thay đổi ngày giờ:
Edit trong `index.html`, section `window.owiData`:
```javascript
ngaybatdauNhaTrai: "2025-12-12T14:10:00",
ngaybatdauNhaGai: "2025-12-01T10:00:00",
```

### Thay đổi địa điểm:
```javascript
nhatrai: {
    time: "Tổ chức vào lúc 10 giờ 00 phút",
    diachi: "Nhà Văn Hoá xóm Vân Hoà, Hồng Vân, Hà Nội",
    map: "https://maps.app.goo.gl/2JnAiK4VJrWRArC4A"
}
```

## 🎨 Custom CSS

CSS tùy chỉnh nằm trong:
- `wedding-switcher.css` - Styles cho mobile/desktop
- Mobile breakpoint: `@media (max-width: 768px)`

## 🚀 Deploy

Website đang được host trên GitHub Pages. Để update:

```bash
git add .
git commit -m "Cập nhật nội dung"
git push origin main
```

Website sẽ tự động cập nhật sau vài phút.

## 📱 QR Code

QR Code thanh toán đã được thêm vào:
- `qr_chure.jpg` - QR code chú rể
- `qr_codau.jpg` - QR code cô dâu

## 🔧 Troubleshooting

### Preview không hiển thị đúng?
1. Clear cache Facebook Debugger
2. Kiểm tra URL image có public không
3. Đợi vài phút để cache cập nhật

### Ảnh không load trên mobile?
1. Kiểm tra link ảnh còn valid không
2. Sử dụng HTTPS cho tất cả image URLs

### Calendar không highlight đúng ngày?
1. Check `ngaybatdau` và `ngayketthuc` format đúng
2. Xem Console log để debug

---

**Made with ❤️ for Phạm Tùng & Ánh Tuyết**
