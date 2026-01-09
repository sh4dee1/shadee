function openLink(platform) {
    const links = {
        instagram: "https://www.instagram.com/shade.mall?igsh=MTNpcms4eDJ6c3lsYw%3D%3D&utm_source=qr",
        snapchat: "https://snapchat.com/t/2tDjjRxk",
        tiktok: "https://www.tiktok.com/@shade.mall.akre?_r=1&_t=ZS-92uZqaFbKvi"
    };

    if (links[platform]) {
        window.open(links[platform], "_blank");
    } else {
        console.error("Invalid platform:", platform);
    }
}
