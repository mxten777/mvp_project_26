// 🎨 PWA 아이콘 생성기 - SVG로 다양한 크기 생성
import fs from 'fs';
import path from 'path';

// 📐 아이콘 크기 정의
const ICON_SIZES = [
  { size: 72, name: 'icon-72x72.png' },
  { size: 96, name: 'icon-96x96.png' },
  { size: 128, name: 'icon-128x128.png' },
  { size: 144, name: 'icon-144x144.png' },
  { size: 152, name: 'icon-152x152.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 384, name: 'icon-384x384.png' },
  { size: 512, name: 'icon-512x512.png' }
];

// 🎨 바이칼 리조트 로고 SVG
const generateIconSVG = (size) => {
  const padding = size * 0.1; // 10% 패딩
  const iconSize = size - (padding * 2);
  const center = size / 2;
  
  return `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 그라데이션 정의 -->
    <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c084fc;stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0891b2;stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
    </linearGradient>
    
    <!-- 그림자 필터 -->
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- 배경 원 -->
  <circle cx="${center}" cy="${center}" r="${iconSize/2}" fill="url(#primaryGradient)" filter="url(#shadow)"/>
  
  <!-- 바이칼 호수 (파도) -->
  <path d="M ${padding + iconSize*0.2} ${center + iconSize*0.1} 
           Q ${center} ${center - iconSize*0.1} ${size - padding - iconSize*0.2} ${center + iconSize*0.1}
           Q ${center} ${center + iconSize*0.2} ${padding + iconSize*0.2} ${center + iconSize*0.1}" 
        fill="url(#secondaryGradient)" opacity="0.8"/>
  
  <!-- 리조트 건물 실루엣 -->
  <g transform="translate(${center}, ${center - iconSize*0.15})">
    <!-- 메인 건물 -->
    <rect x="${-iconSize*0.15}" y="${-iconSize*0.1}" width="${iconSize*0.3}" height="${iconSize*0.2}" 
          fill="white" opacity="0.9" rx="2"/>
    
    <!-- 좌측 건물 -->
    <rect x="${-iconSize*0.25}" y="${-iconSize*0.05}" width="${iconSize*0.08}" height="${iconSize*0.15}" 
          fill="white" opacity="0.7" rx="1"/>
    
    <!-- 우측 건물 -->
    <rect x="${iconSize*0.17}" y="${-iconSize*0.05}" width="${iconSize*0.08}" height="${iconSize*0.15}" 
          fill="white" opacity="0.7" rx="1"/>
    
    <!-- 중앙 타워 -->
    <rect x="${-iconSize*0.02}" y="${-iconSize*0.18}" width="${iconSize*0.04}" height="${iconSize*0.08}" 
          fill="url(#accentGradient)" rx="1"/>
  </g>
  
  <!-- 별/다이아몬드 장식 -->
  <g transform="translate(${center + iconSize*0.25}, ${center - iconSize*0.25})">
    <path d="M 0,-${iconSize*0.04} L ${iconSize*0.02},0 L 0,${iconSize*0.04} L -${iconSize*0.02},0 Z" 
          fill="white" opacity="0.8"/>
  </g>
  
  <!-- 텍스트 (작은 크기에서는 생략) -->
  ${size >= 128 ? `
  <text x="${center}" y="${size - padding - iconSize*0.05}" 
        text-anchor="middle" 
        font-family="Arial, sans-serif" 
        font-size="${iconSize*0.08}" 
        font-weight="bold" 
        fill="white" 
        opacity="0.9">BAIKAL</text>
  ` : ''}
</svg>`;
};

// 🎭 파비콘 SVG (간단한 버전)
const generateFaviconSVG = () => {
  return `
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- 배경 -->
  <circle cx="16" cy="16" r="14" fill="url(#grad)"/>
  
  <!-- 간단한 건물 실루엣 -->
  <rect x="10" y="18" width="12" height="8" fill="white" opacity="0.9" rx="1"/>
  <rect x="8" y="20" width="3" height="6" fill="white" opacity="0.7"/>
  <rect x="21" y="20" width="3" height="6" fill="white" opacity="0.7"/>
  <rect x="14" y="14" width="4" height="4" fill="#f59e0b" rx="1"/>
  
  <!-- 파도 -->
  <path d="M 6 20 Q 16 16 26 20 Q 16 24 6 20" fill="#06b6d4" opacity="0.6"/>
</svg>`;
};

// 📱 애플 터치 아이콘 SVG
const generateAppleTouchIconSVG = (size) => {
  const cornerRadius = size * 0.2; // iOS 스타일 둥근 모서리
  
  return `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iosGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c084fc;stop-opacity:1" />
    </linearGradient>
    <filter id="iosShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.2"/>
    </filter>
  </defs>
  
  <!-- iOS 스타일 배경 -->
  <rect width="${size}" height="${size}" fill="url(#iosGrad)" rx="${cornerRadius}" filter="url(#iosShadow)"/>
  
  <!-- 컨텐츠는 기본 아이콘과 동일하지만 패딩 조정 -->
  <g transform="translate(${size*0.1}, ${size*0.1})">
    ${generateIconSVG(size * 0.8).replace(/<svg[^>]*>|<\/svg>/g, '').replace(/id="[^"]*"/g, (match) => match.replace(/"/g, '"ios'))}
  </g>
</svg>`;
};

// 💾 SVG를 파일로 저장
const saveSVGFile = (svgContent, filename) => {
  const publicDir = path.join(process.cwd(), 'public');
  const imagesDir = path.join(publicDir, 'images');
  
  // 디렉토리 확인 및 생성
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  const filePath = path.join(imagesDir, filename);
  fs.writeFileSync(filePath, svgContent, 'utf8');
  console.log(`✅ 생성완료: ${filename}`);
};

// 🚀 아이콘 생성 실행
const generateAllIcons = () => {
  console.log('🎨 PWA 아이콘 생성 시작...\n');
  
  // 메인 PWA 아이콘들 생성
  ICON_SIZES.forEach(({ size, name }) => {
    const svgContent = generateIconSVG(size);
    const svgName = name.replace('.png', '.svg');
    saveSVGFile(svgContent, svgName);
  });
  
  // 파비콘 생성
  saveSVGFile(generateFaviconSVG(), 'favicon.svg');
  
  // 애플 터치 아이콘 생성
  saveSVGFile(generateAppleTouchIconSVG(180), 'apple-touch-icon.svg');
  
  // 마스크 아이콘 (Safari용)
  const maskIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm0 320c-70.7 0-128-57.3-128-128S185.3 128 256 128s128 57.3 128 128-57.3 128-128 128z" fill="black"/>
  <rect x="200" y="280" width="112" height="64" fill="black" rx="4"/>
  <rect x="180" y="300" width="32" height="44" fill="black"/>
  <rect x="300" y="300" width="32" height="44" fill="black"/>
  <rect x="240" y="240" width="32" height="40" fill="black" rx="4"/>
  <path d="M 160 300 Q 256 260 352 300 Q 256 340 160 300" fill="black"/>
</svg>`;
  saveSVGFile(maskIcon, 'mask-icon.svg');
  
  console.log('\n🎉 모든 PWA 아이콘이 생성되었습니다!');
  console.log('\n📁 생성된 파일 목록:');
  console.log('   • icon-72x72.svg ~ icon-512x512.svg (8개)');
  console.log('   • favicon.svg');
  console.log('   • apple-touch-icon.svg');
  console.log('   • mask-icon.svg');
  console.log('\n💡 참고: SVG 파일을 PNG로 변환하려면 온라인 변환기나');
  console.log('   ImageMagick, Sharp 등의 도구를 사용하세요.');
};

// 스크립트 실행
generateAllIcons();