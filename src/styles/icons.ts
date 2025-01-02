const icons = {
  eyeOpen: `<svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.49999 9C10.0281 9 10.5346 8.78929 10.908 8.41421C11.2814 8.03914 11.4912 7.53043 11.4912 7C11.4912 6.46957 11.2814 5.96086 10.908 5.58579C10.5346 5.21071 10.0281 5 9.49999 5C8.97189 5 8.46542 5.21071 8.092 5.58579C7.71858 5.96086 7.50879 6.46957 7.50879 7C7.50879 7.53043 7.71858 8.03914 8.092 8.41421C8.46542 8.78929 8.97189 9 9.49999 9Z" fill="#B4B9CA"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C1.26839 2.943 5.04171 0 9.5 0C13.9583 0 17.7316 2.943 19 7C17.7316 11.057 13.9583 14 9.5 14C5.04171 14 1.26839 11.057 0 7ZM13.4824 7C13.4824 8.06087 13.0628 9.07828 12.316 9.82843C11.5691 10.5786 10.5562 11 9.5 11C8.4438 11 7.43087 10.5786 6.68402 9.82843C5.93718 9.07828 5.51761 8.06087 5.51761 7C5.51761 5.93913 5.93718 4.92172 6.68402 4.17157C7.43087 3.42143 8.4438 3 9.5 3C10.5562 3 11.5691 3.42143 12.316 4.17157C13.0628 4.92172 13.4824 5.93913 13.4824 7Z" fill="#B4B9CA"/>
    </svg>`,
  checkbox: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5C1 2.79086 2.79086 1 5 1H15C17.2091 1 19 2.79086 19 5V15C19 17.2091 17.2091 19 15 19H5C2.79086 19 1 17.2091 1 15V5Z" fill="white" stroke="#E3EBF2" stroke-width="2"/>
</svg>
`,
  facebook: `<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 31C0 13.8792 13.8792 0 31 0C48.1208 0 62 13.8792 62 31C62 48.1208 48.1208 62 31 62C13.8792 62 0 48.1208 0 31Z" fill="#395998"/>
<path d="M32.065 39.9972V31.8012H34.83L35.241 28.5922H32.065V26.5482C32.065 25.6222 32.323 24.9882 33.652 24.9882H35.336V22.1272C34.5166 22.0394 33.693 21.997 32.869 22.0002C30.425 22.0002 28.747 23.4922 28.747 26.2312V28.5862H26V31.7952H28.753V39.9972H32.065Z" fill="white"/>
</svg>
`,
  twitter: `<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 31C0 13.8792 13.8792 0 31 0C48.1208 0 62 13.8792 62 31C62 48.1208 48.1208 62 31 62C13.8792 62 0 48.1208 0 31Z" fill="#169CE8"/>
<path d="M41.3999 24.5496C40.6343 24.8896 39.8119 25.1184 38.9487 25.2216C39.8303 24.6936 40.5063 23.8576 40.8247 22.8608C40.0007 23.3496 39.0871 23.7048 38.1143 23.8968C37.3359 23.0672 36.2271 22.5488 34.9999 22.5488C32.6431 22.5488 30.7327 24.46 30.7327 26.816C30.7327 27.1504 30.7711 27.4768 30.8431 27.788C27.2967 27.6104 24.1527 25.9112 22.0471 23.3288C21.6807 23.9592 21.4703 24.692 21.4703 25.4752C21.4703 26.9552 22.2231 28.2616 23.3679 29.0264C22.6687 29.004 22.0103 28.812 21.4351 28.4928C21.4351 28.5112 21.4351 28.528 21.4351 28.5464C21.4351 30.6144 22.9055 32.3392 24.8583 32.7304C24.5007 32.828 24.1231 32.88 23.7335 32.88C23.4591 32.88 23.1911 32.8528 22.9311 32.804C23.4743 34.4992 25.0503 35.7336 26.9175 35.768C25.4575 36.9128 23.6175 37.5952 21.6175 37.5952C21.2735 37.5952 20.9335 37.5752 20.5991 37.5352C22.4879 38.7456 24.7303 39.452 27.1407 39.452C34.9903 39.452 39.2815 32.9496 39.2815 27.3104C39.2815 27.1256 39.2775 26.9416 39.2695 26.7584C40.1039 26.156 40.8279 25.4048 41.3999 24.5496Z" fill="white"/>
</svg>
`,
  apple: `<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 31C0 13.8792 13.8792 0 31 0C48.1208 0 62 13.8792 62 31C62 48.1208 48.1208 62 31 62C13.8792 62 0 48.1208 0 31Z" fill="#1B1F2F"/>
<path d="M35.125 20C33.972 20.067 32.6483 20.7093 31.8613 21.5273C31.1503 22.2713 30.5894 23.3763 30.8184 24.4453C32.0714 24.4783 33.329 23.8193 34.082 22.9863C34.785 22.2073 35.318 21.12 35.125 20ZM35.1934 24.4434C33.3844 24.4434 32.628 25.5547 31.375 25.5547C30.086 25.5547 28.9077 24.5137 27.3477 24.5137C25.2257 24.5147 22 26.4803 22 31.1113C22 35.3243 25.8177 40 27.9727 40C29.2817 40.013 29.599 39.177 31.375 39.168C33.153 39.155 33.5367 40.011 34.8477 40C36.3237 39.989 37.4764 38.367 38.3184 37.082C38.9224 36.162 39.1707 35.6923 39.6387 34.6523C36.1657 33.7723 35.4747 28.1717 39.6387 27.0137C38.8527 25.6727 36.5584 24.4434 35.1934 24.4434Z" fill="white"/>
</svg>
`,
};

export default icons;
